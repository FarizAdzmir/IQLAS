import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  let event;

  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle Stripe events
  switch (event.type) {
    case "checkout.session.completed":
      console.log("🚀 Mock Payment Received:", event.data.object);
      return NextResponse.json({ success: true, message: "Mock payment processed!" }, { status: 200 });

    case "payment_intent.succeeded":
      console.log("✅ Payment successful:", event.data.object);
      break;

    case "payment_intent.payment_failed":
      console.log("❌ Payment failed:", event.data.object);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
