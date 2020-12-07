/**
 *
 * Get random id. By default length = 9 characters
 */
export const getRandomId = (length = 9): string => {
  return '_' + Math.random().toString(36).substr(2, length);
};
