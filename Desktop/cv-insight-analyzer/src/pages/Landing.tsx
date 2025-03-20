import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckIcon,
  FileTextIcon,
  ArrowRightIcon,
  BarChart2Icon,
  ZapIcon,
  BadgeCheckIcon,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <FileTextIcon className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ResumeIQ</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                How it Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                Testimonials
              </a>
            </div>
            <Link to="/analyzer">
              <Button variant="default" size="sm" className="font-medium">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Get Your Resume Scored and Improved by AI
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI-powered resume analyzer helps you optimize your resume,
                improve your interview chances, and receive personalized
                feedback to stand out from the competition.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Get detailed resume scoring in seconds
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Receive actionable feedback for improvement
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Optimize for ATS and hiring managers
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/analyzer">
                  <Button size="lg" className="font-medium">
                    Analyze Your Resume{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
                  alt="Resume analysis dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ResumeIQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform gives you everything you need to create a
              standout resume
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart2Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600">
                Our advanced AI technology analyzes your resume against industry
                standards and job requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ZapIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Instant Feedback
              </h3>
              <p className="text-gray-600">
                Get instant, detailed feedback on what works and what needs
                improvement in your resume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <BadgeCheckIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ATS Optimization
              </h3>
              <p className="text-gray-600">
                Ensure your resume passes through Applicant Tracking Systems
                with our keyword optimization tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How ResumeIQ Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to improve your resume and boost your job
              search success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border border-gray-900 rounded-lg shadow-sm">
            <div className="text-center p-6 lg:border-r border-gray-900">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Upload Your Resume
              </h3>
              <p className="text-gray-600">
              Upload your resume in any format and provide the job description for a targeted evaluation.
              </p>
            </div>

            <div className="text-center p-6 lg:border-r border-gray-900">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Answer Assessment Questions
              </h3>
              <p className="text-gray-600">
              Our AI generates assessment questions based on your resume and job description to evaluate your fit and skills.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Get Your Analysis
              </h3>
              <p className="text-gray-600">
              Receive detailed feedback with scores—60% from resume evaluation, 40% from assessments—along with improvement points and suggestions.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/analyzer">
              <Button size="lg">Start My Analysis Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of job seekers who have improved their resumes with
              ResumeIQ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">JS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Jamie Smith</p>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600 ">
                "After using ResumeIQ, I improved my resume's ATS score by 45%.
                Within two weeks, I had three interview offers from companies
                that had previously rejected me."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">MJ</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Career Advisor</p>
                </div>
              </div>
              <p className="text-gray-600 ">
                "As a career counselor, I recommend ResumeIQ to all my clients.
                The detailed feedback and specific suggestions help them create
                truly outstanding resumes with much less effort."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

{/* CTA Section */}
<section className="relative py-16 bg-blue-600 text-white">
  {/* Wavy Top Divider */}
  <div className="custom-shape-divider-top absolute top-0 left-0 w-full">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-20"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-white"
      ></path>
    </svg>
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
    <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Resume?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Join thousands of job seekers who have enhanced their resumes and improved their job prospects with ResumeIQ.
    </p>
    <Link to="/analyzer">
      <Button size="lg" variant="secondary" className="font-medium">
        Start Your Free Analysis
      </Button>
    </Link>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <FileTextIcon className="h-6 w-6 mr-2" />
                <span className="text-xl font-bold">ResumeIQ</span>
              </div>
              <p className="mt-4 max-w-xs text-gray-400">
                Your AI-powered resume analysis tool for job search success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ResumeIQ Analyzer. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
