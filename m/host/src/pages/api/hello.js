// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const federatedUserRoute = (await import("clientServer/test")).default;
  federatedUserRoute(req, res);
}
