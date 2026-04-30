export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}
