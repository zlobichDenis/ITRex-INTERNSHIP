export const createVisiblePagination = (pageCount: number) => {
  return Array(pageCount).fill(null).map((_, index) => (
    index + 1
  ))
};