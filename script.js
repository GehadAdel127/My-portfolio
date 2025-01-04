function goToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
        const elementTop = element.offsetTop;

        window.scrollTo({
            top: elementTop,
            behavior: "smooth",
        });
    }
    console.log("clicked")
}
document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById("links");
    const toggleButton = document.getElementById("checkbox");
    const list = document.getElementById("list")
    toggleButton.addEventListener("click", function() {
        navBar.classList.toggle("show");
        list.classList.toggle("appear")
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animated_section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(animated_section => {
        observer.observe(animated_section);
    });
});
