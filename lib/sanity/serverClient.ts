import { draftMode } from "next/headers";
import { client as baseClient } from "./client";

export function clientWithToken() {
  // Optionally use a token when in draft/preview mode
  const token = process.env.SANITY_READ_TOKEN;
  if (token) {
    return baseClient.withConfig({ token, useCdn: false });
  }
  return baseClient;
}
