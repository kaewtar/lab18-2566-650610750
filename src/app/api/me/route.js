import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kaewtar Lungta",
    studentId: "650610750",
  });
};
