import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16", // original 2022-11-15
  typescript: true,
});
