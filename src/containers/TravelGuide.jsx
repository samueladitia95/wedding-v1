import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";

const TravelGuide = () => {
	const scrollRef = useHorizontalScroll();

	return (
		<>
			<div className="bg-soil11 text-white font-circular">
				<div className="container py-20 lg:py-64 xl:py-80 flex flex-col gap-14 sm:w-wide  lg:pl-48">
					<div className="uppercase">
						<p className="font-safira text-center lg:text-left text-6xl">
							travel guide
						</p>
					</div>
					<div
						ref={scrollRef}
						className="flex flex-col justify-start gap-20 lg:flex-row lg:gap-10 sm:overflow-x-auto xl:w-tall scrollbar-hide"
					>
						<div className="flex flex-col flex-shrink-0 items-center lg:items-stretch gap-5 text-center lg:text-left font-medium lg:w-80">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/plane_travel_guide_1_icons.svg"
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

						<div className="flex flex-col flex-shrink-0 items-center lg:items-stretch gap-5 text-center lg:text-left font-medium lg:w-80">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/hotel_travel_guide_2_icons.svg"
								alt="QR Code"
								width={64}
								height={64}
							/>
							<p className="uppercase text-xl tracking-widest text-center lg:text-left">
								COMPLIMENTARY <br /> ACCOMODATION
							</p>
							<div className="text-sm font-epilogue flex flex-col gap-2 text-center lg:text-left">
								<p>Friends</p>
								<p>Four Points by Sheraton Bali, Ungasan</p>
								<p>1 Night (June 3 - June 4, 2023)</p>
							</div>
							<div className="text-sm font-epilogue flex flex-col gap-2 text-center lg:text-left">
								<p>Family</p>
								<p>Radisson Blu Bali, Uluwatu</p>
								<p>2 Nights (June 2 - June 4, 2023)</p>
							</div>
							<div className="text-sm font-epilogue flex flex-col gap-2 text-center lg:text-left">
								<p>Colleagues</p>
								<p>Radisson Blu Bali, Uluwatu</p>
								<p>1 Nights (June 3 - June 4, 2023)</p>
							</div>
						</div>

						<div className="flex flex-col flex-shrink-0 items-center lg:items-stretch gap-5 text-center lg:text-left font-medium lg:w-80">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/bus_travelguide_3_icons.svg"
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
								<p>Hotel - Six Senses Uluwatu, Bali - Hotel</p>
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
