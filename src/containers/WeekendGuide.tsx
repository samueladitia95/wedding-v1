import Image from "next/image";
import Link from "next/link";

const schedule1 = [
	{
		icon: "https://via.placeholder.com/64",
		title: "family arrival & check in",
		time: "14.00 onwards",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "family welcome dinner",
		time: "18.00",
	},
];

const schedule2 = [
	{
		icon: "https://via.placeholder.com/64",
		title: "HOLY MATRIMONY",
		location: "GEREJA KATOLIK SANTO SILVESTER",
		time: "10.00",
		coordinate: "random location",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "FAMILY TEA PAI CEREMONY",
		location: "RADISSON BLU BALI, ULUWATU",
		time: "13:00",
		coordinate: "random location",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "SUNSET COCKTAIL",
		location: "KAMAYA, BALI",
		time: "17:30",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "DINNER RECEPTION",
		location: "KAMAYA, BALI",
		time: "18:30",
		coordinate: "SEE VENUE MAP",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "LET’S DANCE!",
		location: "KAMAYA, BALI",
		time: "21:00",
	},
];

const WeekendGuide = () => {
	return (
		<>
			<div className="bg-olive font-circular flex flex-col items-center">
				<div className="flex flex-col py-6 text-secondary text-center sm:w-wide">
					<div className="bg-cream container pb-12 py-12">
						<div>
							<p className="uppercase font-serif text-4xl">wedding</p>
							<p className="uppercase font-serif text-4xl">weekend guide</p>
						</div>

						<p className="uppercase ">
							Hi there, here are the guide for you to come to our wedding
						</p>

						<div className="text-sm">*All times are in WITA</div>
					</div>

					<div className="container flex flex-col gap-6 bg-primary text-secondary py-12">
						<div className="flex flex-col gap-4">
							<p className="font-baskervville italic text-brown">
								Friday, June 2, 2023
							</p>
							<button className="uppercase p-4 border rounded border-brown w-full">
								add to calender
							</button>
							<div className="flex flex-col gap-6">
								{schedule1.map((el, index) => (
									<div
										key={index}
										className="flex flex-col gap-4 items-center uppercase font-medium text-center"
									>
										<Image
											src={el.icon}
											alt="logo"
											width={64}
											height={64}
											className="rounded"
										/>
										<p>{el.title}</p>
										<p className="text-brown text-sm">{el.time}</p>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-baskervville italic text-brown">
								Saturday, June 3, 2023
							</p>
							<button className="uppercase p-4 border rounded border-brown w-full">
								add to calender
							</button>
							<div className="flex flex-col gap-6">
								{schedule2.map((el, index) => (
									<div
										key={index}
										className="flex flex-col gap-4 items-center uppercase font-medium text-center"
									>
										<Image
											src={el.icon}
											alt="logo"
											width={64}
											height={64}
											className="rounded"
										/>
										<p>{el.title}</p>
										<p className="text-sm font-normal">{el.location}</p>
										<p className="text-brown text-sm">{el.time}</p>
										{el.coordinate && (
											<Link href="www.google.com" className="text-sm underline">
												see venue map
											</Link>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeekendGuide;
