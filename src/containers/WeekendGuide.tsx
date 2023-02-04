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
		coordinate: "www.google.com",
	},
	{
		icon: "https://via.placeholder.com/64",
		title: "FAMILY TEA PAI CEREMONY",
		location: "RADISSON BLU BALI, ULUWATU",
		time: "13:00",
		coordinate: "www.google.com",
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
		coordinate: "www.google.com",
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
				<div className="flex flex-col text-secondary text-center w-screen md:w-wide">
					{/* TITLE */}
					<div className="container bg-cream py-12 flex flex-col gap-4 items-center">
						<div className="uppercase font-serif text-4xl font-medium">
							<p>wedding</p>
							<p>weekend guide</p>
						</div>

						<div className="uppercase font-medium">
							<p>Hi there, here are the guide for you</p>
							<p>to come to our wedding</p>
						</div>

						<div className="text-sm border border-secondary rounded-full p-4 w-48 italic">
							*All times are in WITA
						</div>
					</div>

					{/* Schedule */}
					<div className="container flex flex-col gap-16 bg-primary text-secondary py-12">
						{/* FRIDAY */}
						<div className="flex flex-col gap-4 items-center">
							<p className="font-baskervville italic text-brown">
								Friday, June 2, 2023
							</p>
							<button className="uppercase p-4 border rounded border-brown w-full sm:w-80">
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

						{/* SATURDAY */}
						<div className="flex flex-col gap-4 items-center">
							<p className="font-baskervville italic text-brown">
								Saturday, June 3, 2023
							</p>
							<button className="uppercase p-4 border rounded border-brown w-full sm:w-80">
								add to calender
							</button>
							<div className="flex flex-col gap-6">
								{schedule2.map((el, index) => (
									<div
										key={index}
										className="flex flex-col gap-4 items-center uppercase text-center"
									>
										<Image
											src={el.icon}
											alt="logo"
											width={64}
											height={64}
											className="rounded"
										/>
										<p className="font-semibold">{el.title}</p>
										<p className="text-sm font-normal">{el.location}</p>
										<p className="text-brown text-sm font-medium">{el.time}</p>
										{el.coordinate && (
											<Link
												href={el.coordinate}
												className="text-sm underline font-medium"
											>
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
