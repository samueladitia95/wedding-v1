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
			"Holy matrimony will be held in an indoor church, reception will be held outdoors, and after party will be held indoor.",
	},
	{
		question: "WHAT ACCOMODATIONS ARE PROVIDED?",
		answer:
			"Flight ticket will not be provided. Hotel and round trip shuttle bus will be provided. Please check out the “Travel Guide” section.",
	},
	{
		question: "What type of wedding gift should I bring?",
		answer:
			"Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a special something, a cash / “angpao” as gift would be very welcome.",
	},
	{
		question: "Whom should I reach for further questions?",
		answer: "Irwan and Claudia",
	},
];

const images1 = [
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_1.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_3.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_5.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_7.jpg",
];
const images2 = [
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_4.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_2.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_6.jpg",
	"https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/qna_images_8.jpg",
];

const dressCodes = [
	"bg-clothes1",
	"bg-clothes2",
	"bg-clothes3",
	"bg-clothes4",
	// "bg-clothes5",
	"bg-clothes6",
	"bg-clothes7",
	"bg-clothes8",
];

const QnA = () => {
	return (
		<>
			<div className="bg-soil2 text-soil13 font-circular">
				<div className="container flex flex-col gap-10 lg:gap-20 md:w-narrow lg:flex-row lg:w-wide lg:h-screen">
					<div className="flex w-full gap-4 rounded-2xl scrollbar-hide lg:w-1/2 lg:overflow-y-auto">
						<div className="flex flex-col gap-4 w-full">
							{images1.map((url, index) => (
								<Image
									key={index}
									src={url}
									alt={`photo${index + 1}`}
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className={`${index > 1 ? "hidden lg:flex" : ""} rounded-4xl`}
								/>
							))}
						</div>

						<div className="flex flex-col gap-4 w-full">
							{images2.map((url, index) => (
								<Image
									key={index}
									src={url}
									alt={`photo${index + 1}`}
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className={`${index > 1 ? "hidden lg:flex" : ""} rounded-4xl`}
								/>
							))}
						</div>
					</div>

					<div className="flex flex-col mb-14 lg:mb-0 lg:py-8 gap-12 lg:w-1/2 lg:h-screen lg:overflow-y-auto scrollbar-hide">
						<div className="uppercase">
							<p className="font-safira text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-soil14">
								questions <br /> and answers
							</p>
						</div>

						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-6">
								<div className="flex gap-4 items-center uppercase tracking-wider">
									<p className="text-3xl font-bold">01</p>
									<p className="text-sm font-medium">
										What kind of outfit should / shouldn&apos;t I wear?
									</p>
								</div>
								<hr className="h-2 border-soil13" />
								<div className="text-sm flex flex-col gap-8 font-medium leading-8 tracking-wide">
									<p>
										Be handsome and beautiful, being ugly is not tolerated (Just
										Kidding). Calling all Ladies! Long dresses are preferred and
										please wear comfortable shoes. Get ready to be dancing all
										night with booze involved.
									</p>
									<div className="flex flex-col gap-2">
										<p>Here are the color options for your dress</p>
										<div className="flex flex-wrap gap-4">
											{dressCodes.map((bg, index) => (
												<div
													key={index}
													className={`rounded-full h-10 w-10 ${bg}`}
												></div>
											))}
										</div>
									</div>
									<p>
										For Gentlemen, suit up. <br /> Kindly leave your batik,
										jeans, t-shirt, and slippers at home.
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
