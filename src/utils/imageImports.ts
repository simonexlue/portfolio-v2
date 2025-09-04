// Utility function to handle image imports
export const getImageUrl = (path: string): string => {
  try {
    // Use dynamic import for better compatibility
    return new URL(path, import.meta.url).href;
  } catch {
    // Fallback to the path if dynamic import fails
    return path;
  }
};

// Alternative approach using public folder
export const getPublicImageUrl = (filename: string): string => {
  return `/${filename}`;
};
