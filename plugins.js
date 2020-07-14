const lightbox = document.getElementById("lightbox-bg");
const album = document.querySelectorAll(".lightbox-img");
const lightboxImg = document.getElementById("lightbox-img");
const albumLength = album.length;
let currentIndex = 0;

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

displayLightbox = () => {
	lightbox.classList.remove("lightbox-hide");
};

setLightboxImage = (value) => {
	lightboxImg.src = value;
};

getCurrentImageIndex = (album, imageElement) => {
	let currentIndex = null;
	for (let i = 0; i < album.length; i++) {
		if (imageElement === album[i]) {
			currentIndex = i;
		}
	}
	return currentIndex;
};

imgHandleClick = (e) => {
	const element = e.target;
	currentIndex = getCurrentImageIndex(album, element);
	setLightboxImage(element.attributes.src.value);
	displayLightbox();
};
