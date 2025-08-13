import { NhostClient } from "@nhost/nextjs";

const nhost: NhostClient = new NhostClient({
  subdomain: process.env.SUBDOMAIN,
  region: process.env.REGION,
});

export default nhost;
