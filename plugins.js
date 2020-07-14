element = document.getElementById("img-1");
element.onclick = () => {
	console.log("click", element);
	const lightboxId = element.dataset.target;
	const lightbox = document.getElementById(lightboxId);
	lightbox.classList.remove("lightbox-hide");
	console.log(lightbox);
};

exitBtn = document.getElementById("lightbox-exit-btn");

exitBtn.onclick = () => {
	const lightboxId = element.dataset.target;
	const lightbox = document.getElementById(lightboxId);
	lightbox.classList.add("lightbox-hide");
	console.log(lightbox);
};
