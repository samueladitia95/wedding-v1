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

type CommentResponse = {
	status: string;
	comments: Comment[];
};

type Prop = {
	comments: Comment[];
};

export const Home: NextPage<Prop> = ({ comments }) => {
	return (
		<div>
			<OurJourney />
			<WeekendGuide />
			<TravelGuide />
			<QnA />
			<Rsvp />
			<MakeAWish comments={comments} />
			<QrCode />
			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetch(process.env.BASE_URL + "/api/comments");
	const result: CommentResponse = await data.json();

	return {
		props: {
			comments: result.comments,
		},
	};
};

export default Home;
