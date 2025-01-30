import { buffer } from "stream/consumers";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // Stripe requires raw body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  let event;
  const sig = req.headers.get("stripe-signature");

  try {
    const rawBody = await buffer(req.body);
    event = stripe.webhooks.constructEvent(
      rawBody.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle Stripe events
  switch (event.type) {
    case "checkout.session.completed":
      console.log("🚀 Mock Payment Received:", event.data.object);
      return new Response(JSON.stringify({ success: true, message: "Mock payment processed!" }), { status: 200 });

    case "payment_intent.succeeded":
      console.log("✅ Payment successful:", event.data.object);
      break;

    case "payment_intent.payment_failed":
      console.log("❌ Payment failed:", event.data.object);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
