import { Comment } from "@/type";

type Prop = {
	comments: Comment[];
};

const MakeAWish = ({ comments }: Prop) => {
	return (
		<>
			<div className="bg-soil1 text-soil13 font-circular">
				<div className="container py-20 flex flex-col gap-14 md:w-narrow">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">make a wish</p>
						<p className="mt-4 text-center text-sm font-semibold">
							It is an honor and pleasure for us, if you can attend and give us
							your blessing
						</p>
					</div>

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
							className="rounded bg-soil1 border border-soil13 text-center w-full p-4 font-semibold shadow-lg"
						>
							SHOW MORE COMMENTS
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MakeAWish;
