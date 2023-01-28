import Image from "next/image";

const TravelGuide = () => {
	return (
		<>
			<div className="bg-olive text-white font-circular">
				<div className="container py-20 flex flex-col gap-14 sm:w-wide">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">travel guide</p>
					</div>

					<div className="flex flex-col gap-20 sm:flex-row sm:gap-14 sm:overflow-x-auto">
						<div className="flex flex-col flex-shrink-0 items-center gap-5 text-center font-medium">
							<Image
								src="https://via.placeholder.com/64"
								alt="QR Code"
								width={64}
								height={64}
							/>
							<p className="uppercase text-xl tracking-widest">getting there</p>
							<div className="text-sm font-epilogue flex flex-col gap-2">
								<p>We encourage you to book your own</p>
								<p>flight ticket to Denpasar, Bali</p>
							</div>
						</div>

						<div className="flex flex-col flex-shrink-0 items-center gap-5 text-center font-medium">
							<Image
								src="https://via.placeholder.com/64"
								alt="QR Code"
								width={64}
								height={64}
							/>
							<p className="uppercase text-xl tracking-widest">
								COMPLIMENTARY <br /> ACCOMODATION
							</p>
							<div className="text-sm font-epilogue flex flex-col gap-2">
								<p>Friends</p>
								<p>Four Points by Sheraton bali, ungasan</p>
								<p>1 Night (June 3 - June 4, 2023)</p>
							</div>
							<div className="text-sm font-epilogue flex flex-col gap-2">
								<p>Family</p>
								<p>Radisson blu bali, uluwatu</p>
								<p>2 Nights (June 2 - June 4, 2023)</p>
							</div>
						</div>

						<div className="flex flex-col flex-shrink-0 items-center gap-5 text-center font-medium">
							<Image
								src="https://via.placeholder.com/64"
								alt="QR Code"
								width={64}
								height={64}
							/>
							<p className="uppercase text-xl tracking-widest">
								COMPLIMENTARY <br /> SHUTTLE
							</p>
							<div className="text-sm font-epilogue flex flex-col gap-2">
								<p>Hotel - Gereja Katolik Santo Silvester - Hotel</p>
								<p>Please be ready at the hotel lobby</p>
								<p>by 9:30, our wedding organizer will guide you</p>
							</div>
							<div className="text-sm font-epilogue flex flex-col gap-2">
								<p>Hotel - Kamaya Bali - Hotel</p>
								<p>Please be ready at the hotel lobby by 17:00,</p>
								<p>our wedding organizer will guide you</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TravelGuide;
