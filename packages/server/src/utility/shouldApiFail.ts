export function shouldApiFail(failureRate: number = 0.3): boolean {
  return Math.random() < failureRate;
}
