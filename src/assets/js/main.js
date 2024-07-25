const gameScreen = document.getElementById("gameScreen");
document.getElementById("button").onclick = () => {
    if (gameScreen.requestFullscreen) {
        gameScreen.requestFullscreen();
    } else if (gameScreen.webkitRequestFullscreen) {
        gameScreen.webkitRequestFullscreen();
    } else if (gameScreen.msRequestFullscreen) {
        gameScreen.msRequestFullscreen();
    } else if (gameScreen.mozRequestFullscreen) {
        gameScreen.mozRequestFullscreen();
    }
};