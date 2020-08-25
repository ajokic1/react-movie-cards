export function getRating(ratings) {
  return Math.round(ratings.reduce((a, b) => a + b) / ratings.length * 10) / 10
}