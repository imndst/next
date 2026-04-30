export type Message = {
  id: string;
  role: 'user' | 'bot';
  text: string;
  createdAt: number;
};
