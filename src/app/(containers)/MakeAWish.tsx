type Comment = {
	name: string;
	comment: string;
	createdAt: string;
};

async function getComments() {
	const res = await fetch(process.env.BASE_URL + "/api/comments");
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function MakeAWish() {
	const { comments }: { comments: Comment[] } = await getComments();
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
							<p className="font-medium">full name</p>
							<input className="w-full rounded bg-primary border border-secondary p-2 focus:outline-secondary-lighten" />
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-medium">send your wishes</p>
							<textarea
								rows={4}
								className="w-full rounded bg-primary border border-secondary p-2 focus:outline-secondary-lighten"
							></textarea>
						</div>

						<button
							type="submit"
							className="rounded bg-secondary-lighten text-white text-center w-full p-4 font-semibold"
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
							className="rounded bg-primary border border-secondary text-center w-full p-4 font-semibold"
						>
							SHOW MORE COMMENTS
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
