export function getRating(ratings) {
  if(ratings.length==0) return 0;
  return Math.round(ratings.reduce((a, b) => a + b) / ratings.length * 10) / 10
}