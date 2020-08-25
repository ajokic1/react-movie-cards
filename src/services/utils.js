export function getRating(ratings) {
  return ratings.reduce((a, b) => a + b) / ratings.length
}