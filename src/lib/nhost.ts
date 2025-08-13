import { NhostClient } from "@nhost/nextjs";

const nhost: NhostClient = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_REGION,
});

export default nhost;
