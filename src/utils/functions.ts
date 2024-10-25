/**
 *
 * @param {string} text - The text input to be sliced
 * @param {number} [maxLength=50] - the maximum length before trucntion
 * @returns New string after slicing
 */
export const sliceText = (text: string, maxLength = 50) => {
  return text.length >= maxLength ? text.slice(0, maxLength) + "..." : text;
};
