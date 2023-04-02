// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/initSupabase";
import { isoToLongDate } from "@/utils/dateFormatter";

type Data = {
	status: number;
	statusText: string;
	comments?: {
		name: string;
		comment: string;
		createdAt: string;
	}[];
};

const dummyData: Data = {
	status: 200,
	statusText: "OK",
	comments: [
		{
			name: "John Doe",
			comment:
				"Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00",
		},
		{
			name: "John Doe",
			comment:
				"Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00",
		},
		{
			name: "John Doe",
			comment:
				"Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00",
		},
		{
			name: "John Doe",
			comment:
				"Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00",
		},
		{
			name: "John Doe",
			comment:
				"Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00",
		},
	],
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		res.status(201).json({ status: 201, statusText: "Created" });
	} else {
		// get the page for pagination
		const {
			data: wishes,
			error,
			status,
			statusText,
		} = await supabase.from("wishes").select("*").range(0, 9);

		if (error) {
			console.log(error);
			return {
				props: { comments: dummyData },
			};
		}

		res.status(200).json({
			status,
			statusText,
			comments: wishes.map((el) => ({
				name: el.name,
				comment: el.wish,
				createdAt: isoToLongDate(el.created_at),
			})),
		});
	}
}
