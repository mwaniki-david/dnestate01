// import { hc } from "hono/client";

// import { AppType } from "@/app/api/[[...route]]/route";

// export const client =hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);


import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";

// Ensure `NEXT_PUBLIC_APP_URL` is defined in your environment variables
if (!process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error("NEXT_PUBLIC_APP_URL is not defined in your environment variables.");
}

// Initialize the Hono client
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const client: any = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
