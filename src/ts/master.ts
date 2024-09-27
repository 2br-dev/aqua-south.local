import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

Swiper.use([Pagination, Navigation]);

(() => {
	// document.querySelectorAll(".news-card").forEach((card: HTMLElement) => {
	// 	const imgNum = Math.round(Math.random() * (12 - 1) + 1);
	// 	console.log(imgNum);
	// 	const img = card.querySelector("img");

	// 	$(img).css({
	// 		"mask-image": `url(/img/news/masks/form${imgNum}.svg)`,
	// 		"mask-size": "100% 100%",
	// 	});
	// });

	if (document.querySelectorAll("#news-slider")) {
		const swiper = new Swiper("#news-slider", {
			spaceBetween: 20,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1600: {
					slidesPerView: 3,
				},
			},
			pagination: {
				el: "#news-pagination",
				clickable: true,
				type: "bullets",
				dynamicBullets: true,
				dynamicMainBullets: 5,
			},
			navigation: {
				nextEl: "#news-next",
				prevEl: "#news-prev",
			},
		});
	}
})();
