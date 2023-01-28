// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	status: "success" | "failed";
	comments?: {
		name: string;
		comment: string;
		createdAt: string;
	}[];
};

const dummyData: Data = {
	status: "success",
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

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		res.status(201).json({ status: "success" });
	} else {
		res.status(200).json(dummyData);
	}
}
