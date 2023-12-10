import emailjs from "emailjs-com";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const service_id = process.env.EMAILJS_FORM_SERVICE_ID as string;
  const template_id = process.env.EMAILJS_FORM_TEMPLATE_ID as string;
  const user_id = process.env.EMAILJS_FORM_PUBLIC_KEY as string;

  if (!service_id || !template_id || !user_id)
    return NextResponse.json(
      { message: "Api keys for email service have not been found." },
      { status: 400 }
    );

  try {
    await emailjs.sendForm(service_id, template_id, { ...body }, user_id);
    return NextResponse.json(
      { message: "Form başarılı bir şekilde gönderildi." },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Form gönderilirken bir hata meydana geldi." },
      { status: 500 }
    );
  }
}
