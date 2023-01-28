import { Comment } from "@/type";

type Prop = {
	comments: Comment[];
};

const MakeAWish = ({ comments }: Prop) => {
	return (
		<>
			<div className="bg-primary text-secondary font-circular">
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
							<p className="font-medium text-sm">full name</p>
							<input className="w-full rounded bg-primary border border-secondary p-2 focus:outline-secondary-darken" />
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-medium text-sm">send your wishes</p>
							<textarea
								rows={4}
								className="w-full rounded bg-primary border border-secondary p-2 focus:outline-secondary-darken"
							></textarea>
						</div>

						<button
							type="submit"
							className="rounded bg-secondary-darken text-white text-center w-full p-4 font-semibold shadow-lg"
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
							className="rounded bg-primary border border-secondary text-center w-full p-4 font-semibold shadow-lg"
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
