export type Comment = {
	name: string;
	comment: string;
	createdAt: string;
};

export type WishlistData = {
	status: number;
	statusText: string;
	comments?: Comment[];
};
