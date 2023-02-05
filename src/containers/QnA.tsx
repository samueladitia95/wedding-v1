import Image from "next/image";

const questions = [
	{
		question: "CAN I BRING A DATE or +1?",
		answer:
			"Unless it is stated in the invitation message or communicated privately, this invitation is only valid for 1 pax.",
	},
	{
		question: "Will the wedding be indoor or outdoor",
		answer:
			"Holy matrimony will be held in an indoor church, reception & after party will be held outdoors with an amazing cliff top view.",
	},
	{
		question: "WHAT ACCOMODATIONS ARE PROVIDED?",
		answer:
			"Flight ticket will not be provided. Hotel will be provided. Round trip shuttle bus from hotel.",
	},
	{
		question: "Will masks be required? Will they be provided?",
		answer:
			"Mask is mandatory to be used during holy matrimony inside the church. Let’s take our mask off and show your beautiful faces during reception & after party. Masks will not be provided, so please bring yours.",
	},
	{
		question: "What type of wedding gift should I bring?",
		answer:
			"A Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a special something, a cash gift would be very welcome.",
	},
	{
		question: "Whom should I reach for further questions?",
		answer: "Irwan and Claudia",
	},
];

const images1 = [
	"https://via.placeholder.com/400x800",
	"https://via.placeholder.com/400x500",
	"https://via.placeholder.com/400x600",
	"https://via.placeholder.com/400x800",
	"https://via.placeholder.com/400x400",
];
const images2 = [
	"https://via.placeholder.com/400x400",
	"https://via.placeholder.com/400x700",
	"https://via.placeholder.com/400x800",
	"https://via.placeholder.com/400x800",
	"https://via.placeholder.com/400x400",
];

const QnA = () => {
	return (
		<>
			<div className="bg-soil2 text-soil13 font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-narrow lg:flex-row lg:w-wide">
					<div className="flex h-narrow overflow-auto w-full gap-4 rounded-2xl scrollbar-hide lg:h-wide lg:w-1/2 lg:overflow-y-auto">
						<div className="flex flex-col gap-4 w-full ">
							{images1.map((url, index) => (
								<Image
									key={index}
									src={url}
									alt={`photo${index + 1}`}
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="rounded-2xl"
								/>
							))}
						</div>

						<div className="flex flex-col gap-4 w-full ">
							{images2.map((url, index) => (
								<Image
									key={index}
									src={url}
									alt={`photo${index + 1}`}
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="rounded-2xl"
								/>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-12 lg:w-1/2 lg:h-wide lg:overflow-y-auto scrollbar-hide">
						<div className="uppercase">
							<p className="font-serif text-center text-4xl">
								questions and answers
							</p>
						</div>

						<div className="flex flex-col gap-10 lg:h-wide">
							<div className="flex flex-col gap-6">
								<div className="flex gap-3 uppercase  tracking-wider">
									<p className="text-3xl font-bold">01</p>
									<p className="text-sm font-medium">
										What kind of outfit should shouldn&apos;t I wear?
									</p>
								</div>
								<hr className="h-2 border-soil13" />
								<div className="text-sm flex flex-col gap-8 font-medium leading-8 tracking-wide">
									<p>
										Be handsome and beautiful, being ugly is not tolerated
										(LOL). Calling all Ladies! Long dresses are preferred and
										please wear comfortable shoes. Get ready to be dancing all
										night with booze involved.
									</p>
									<div className="flex flex-col gap-2">
										<p>Here are the color tone for your dress</p>
										<div className="flex gap-4">
											{Array(4)
												.fill(0)
												.map((_, index) => (
													<Image
														src="https://via.placeholder.com/40"
														alt="color"
														width={40}
														height={40}
														key={index}
														className="rounded-full"
													/>
												))}
										</div>
									</div>
									<p>
										For Gentlemen, suit up. <br /> Kindly leave your batik,
										jeans, t-shirt, slippers at home.
									</p>
								</div>
							</div>

							{questions.map((el, index) => (
								<div key={index} className="flex flex-col gap-6">
									<div className="flex gap-4 items-center uppercase tracking-wider">
										<p className="text-3xl font-bold">0{index + 2}</p>
										<p className="text-sm font-medium">{el.question}</p>
									</div>
									<hr className="h-2 border-soil13" />
									<p className="font-medium leading-8 tracking-wide">
										{el.answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QnA;
