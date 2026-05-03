import { NextResponse } from "next/server";
import crypto from "crypto";

const MASTER_KEY = "lamp-system-v1";

// 🔐 generate checksum
function createHash(code: string, masterKey: string) {
  return crypto
    .createHash("sha256")
    .update(`${code}:${masterKey}`)
    .digest("hex");
}

// 🧠 validation rule (IMPORTANT)
function isValidChecksum(hash: string) {

  return (
    hash.startsWith("a") ||
    hash.startsWith("b") ||
    hash.includes("f0")
  );
}

// 💡 map hash → lamps
function mapLamps(hash: string) {
  const chars = hash.split("").slice(0, 4);

  return {
    lamp1: parseInt(chars[0], 16) % 2 === 0,
    lamp2: parseInt(chars[1], 16) % 2 === 0,
    lamp3: parseInt(chars[2], 16) % 2 === 0,
    lamp4: parseInt(chars[3], 16) % 2 === 0,
  };
}

export async function POST(req: Request) {
  const { code, masterKey } = await req.json();

  if (!code || !masterKey) {
    return NextResponse.json(
      { error: "Missing input" },
      { status: 400 }
    );
  }

  const hash = createHash(code, masterKey);

  if (!isValidChecksum(hash)) {
    return NextResponse.json({
      valid: false,
      hash, //یbug
      lamps: {
        lamp1: false,
        lamp2: false,
        lamp3: false,
        lamp4: false,
      },
      reason: "Invalid checksum pattern",
    });
  }

  return NextResponse.json({
    valid: true,
    hash,
    lamps: mapLamps(hash),
  });
}