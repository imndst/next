import { NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = "my-super-secret-key";

export async function POST(req: Request) {
  const { seed } = await req.json();

  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(seed)
    .digest("hex");

  return NextResponse.json({ signature });
}