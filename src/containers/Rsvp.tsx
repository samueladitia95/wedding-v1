export default function Rsvp() {
	return (
		<>
			<div className="bg-secondary-lighten text-white font-circular">
				<div className="container py-20 flex flex-col gap-14 md:w-narrow">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">rsvp</p>
					</div>

					<form className="uppercase flex flex-col gap-6">
						<div className="flex flex-col gap-1">
							<p className="font-medium text-sm">full name</p>
							<input className="w-full rounded bg-secondary-lighten border border-primary p-2 focus:outline-secondary-lighten" />
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-medium text-sm">phone number</p>
							<input className="w-full rounded bg-secondary-lighten border border-primary p-2 focus:outline-secondary-lighten" />
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-medium text-sm">email</p>
							<input
								type="email"
								className="w-full rounded bg-secondary-lighten border border-primary p-2 focus:outline-secondary-lighten"
							/>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">will you be attending?</p>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">yes</p>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">
									sorry, i can&apos;t make it
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">are you bringing a +1?</p>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">yes</p>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">no</p>
							</div>
							<input
								placeholder="IF SO, PLEASE LET US KNOW WHO"
								className="w-full rounded bg-secondary-lighten border border-primary p-2 focus:outline-secondary-lighten placeholder:text-primary placeholder:text-xs"
							/>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">
								do you need hotel accommodation?
							</p>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">yes</p>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input type="radio" className="w-5 h-5 accent-white" />
								<p className="font-semibold text-sm">
									sorry, i can&apos;t make it
								</p>
							</div>
						</div>

						<button
							type="submit"
							className="rounded bg-secondary-darken text-white text-center w-full p-4 font-semibold shadow-md"
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
