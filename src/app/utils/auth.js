// utils/auth.js
export const isAuthenticated = (context) => {
    // This is an example; you should implement your actual auth logic
    const { req } = context;
    const token = req.cookies.token; // Assuming you're storing the token in cookies
  
    // Check if the token is valid, e.g., by verifying the token or checking session
    if (!token) {
      return false;
    }
    return true;
  };
  