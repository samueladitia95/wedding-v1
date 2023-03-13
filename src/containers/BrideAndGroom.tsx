import Image from "next/image";
import Link from "next/link";
import DownArrow from "../../public/down-arrow.svg";
import BrideAndGroomGif from "../../public/bridengroom.gif";

const BrideAndGroom = () => {
	return (
		<>
			<div className="bg-soil8 text-soil2 font-circular">
				<div className="bg-brideandgroom bg-cover bg-center bg-no-repeat">
					<div className="bg-black bg-opacity-50">
						<div className="container pb-0 flex flex-col items-center gap-14 md:w-ultra-wide h-tall">
							<div className="text-center pt-48 md:pt-0 2xl:-mt-20 pb-0 flex flex-col gap-10">
								<div className="md:w-text-narrow uppercase font-safira text-4xl md:text-6xl leading-10 tracking-widest flex flex-col gap-2 md:hidden">
									<p className="text-left ml-6">irwan</p>
									<p>thomas</p>
									<p className="text-left">burhan</p>
									<p>&</p>
									<p className="text-right">Claudia</p>
									<p className="text-right mr-6">Narmada</p>
								</div>
								<Image
									src={BrideAndGroomGif}
									alt="Bride and groom"
									width={900}
									height={900}
									priority
									className="z-10 w-screen hidden md:block"
								/>
								<p className="italic font-baskervville text-2xl md:text-3xl lg:-mt-24 xl:-mt-36">
									Let’s us tell you our classic journey
								</p>
							</div>

							<Link href="#our-journey" scroll={false}>
								<button>
									<Image
										src={DownArrow}
										alt="Down Arrow Button"
										className="rounded-full w-8 md:w-12 h-8 md:h-12 "
									/>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrideAndGroom;
