document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-menu');
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 850) nav.classList.remove('open');
        });
    });

    // Countdown Timer: Nov 5, 2025
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date("Nov 5, 2025 09:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
            countdownElement.innerHTML = "RESONX 2K25 is LIVE!";
        } else {
            countdownElement.innerHTML = `
                <span>${days}<small>Days</small></span>
                <span>${hours}<small>Hours</small></span>
                <span>${minutes}<small>Minutes</small></span>
                <span>${seconds}<small>Seconds</small></span>
            `;
        }
    }, 1000);
});
