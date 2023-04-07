import { useRef } from "react";

const safeDocument = typeof document !== "undefined" ? document : {};

export const useScrollBlock = () => {
	const scrollBlocked = useRef();
	const html = safeDocument.documentElement;
	const { body } = safeDocument;

	const allowScroll = () => {
		if (!body || !body.style || !scrollBlocked.current) return;

		html.classList.remove("relative");
		html.classList.remove("overflow-hidden");
		body.classList.remove("relative");
		body.classList.remove("overflow-hidden");

		scrollBlocked.current = false;
	};

	return { allowScroll };
};
