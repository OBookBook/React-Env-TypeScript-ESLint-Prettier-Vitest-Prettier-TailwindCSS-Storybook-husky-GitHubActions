import { z } from "zod";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_API_URL: z.string().url(),
    VITE_API_KEY: z.string().min(1),
  },

  runtimeEnv: {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_API_KEY: import.meta.env.VITE_API_KEY,
  },
});
