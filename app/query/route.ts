// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
// 	const data = await client.sql`
//     SELECT tools.amount, projects.name
//     FROM tools
//     JOIN projects ON tools.customer_id = projects.id
//     WHERE tools.amount = 666;
//   `;

// 	return data.rows;
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }
}
