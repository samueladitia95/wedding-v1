const QrCode = () => {
	return (
		<>
			<div className="bg-soil16 text-white font-circular">
				<div className="container py-20 md:py-48 md:w-wide">
					<div className="uppercase flex items-center flex-col gap-2">
						<p className="font-safira text-center text-5xl md:text-7xl lg:text-8xl tracking-wide">
							wedding gift
						</p>
						<p className="mt-4 text-center tracking-wide lg:text-lg">
							Your prayer is the best gift of all.
						</p>
						<p className="text-center tracking-wide lg:text-lg">
							However if you want to give something extra, we would be happy to
							received it
						</p>
					</div>
					<div className="flex flex-col mt-28 md:mt-32 lg:mt-36 xl:mt-48 gap-4">
						<div className="uppercase flex flex-col items-stretch text-center md:justify-between md:flex-row">
							<p className="font-safira text-xl md:text-xl lg:text-3xl tracking-wide">
								IRWAN THOMAS BURHAN
							</p>
							<p className="font-safira text-lg md:text-base lg:text-xl tracking-wide font-bold">
								BCA - 2611874148 (IDR)
							</p>
						</div>

						<hr></hr>

						<div className="uppercase flex flex-col items-stretch text-center md:justify-between md:flex-row">
							<p className="font-safira text-xl md:text-xl lg:text-3xl tracking-wide">
								CLAUDIA NARMADA
							</p>
							<div className="font-safira text-lg md:text-base lg:text-xl md:text-right tracking-wide font-bold">
								<span className="lg:hidden">
									<p>DBS - 2711120640 (SGD)</p>
									<p>PAYNOW - 90536601 (SGD)</p>
								</span>
								<span className="hidden lg:inline">
									DBS - 2711120640 (SGD) / PAYNOW - 90536601 (SGD)
								</span>
							</div>
						</div>

						<hr></hr>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrCode;
