import { GetServerSideProps, NextPage } from "next";
import { Comment } from "@/type";

import MakeAWish from "@/containers/MakeAWish";
import Rsvp from "@/containers/Rsvp";
import Footer from "@/containers/Footer";

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
			<Rsvp />
			<MakeAWish comments={comments} />
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
