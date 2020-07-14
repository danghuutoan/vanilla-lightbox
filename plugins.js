imgHandleClick = (e) => {
	const album = document.querySelectorAll(".lightbox-img");
	const albumLength = album.length;
	let currentIndex = 0;
	const element = e.target;
	console.log(typeof element);
	for (let i = 0; i < album.length; i++) {
		if (element === album[i]) {
			currentIndex = i;
		}
	}

	const lightboxId = element.dataset.target;
	const lightboxImg = document.getElementById("lightbox-img");
	lightboxImg.src = e.target.attributes.src.value;
	const lightbox = document.getElementById(lightboxId);
	lightbox.classList.remove("lightbox-hide");

	exitBtn = document.getElementById("lightbox-exit-btn");

	exitBtn.onclick = (e) => {
		lightbox.classList.add("lightbox-hide");
	};

	nextBtn = document.getElementById("lightbox-next-btn");

	nextBtn.onclick = (e) => {
		if (currentIndex + 1 > albumLength - 1) {
			return;
		} else {
			currentIndex = currentIndex + 1;
			lightboxImg.src = album[currentIndex].attributes.src.value;
		}
	};

	prevBtn = document.getElementById("lightbox-prev-btn");

	prevBtn.onclick = (e) => {
		if (currentIndex - 1 < 0) {
			currentIndex = 0;
		} else {
			currentIndex = currentIndex - 1;
			lightboxImg.src = album[currentIndex].attributes.src.value;
		}
	};
};
