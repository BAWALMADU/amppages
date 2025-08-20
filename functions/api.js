export async function onRequest(context) {
  return Response.json({ message: "Halo dari Cloudflare Pages Functions!" });
}
