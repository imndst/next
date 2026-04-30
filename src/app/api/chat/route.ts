import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const reply = generateResponse(message);

  return NextResponse.json({ reply });
}

function generateResponse(msg: string) {
  const text = msg.toLowerCase();

  if (text.includes('price')) {
    return 'Plans start from /month 🚀';
  }

  if (text.includes('instagram')) {
    return 'We integrate directly with Instagram DMs 📱';
  }

  if (text.includes('hello')) {
    return 'Hello 👋 How can I help you?';
  }

  return 'Got it 👍 We will respond soon.';
}
