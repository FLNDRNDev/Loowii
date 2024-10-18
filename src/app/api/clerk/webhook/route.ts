// /api/clerk/webhook

export const POST = async (req: Request) => {
  const { data } = await req.json();
  console.log("Received webhook data:", data);

  return new Response("Webhook received", { status: 200 });
};
