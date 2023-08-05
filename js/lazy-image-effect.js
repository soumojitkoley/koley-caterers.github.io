const images = document.querySelectorAll("img");
const someInfo = document.getElementById("some-info");

const observerOptions = {
    rootMargin: "0px", // Set the margin around the root (viewport) when to trigger the intersection
    threshold: 0.2, // Percentage of the element's visibility to trigger the intersection
};

const fadeInImages = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add("loaded");
            observer.unobserve(img); // Unobserve the image once it's faded in
        }
    });
};

const imageObserver = new IntersectionObserver(fadeInImages, observerOptions);

images.forEach((img) => {
    imageObserver.observe(img);
});