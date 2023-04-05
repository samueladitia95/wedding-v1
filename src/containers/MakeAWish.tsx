import { Comment, WishlistData } from "@/type";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useRouter } from "next/router";

type Prop = {
	comments: Comment[];
};

const MakeAWish = ({ comments }: Prop) => {
	const [wishLimit, setWishLimit] = useState<number>(10);
	const [wishlist, setWishlist] = useState<Comment[]>(comments);
	const [isShowMore, setShowMore] = useState<boolean>(false);
	const [submitWish, setSubmitWish] = useState<Comment>({
		comment: "",
		name: "",
		createdAt: "",
	});

	// fetch functionality
	const { data, error } = useFetch<WishlistData>(
		`/api/comments?limit=${wishLimit}`,
		isShowMore
	);

	useEffect(() => {
		if (data && data.comments && !error) {
			setWishlist(data.comments);
		}
	}, [data]);

	// post functionality
	const router = useRouter();

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSubmitWish({
			...submitWish,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await fetch("/api/comments", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(submitWish),
			});
			if (response.ok) {
				setWishLimit(10);
				setShowMore(true);
				setSubmitWish({
					name: "",
					comment: "",
					createdAt: "",
				});
				router.push("/#item-0");
			} else {
				console.error("Error:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<div className="bg-soil1 text-soil13 font-circular">
				<div className="container py-28 flex flex-col gap-14 items-center">
					<div className="uppercase">
						<p className="font-safira text-center text-5xl md:text-8xl">
							SHARE YOUR WISH
						</p>
						<p className="mt-4 text-center text-sm md:text-xl">
							Let&apos;s share some love
						</p>
						<p className="text-center text-sm md:text-xl">
							and we can&apos;t wait to see you on our big day!
						</p>
					</div>
					<div className="flex flex-col gap-14 md:w-narrow">
						<form
							onSubmit={handleSubmit}
							className="uppercase flex flex-col gap-6"
						>
							<div className="flex flex-col gap-1">
								<label htmlFor="comment-name" className="font-medium text-sm">
									full name
								</label>
								<input
									id="comment-name"
									name="name"
									className="w-full rounded bg-soil1 border border-soil13 p-2 focus:outline-soil7"
									value={submitWish.name}
									onChange={handleChange}
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label htmlFor="comment" className="font-medium text-sm">
									send your wishes
								</label>
								<textarea
									id="comment"
									name="comment"
									rows={4}
									className="w-full rounded bg-soil1 border border-soil13 p-2 focus:outline-soil7"
									value={submitWish.comment}
									onChange={handleChange}
								></textarea>
							</div>

							<button
								type="submit"
								className="rounded bg-soil7 text-white text-center w-full p-4 font-semibold shadow-lg"
								onClick={() => setShowMore(false)}
							>
								SEND
							</button>
						</form>

						<div id="wishlist" className="flex flex-col gap-8">
							{wishlist.map((el, index) => (
								<div
									id={`item-${index}`}
									key={index}
									className="flex flex-col gap-3"
								>
									<p className="font-circular font-medium text-xl">{el.name}</p>
									<p className="font-circular font-medium">{el.comment}</p>
									<p className="font-circular font-thin text-sm">
										{el.createdAt}
									</p>
								</div>
							))}
						</div>

						<div>
							<button
								type="submit"
								onClick={() => {
									if (wishLimit < 50) {
										setWishLimit(wishLimit + 10);
									}
									setShowMore(true);
								}}
								className="rounded bg-soil1 border border-soil13 text-center w-full p-4 font-medium hover:bg-soil19 hover:text-soil1"
							>
								SHOW MORE WISHES
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MakeAWish;
