export const getRating = ({ index, type }) => {
  if (type === 'half') {
    return index * 2 - 1
  }
  if (type === 'full') {
    return index * 2
  }

  return index
}
