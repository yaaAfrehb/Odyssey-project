const beginJourneyButton = document.getElementById('begin-button');
const introScreen = document.getElementById('intro');
const journeyScreen = document.getElementById('journey');

beginJourneyButton.addEventListener('click', function() {
    introScreen.classList.add('intro-hidden');
    journeyScreen.classList.remove('journey-hidden');
});