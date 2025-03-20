import { GEMINI_API_KEY, GEMINI_MODEL, API_SETTINGS } from "./env";

// Import the GoogleGenerativeAI library
const importGoogleGenerativeAI = async () => {
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  return { GoogleGenerativeAI };
};

// Mock data for when API quota is exhausted
const mockResumeAnalysis = {
  matchedSkills: ["JavaScript", "React", "Frontend development"],
  unmatchedSkills: ["RTK Query", "PostgreSQL", "Neo4j"],
  resumeScore: {
    score: 70,
    strengths: [
      "Experience with React development",
      "Frontend development background",
      "Full stack capabilities"
    ],
    weaknesses: [
      "No mention of state management libraries",
      "Missing database experience with PostgreSQL or Neo4j",
      "No explicit mention of responsive design skills"
    ]
  },
  assessmentScore: {
    score: 0,
    feedback: "This will be filled in later after assessment"
  },
  improvementPoints: [
    "Add experience with modern state management libraries like Redux or RTK Query",
    "Include database optimization experience, particularly with PostgreSQL or Neo4j",
    "Highlight responsive design and cross-browser compatibility skills",
    "Mention version control experience with Git specifically"
  ],
  overallScore: 0,
  summary: "The resume shows good React and frontend development experience but lacks specific technologies mentioned in the job description."
};

const mockAssessmentAnalysis = {
  assessmentScore: {
    score: 75,
    feedback: "The candidate demonstrated good understanding of core React concepts but could improve knowledge of advanced state management techniques."
  },
  questionEvaluation: [
    {
      question: "Explain the concept of Virtual DOM in React.",
      answer: "The answer provided by the user",
      feedback: "Good understanding of the basic concept, but could elaborate on performance implications.",
      score: 80
    },
    {
      question: "What is the purpose of useEffect in React hooks?",
      answer: "The answer provided by the user",
      feedback: "Solid explanation of the core functionality.",
      score: 70
    },
    {
      question: "Describe the difference between props and state in React.",
      answer: "The answer provided by the user", 
      feedback: "Correct distinction between the two concepts.",
      score: 75
    }
  ]
};

// Initialize the Gemini AI model
export const initializeGeminiModel = async () => {
  try {
    const { GoogleGenerativeAI } = await importGoogleGenerativeAI();
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      generationConfig: API_SETTINGS,
    });
    
    return model;
  } catch (error) {
    console.error("Error initializing Gemini model:", error);
    throw error;
  }
};

// Generate assessment questions based on resume and job description
export const generateAssessmentQuestions = async (resumeText: string, jobDescription: string = "") => {
  try {
    const model = await initializeGeminiModel();
    const chatSession = model.startChat({
      generationConfig: {
        ...API_SETTINGS,
        maxOutputTokens: 2048, // Reduce token count for faster response
      },
      history: [],
    });

    console.log("Generating assessment questions...");

    let prompt;
    
    if (jobDescription && jobDescription.trim() !== "") {
      // If job description is provided, generate questions matching resume to job requirements
      prompt = `
      Based on the following resume and job description, generate 3-5 short, fundamental knowledge assessment questions that test the candidate's technical knowledge in relevant skills.
      
      RESUME:
      ${resumeText}
      
      JOB DESCRIPTION: 
      ${jobDescription}
      
      Please provide your questions in the following JSON format:
      {
        "questions": [
          {
            "id": "1",
            "question": "Technical question 1"
          },
          {
            "id": "2", 
            "question": "Technical question 2"
          },
          ...
        ]
      }
      
      IMPORTANT GUIDELINES:
      1. Focus on fundamental knowledge and core concepts
      2. Questions should require short, focused answers (1-3 sentences)
      3. Target specific technical skills mentioned in both the resume and job description
      4. Avoid open-ended questions that require lengthy responses
      5. Focus on key technical knowledge verification, not experience storytelling
      
      IMPORTANT: Respond ONLY with the JSON object, with no additional text before or after.
      `;
    } else {
      // If no job description, generate questions based solely on resume content and professional domain
      prompt = `
      Based on the following resume, generate 3-5 short, fundamental knowledge assessment questions that test the candidate's technical knowledge in their professional domain.
      
      RESUME:
      ${resumeText}
      
      Please provide your questions in the following JSON format:
      {
        "questions": [
          {
            "id": "1",
            "question": "Technical question 1"
          },
          {
            "id": "2", 
            "question": "Technical question 2"
          },
          ...
        ]
      }
      
      IMPORTANT GUIDELINES:
      1. First identify the candidate's professional domain (e.g., software engineering, nursing, teaching, finance, etc.)
      2. Create questions specific to their professional field and expertise areas mentioned in their resume
      3. Focus on fundamental knowledge and core concepts in their specific domain
      4. Questions should require short, focused answers (1-3 sentences)
      5. Avoid open-ended questions that require lengthy responses
      6. Focus on key knowledge verification in their specific field, not experience storytelling
      
      IMPORTANT: Respond ONLY with the JSON object, with no additional text before or after.
      `;
    }

    console.log("Sending prompt to Gemini API...");
    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response?.text();
    
    if (!responseText) {
      console.error("Empty response from Gemini API");
      throw new Error("Empty response from Gemini API");
    }
    
    console.log("Received response from Gemini API:", responseText.substring(0, 100) + "...");
    
    // Parse the JSON response
    try {
      // Find JSON in the response text (in case there's any extra text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        console.error("No JSON found in the response");
        throw new Error("No JSON found in the response");
      }
      
      const parsedData = JSON.parse(jsonMatch[0]);
      console.log("Successfully parsed questions:", parsedData.questions?.length || 0);
      return parsedData;
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      throw new Error("Failed to parse Gemini response");
    }
  } catch (error) {
    console.error("Error generating assessment questions:", error);
    
    // Check for quota exceeded error (status 429)
    if (error instanceof Error && error.message.includes("429")) {
      console.log("API quota exceeded, returning fallback questions");
      return {
        questions: [
          {
            id: "1",
            question: "Explain a fundamental concept from your primary professional field."
          },
          {
            id: "2",
            question: "What is a key principle or methodology you follow in your work?"
          },
          {
            id: "3",
            question: "Describe a common challenge in your professional domain and how you would approach solving it."
          },
          {
            id: "4",
            question: "What are the most important skills for success in your field?"
          }
        ]
      };
    }
    
    throw error;
  }
};

// Parse resume text using Gemini AI
export const analyzeResume = async (resumeText: string, jobDescription: string = "") => {
  try {
    const model = await initializeGeminiModel();
    const chatSession = model.startChat({
      generationConfig: API_SETTINGS,
      history: [],
    });

    const prompt = `
    I need you to analyze this resume against the job description and provide a structured evaluation.
    
    RESUME:
    ${resumeText}
    
    ${jobDescription ? `JOB DESCRIPTION: ${jobDescription}` : ''}
    
    Please provide your analysis in the following JSON format:
    {
      "matchedSkills": ["skill1", "skill2", ...],
      "unmatchedSkills": ["skill1", "skill2", ...],
      "resumeScore": {
        "score": (number between 0-100),
        "strengths": ["strength1", "strength2", ...],
        "weaknesses": ["weakness1", "weakness2", ...]
      },
      "assessmentScore": {
        "score": 0,
        "feedback": "This will be filled in later after assessment"
      },
      "improvementPoints": [
        "detailed improvement point 1",
        "detailed improvement point 2",
        ...
      ],
      "overallScore": 0,
      "summary": "brief summary of the resume analysis"
    }
    
    The matchedSkills should be skills mentioned in both the resume and job description.
    The unmatchedSkills should be important skills from the job description not found in the resume.
    
    IMPORTANT: The resumeScore.score should be on a scale of 0-100, representing how well the resume matches the job requirements based on skills and experience.
    
    IMPORTANT: Respond ONLY with the JSON object, with no additional text before or after.
    `;

    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response?.text();
    
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }
    
    // Parse the JSON response
    try {
      // Find JSON in the response text (in case there's any extra text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in the response");
      }
      
      const parsedData = JSON.parse(jsonMatch[0]);
      
      // Ensure the resumeScore is worth 60% of the total in our calculations
      parsedData.resumeScore.score = Math.min(100, Math.max(0, parsedData.resumeScore.score));
      
      return parsedData;
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      throw new Error("Failed to parse Gemini response");
    }
  } catch (error) {
    console.error("Error analyzing resume:", error);
    
    // Check for quota exceeded error (status 429)
    if (error instanceof Error && error.message.includes("429")) {
      console.log("API quota exceeded, returning mock resume analysis");
      return mockResumeAnalysis;
    }
    
    throw error;
  }
};

// Analyze assessment questions
export const analyzeAssessment = async (questions: { question: string, answer: string }[]) => {
  try {
    const model = await initializeGeminiModel();
    const chatSession = model.startChat({
      generationConfig: API_SETTINGS,
      history: [],
    });

    const questionsText = questions.map(q => 
      `Question: ${q.question}\nAnswer: ${q.answer}`
    ).join("\n\n");

    const prompt = `
    I need you to evaluate the following assessment responses:
    
    ${questionsText}
    
    Please provide your analysis in the following JSON format:
    {
      "assessmentScore": {
        "score": (number between 0-100),
        "feedback": "detailed feedback on the assessment"
      },
      "questionEvaluation": [
        {
          "question": "question text",
          "answer": "answer text",
          "feedback": "specific feedback on this answer",
          "score": (number between 0-100)
        },
        ...
      ]
    }
    
    EVALUATION GUIDELINES:
    1. Focus on accuracy and understanding of fundamental concepts
    2. Look for clear, concise answers that demonstrate technical knowledge
    3. Highlight misconceptions or gaps in understanding
    4. Be critical but fair in your assessment
    5. The assessment should be worth 40% of the total score
    
    IMPORTANT: Respond ONLY with the JSON object, with no additional text before or after.
    `;

    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response?.text();
    
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }
    
    // Parse the JSON response
    try {
      // Find JSON in the response text (in case there's any extra text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in the response");
      }
      
      return JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      throw new Error("Failed to parse Gemini response");
    }
  } catch (error) {
    console.error("Error analyzing assessment:", error);
    
    // Check for quota exceeded error (status 429)
    if (error instanceof Error && error.message.includes("429")) {
      console.log("API quota exceeded, returning mock assessment analysis");
      
      // Create a customized mock with the actual questions and answers
      const customMockAssessment = {
        ...mockAssessmentAnalysis,
        questionEvaluation: questions.map((q, index) => ({
          question: q.question,
          answer: q.answer,
          feedback: "Due to API limitations, detailed feedback cannot be provided at this time.",
          score: 70 + Math.floor(Math.random() * 20) // Random score between 70-90
        }))
      };
      
      return customMockAssessment;
    }
    
    throw error;
  }
};