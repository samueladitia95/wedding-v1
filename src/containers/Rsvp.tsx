const Rsvp = () => {
	return (
		<>
			<div className="bg-soil8 text-white font-circular">
				<div className="container py-20 flex flex-col gap-14 md:w-narrow">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">rsvp</p>
					</div>

					<form className="uppercase flex flex-col gap-6">
						<div className="flex flex-col gap-1">
							<label htmlFor="full-name" className="font-medium text-sm">
								full name
							</label>
							<input
								id="full-name"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="phone-number" className="font-medium text-sm">
								phone number
							</label>
							<input
								id="phone-number"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="email" className="font-medium text-sm">
								email
							</label>
							<input
								id="email"
								type="email"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
							/>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">will you be attending?</p>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="attending-yes"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label
									htmlFor="attending-yes"
									className="font-semibold text-sm"
								>
									yes
								</label>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="attending-no"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label htmlFor="attending-no" className="font-semibold text-sm">
									sorry, i can&apos;t make it
								</label>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">are you bringing a +1?</p>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="plus-one-yes"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label htmlFor="plus-one-yes" className="font-semibold text-sm">
									yes
								</label>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="plus-one-no"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label htmlFor="plus-one-no" className="font-semibold text-sm">
									no
								</label>
							</div>
							<input
								placeholder="IF SO, PLEASE LET US KNOW WHO"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8 placeholder:text-soil1 placeholder:text-xs"
							/>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">
								do you need hotel accommodation?
							</p>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="hotel-yes"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label htmlFor="hotel-yes" className="font-semibold text-sm">
									yes
								</label>
							</div>
							<div className="flex gap-2 items-center pl-2">
								<input
									id="hotel-no"
									type="radio"
									className="w-5 h-5 accent-white"
								/>
								<label htmlFor="hotel-no" className="font-semibold text-sm">
									no
								</label>
							</div>
						</div>

						<button
							type="submit"
							className="rounded bg-soil7 text-white text-center w-full p-4 font-semibold shadow-md"
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Rsvp;
