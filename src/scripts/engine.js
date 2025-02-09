const bgm =  document.getElementById("bgm")
let divFlowers = document.getElementById("flowers")
function playBgm() {
    bgm.play()    
}

function stopBgm() {
    bgm.pause()
}

function addPetels() {
    divFlowers.classList.add("blooming-flowers")
}

function removePetels() {
    divFlowers.classList.remove("blooming-flowers")
}

togglePetels

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
      playBgm()
      addPetels()
    }
    if (event.key === 'm' || event.key === 'M') {
        stopBgm()
        removePetels()
    }
});