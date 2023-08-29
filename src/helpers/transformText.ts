export function transformText(input: string): string {
  const transformed = input.replace(/\s+/g, "-").toLowerCase();
  return transformed;
}
