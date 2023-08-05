function redirectAndCloseNav(target) {
    if (window.innerWidth < 900) {
        hideMenu();
    }
}

// Add event listener to anchor links with .menu class
document.querySelectorAll('.menu a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = anchor.getAttribute("href");
        redirectAndCloseNav(target);

        // Scroll to the target element (optional, if you want instant jump without smooth scrolling)
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    });
});