import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://divine-rhino-62.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;