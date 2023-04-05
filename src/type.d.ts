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

export type Rsvp = {
	name: string;
	phone: string;
	email: string;
	isAttending: string;
	isNeedAccomodation: string;
};

export type RsvpResponse = {
	status: number;
	statusText: string;
};
