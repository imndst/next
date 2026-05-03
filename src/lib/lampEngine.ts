export type LampState = {
  lamp1: boolean;
  lamp2: boolean;
  lamp3: boolean;
  lamp4: boolean;
};

const map: Record<string, (keyof LampState)[]> = {
  "1": ["lamp1"],
  "2": ["lamp2"],
  "3": ["lamp3"],
  "4": ["lamp4"],
  "5": ["lamp1", "lamp2"],
  "6": ["lamp2", "lamp3"],
  "7": ["lamp3", "lamp4"],
  "8": ["lamp1", "lamp2", "lamp3", "lamp4"],
};

export function decodeCode(code: string): LampState {
  const state: LampState = {
    lamp1: false,
    lamp2: false,
    lamp3: false,
    lamp4: false,
  };

  for (const digit of code) {
    const targets = map[digit];
    if (targets) {
      targets.forEach((l) => (state[l] = true));
    }
  }

  return state;
}