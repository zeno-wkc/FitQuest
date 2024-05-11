import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST({req}) {
  const form = await req.formData();
  const file = form.get("file");

  if (!file.name){
    return NextResponse.json({error: "No file provided"}, {status: 400});
  }

  const blob = await put(file.name, file, {
    access: "public",
  })

  return Response.json(blob);
}