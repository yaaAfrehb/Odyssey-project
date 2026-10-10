const startButton = document.querySelector('.start-journey');
const introScreen = document.getElementById('intro');
const journeyScreen = document.getElementById('journey');

startButton.addEventListener('click', function() {
    introScreen.classList.add('hidden');
    journeyScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
});


const markers = document.querySelectorAll(".map-marker");

markers.forEach(marker => {
    marker.addEventListener("click", () => {
        const location = marker.getAttribute("aria-label");

        alert(`You selected ${location}! Your location details and choices will appear here.`);
    });
});
