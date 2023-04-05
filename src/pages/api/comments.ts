// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/initSupabase";
import { isoToLongDate } from "@/utils/dateFormatter";
import { WishlistData } from "@/type";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<WishlistData>
) {
	const { body, method } = req;
	if (method === "POST") {
		try {
			const { name, comment } = body;
			const { status, statusText } = await supabase
				.from("wishes")
				.insert([{ name, wish: comment }]);

			return res.status(status).json({ status, statusText });
		} catch (error) {
			return res
				.status(500)
				.json({ status: 500, statusText: "failed to insert data" });
		}
	} else {
		try {
			const { query } = req;
			const { limit } = query;

			const wishLimit: number = Number(limit) - 1 || 9;
			const {
				data: wishes,
				status,
				statusText,
			} = await supabase
				.from("wishes")
				.select("*")
				.range(0, wishLimit)
				.order("created_at", { ascending: false });

			return res.status(200).json({
				status,
				statusText,
				comments: wishes?.map((el) => ({
					name: el.name,
					comment: el.wish,
					createdAt: isoToLongDate(el.created_at),
				})),
			});
		} catch (error) {
			console.log(error);

			return {
				props: { comments: [] },
			};
		}
	}
}
