/**
 *
 * Sleep before next line (ms - milliseconds)
 */
export const sleep = (ms: number): Promise<null> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
