import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "codes.kaushik.portfolio",
  appName: "Kaushik S",
  webDir: "public",
  server: {
    url: "https://kaushik.codes",
    androidScheme: "https",
  },
};

export default config;
