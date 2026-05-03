export function validateCode(code: string) {
  if (!/^\d{8}$/.test(code)) return false;
  if (code.includes("9")) return false; // invalid rule example
  return true;
}