import { defineConfig } from "umi";
import path from "path";

export default defineConfig({
  title: "业主大会",
  favicons: ["https://images.jmhvip.com/logo/48_48.png"],
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" }
  ],
  npmClient: "pnpm",
  alias: {
    "antd-mobile": require.resolve("antd-mobile/2x")
  }
});
