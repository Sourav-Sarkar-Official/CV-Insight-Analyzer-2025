
/**
 * Environment variable management
 * IMPORTANT: This is for client-side usage only. Do not store sensitive secrets here.
 */

// Gemini API key - this should be moved to server-side in production
export const GEMINI_API_KEY = "AIzaSyD0ML4JA3w9402gsJ6RqNu09MmLgUBN22M";

// API models
export const GEMINI_MODEL = "gemini-2.0-pro-exp-02-05";

// API settings
export const API_SETTINGS = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
