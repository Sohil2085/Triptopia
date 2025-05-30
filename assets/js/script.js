const track = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const cards = track.querySelectorAll('.testimonial-card');
const totalCards = cards.length;

function updateSlider() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
});