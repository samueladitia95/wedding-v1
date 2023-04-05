// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/initSupabase";
import { RsvpResponse } from "@/type";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<RsvpResponse>
) {
	const { body, method } = req;
	if (method === "POST") {
		try {
			const { name, phone, email, isAttending, isNeedAccomodation } = body;
			console.log(name);
			const { status, statusText } = await supabase.from("rsvp").insert([
				{
					name,
					phone,
					email,
					// eslint-disable-next-line camelcase
					is_attending: isAttending,
					// eslint-disable-next-line camelcase
					is_need_accomodation: isNeedAccomodation,
				},
			]);

			return res.status(status).json({ status, statusText });
		} catch (error) {
			return res
				.status(500)
				.json({ status: 500, statusText: "failed to insert data" });
		}
	}
}
