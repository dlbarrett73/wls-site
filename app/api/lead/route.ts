import { NextResponse } from "next/server";

const WEBHOOK_URL = "const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyDF-wAgUfrPvTMcJryq-fcRJm3hsFwehBEVPCCla-H-SkNLqW9FoxBUG1yZwV-vA/exec";

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

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();

      return NextResponse.json(
        {
          ok: false,
          error: "Google webhook failed",
          detail: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/capture/property-audit/thank-you", request.url),
      { status: 303 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Lead submission failed",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
