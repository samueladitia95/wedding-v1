import { GetServerSideProps, NextPage } from "next";
import { Comment } from "@/type";

import MakeAWish from "@/containers/MakeAWish";
import Rsvp from "@/containers/Rsvp";
import Footer from "@/containers/Footer";
import QrCode from "@/containers/QrCode";
import TravelGuide from "@/containers/TravelGuide";
import QnA from "@/containers/QnA";
import WeekendGuide from "@/containers/WeekendGuide";
import OurJourney from "@/containers/OurJourney";
import Gallery from "@/containers/Gallery";
import Invitation from "@/containers/Invitation";
import Head from "next/head";
import Intro from "@/containers/Intro";
// import BrideAndGroom from "@/containers/BrideAndGroom";
import { useEffect } from "react";

type CommentResponse = {
	status: string;
	comments: Comment[];
};

type Prop = {
	comments: Comment[];
};

export const Home: NextPage<Prop> = ({ comments }) => {
	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<>
			<Head>
				<title>Irwan and Claudia</title>
				<meta name="description" content="This is a wedding invitation" />
			</Head>
			<div>
				<Intro />
				<Invitation />
				<Gallery />
				{/* <BrideAndGroom /> */}
				<OurJourney />
				<WeekendGuide />
				<TravelGuide />
				<QnA />
				<Rsvp />
				<MakeAWish comments={comments} />
				<QrCode />
				<Footer />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<Prop> = async () => {
	const data = await fetch(process.env.BASE_URL + "/api/comments");
	const result: CommentResponse = await data.json();

	return {
		props: {
			comments: result.comments,
		},
	};
};

export default Home;
