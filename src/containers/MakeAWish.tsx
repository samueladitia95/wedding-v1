import { Comment } from "@/type";

type Prop = {
	comments: Comment[];
};

const MakeAWish = ({ comments }: Prop) => {
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
						<form className="uppercase flex flex-col gap-6">
							<div className="flex flex-col gap-1">
								<label htmlFor="comment-name" className="font-medium text-sm">
									full name
								</label>
								<input
									id="comment-name"
									className="w-full rounded bg-soil1 border border-soil13 p-2 focus:outline-soil7"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label htmlFor="comment" className="font-medium text-sm">
									send your wishes
								</label>
								<textarea
									id="comment"
									rows={4}
									className="w-full rounded bg-soil1 border border-soil13 p-2 focus:outline-soil7"
								></textarea>
							</div>

							<button
								type="submit"
								className="rounded bg-soil7 text-white text-center w-full p-4 font-semibold shadow-lg"
							>
								SEND
							</button>
						</form>

						<div className="flex flex-col gap-8">
							{comments.map((el, index) => (
								<div key={index} className="flex flex-col gap-3">
									<p className="font-bold text-xl">{el.name}</p>
									<p>{el.comment}</p>
									<p className="font-extralight text-sm">{el.createdAt}</p>
								</div>
							))}
						</div>

						<div>
							<button
								type="submit"
								className="rounded bg-soil1 border border-soil13 text-center w-full p-4 font-semibold hover:bg-soil19 hover:text-soil1"
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
