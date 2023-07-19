export function generateOtp() {
  const token = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  return token.toString();
}
