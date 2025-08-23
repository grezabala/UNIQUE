//Variables
 const carouselData = [
    {
        title: "TRUST AND SECURITY",
        text: "As a licensed company, Unique Finance offers a reliable and transparent service, which provides security to businesses when applying for a loan."
    },
    {
        title: "FAST LOAN APPROVAL",
        text: "Our platform ensures quick and hassle-free loan approval so that you can focus on growing your business."
    },
    {
        title: "CUSTOMER SATISFACTION",
        text: "We prioritize customer needs, offering personalized loan options tailored to every unique situation."
    }
];

let currentIndex = 0;

const titleEl = document.getElementById("carousel-title");
const textEl = document.getElementById("carousel-text");
const indicatorsEl = document.getElementById("carousel-indicators");

// Crear indicadores
carouselData.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => changeSlide(index));
    indicatorsEl.appendChild(dot);
});

const updateCarousel = () => {
    titleEl.classList.add("fade");
    textEl.classList.add("fade");

    setTimeout(() => {
        titleEl.textContent = carouselData[currentIndex].title;
        textEl.textContent = carouselData[currentIndex].text;

        titleEl.classList.remove("fade");
        textEl.classList.remove("fade");

        document.querySelectorAll("#carousel-indicators span").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }, 200);
};

const changeSlide = (index) => {
    currentIndex = (index + carouselData.length) % carouselData.length;
    updateCarousel();
};

document.querySelector(".carousel-arrow.left").addEventListener("click", () => changeSlide(currentIndex - 1));
document.querySelector(".carousel-arrow.right").addEventListener("click", () => changeSlide(currentIndex + 1));

// Auto-cambio cada 5 segundos
setInterval(() => changeSlide(currentIndex + 1), 5000);

updateCarousel();