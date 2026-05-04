import { NextResponse } from "next/server";

function get(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const payload = {
      firstName: get(formData, "firstName"),
      lastName: get(formData, "lastName"),
      email: get(formData, "email"),
      phone: get(formData, "phone"),
      propertyLocation: get(formData, "propertyLocation"),
      propertySize: get(formData, "propertySize"),
      primaryGoal: get(formData, "primaryGoal"),
      primaryProblem: get(formData, "primaryProblem"),
      whyNow: get(formData, "whyNow"),
      currentHunting: get(formData, "currentHunting"),
      pastWork: get(formData, "pastWork"),
      suspectedIssue: get(formData, "suspectedIssue"),
      notes: get(formData, "notes"),
      successPicture: get(formData, "successPicture"),
      decisionMaker: get(formData, "decisionMaker"),
      useCase: get(formData, "useCase"),
      timeline: get(formData, "timeline"),
      changeReadiness: get(formData, "changeReadiness"),
      investmentReadiness: get(formData, "investmentReadiness"),
      truthOrientation: get(formData, "truthOrientation"),
      leadSource: get(formData, "leadSource"),
      offer: get(formData, "offer"),
      journeyStage: get(formData, "journeyStage"),
      salesFlow: get(formData, "salesFlow"),
      funnelVersion: get(formData, "funnelVersion"),
    };

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, error: "Missing LEAD_WEBHOOK_URL" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Webhook failed" },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/capture/property-audit/thank-you", request.url),
      { status: 303 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Lead submission failed" },
      { status: 500 }
    );
  }
}
