// Progress Bar Component

// Select elements
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress-line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

// Update Progress Bar
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');
    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

    // Manage button states
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

// Next Button Click
next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
        updateProgress();
    }
});

// Previous Button Click
prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        updateProgress();
    }
});

// Initial state
updateProgress();
