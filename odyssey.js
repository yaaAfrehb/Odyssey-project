const startButton = document.querySelector('.start-journey');
const introScreen = document.getElementById('intro');
const journeyScreen = document.getElementById('journey');

startButton.addEventListener('click', function() {
    introScreen.classList.add('hidden');
    journeyScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
});