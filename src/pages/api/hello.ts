// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	status: "success" | "failed";
	name?: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		res.status(201).json({ status: "failed" });
	} else {
		res.status(200).json({ status: "success", name: "John Doe" });
	}
}
