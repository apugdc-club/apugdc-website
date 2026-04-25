document.addEventListener("mousemove", (e) => {
    const title = document.querySelector(".parallax-group");
    if (!title) return;

    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    title.style.transition = 'transform 0.1s ease-out';
    title.style.transform = `translate(${x}px, ${y}px)`;
});

let isMoving = false;
document.addEventListener("mousemove", () => {
    const title = document.querySelector(".parallax-group");
    if (!title) return;
    
    if (!isMoving) {
        title.style.transition = 'none';
        isMoving = true;
    }

    clearTimeout(window.moveTimeout);
    window.moveTimeout = setTimeout(() => {
        isMoving = false;
    }, 100);
});

const createStars = () => {
    const starContainer = document.createElement("div");
    starContainer.className = "star-container";
    document.body.prepend(starContainer);

    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 2 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = Math.random() * 2 + 1.5 + "s";

        starContainer.appendChild(star);
    }
};

document.addEventListener('DOMContentLoaded', createStars);

// Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.getElementById('ggw-slider');
    if (!sliderWrapper) return;
    
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    
    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
    };
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            updateSlider();
        });
    }
});
