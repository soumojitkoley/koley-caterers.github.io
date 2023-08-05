// Function to start the animation when the target element comes into view
function startAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animatedElements = entry.target.querySelectorAll('.reservation-animation');
      animatedElements.forEach((element) => {
        element.classList.add('start-animation');
      });
      observer.unobserve(entry.target); // Unobserve to stop watching the element once animation starts
    }
  });
}

// Intersection Observer to watch for the .contact-us-banner section
const contactBanner = document.querySelector('.contact-us-banner');
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // Adjust the rootMargin to customize when the animation starts relative to the viewport
  threshold: 0.3, // Adjust the threshold to control when the animation starts
};

const observer = new IntersectionObserver(startAnimation, options);
observer.observe(contactBanner);
