
const controlPlay = document.querySelector(".play");
const controlPrev= document.querySelector(".prev");
const controlNext = document.querySelector(".next");
const queueNextBtn = document.querySelector(".queue__next__btn");
const openQueue = document.querySelector(".queue");
const queueImg = document.querySelector(".queue__img");
const currentTime = document.querySelector(".current__time");
const totalTime = document.querySelector(".total__time");
const seekTimer = document.querySelector(".seek__timer")
const songTitle = document.querySelector(".song__title")
const imageBox = document.querySelector(".img__box")
const bgColor = document.querySelector(".bg")
const queueTitle = document.querySelector(".queue__title")
const queueInfo = document.querySelector(".queue__info")
const queueListBox = document.querySelectorAll(".queue__list__box")
const queueContainer = document.querySelector(".queue__container")
const openQueue2 = document.querySelector(".queue2");
const queueExit = document.querySelector(".queue__header__text");


const name = ["Believer","Friends","Dirty Sexy Money","BadBoy","Steal My Girl","When I Grow Up"];

const title = ["Believer - Imagine Dragons - Believer","FRIENDS - Marshmello","Dirty Sexy Money (feat. Charlie XCX)","Bad Boy (feat. Luana Kiara)","Steal My Girl - One Direction","When I Grow Up - Dimitri Vagas"];


const img = ["./images/believer.jpg","./images/friends.jpg","./images/dirtysexymoney.jpg","./images/badboy.jpg","./images/stealmygirl.jpg","./images/whenigrowup.jpg"];

const src = ["./songs/believer.mp3","./songs/friends.mp3","./songs/dirtysexymoney.mp3","./songs/badboy.mp3","./songs/stealmygirl.mp3","./songs/whenigrowup.mp3"];

const info = ["Imagine Dragons - Believer", "Marshmello - FRIENDS", "David Guetta - Dirty Sexy Money", "Tungevaag Raaban - Bad Boy", "One Direction - Steal My Girl", "Dimitri Vegas - When I Grow Up"];


const bgColorInfo = ["rgb(255, 174, 0)", "rgb(180, 179, 179)", "rgb(165, 83, 7)", "rgb(58, 177, 171)", "rgb(197, 199, 199)", "rgb(5, 113, 255)"];

controlPlay.addEventListener('click', (e) => {
    e.preventDefault();
    playPause();
})
controlNext.addEventListener('click', (e) => {
    playNext()
})
queueNextBtn.addEventListener('click', (e) => {
    playNext()
})
controlPrev.addEventListener('click', (e) => {
    e.preventDefault();
    playPrev();
})
openQueue.addEventListener('click', (e) => {
    e.preventDefault();
    queueContainer.classList.toggle("animate")
})
openQueue2.addEventListener('click', (e) => {
    e.preventDefault();
   queueContainer.classList.toggle("mobile__res");
})
queueExit.addEventListener('click', (e) => {
    e.preventDefault();
   queueContainer.classList.toggle("mobile__res");
})



var currentSong = 0;

var audio = new Audio()
// window.onload = playSong;
function playSong(s) {
audio.src = src[s];
audio.play()
// forHighlight(currentSong)
}

function removeClass() {
    queueListBox.forEach((box)=> {
box.classList.remove("selected")
    })
}

queueListBox.forEach((box, index)=> {
    box.addEventListener('click', (e) => {
        // box.classList.remove("selected")
        removeClass() 
        e.preventDefault();
        box.classList.add("selected")

    //    const targetElement = e.target
    playSong(index)
    checkPlayPause() 
       changeQueueInfo(index)
       var selectImg = 'url(' + img[index] + ')'
    imageBox.style.backgroundImage = selectImg;
    bgColor.style.backgroundColor = bgColorInfo[index];
    songTitle.innerHTML= `${title[index]}<i class="fas fa-chevron-right"></i>`;
    })
})





checkSelected()


function playPause() {
    if(audio.paused) {
        playSong(currentSong)
controlPlay.innerHTML = "<i class='fas fa-pause-circle'></i>";
    } else {
        audio.pause();
        controlPlay.innerHTML = "<i class='fas fa-play-circle'></i>";
    }
}

audio.addEventListener("timeupdate", (e)=> {
e.preventDefault();
let pos = audio.currentTime / audio.duration;
seekTimer.style.width = pos * 100 + "%";
changingTime(Math.round(audio.currentTime))
})

function changingTime(seconds) {
    let min = Math.floor(seconds / 60);
    // console.log(min)
    let sec = seconds % 60;
    // console.log(sec)
    min = min < 10 ? "0" + min : min;
   sec = sec< 10 ? "0" + sec :sec;
    currentTime.textContent = min + ":" + sec;
    actualTime(Math.round(audio.duration))
}

function actualTime(s) {
    let min = Math.floor(s/60)
    let sec = s % 60;
    totalTime.textContent = min + ":" + sec;

}

function playNext() {
currentSong++;

if(currentSong > 5) {
    currentSong = 0;
}
songTitle.innerHTML= `${title[currentSong]}<i class="fas fa-chevron-right"></i>`;
var bgimg = 'url(' + img[currentSong] + ')'
imageBox.style.backgroundImage = bgimg;
bgColor.style.backgroundColor = bgColorInfo[currentSong];
checkPlayPause()
playSong(currentSong)
changeQueueInfo(currentSong)
checkSelected()
}


function playPrev() {

    currentSong--;
    if(currentSong < 0) {
        currentSong = 5;
    }
    songTitle.innerHTML= `${title[currentSong]}<i class="fas fa-chevron-right"></i>`;
    var bgimg = 'url(' + img[currentSong] + ')'
    imageBox.style.backgroundImage = bgimg;
    bgColor.style.backgroundColor = bgColorInfo[currentSong];
    checkPlayPause()
    playSong(currentSong)
    changeQueueInfo(currentSong)
    checkSelected()
}

function checkPlayPause() {
    if(audio.play()) {
controlPlay.innerHTML = "<i class='fas fa-pause-circle'></i>";
    } else {
                controlPlay.innerHTML = "<i class='fas fa-play-circle'></i>";
    }
}

function changeQueueInfo(i) {
    if(i== 5){
        queueImg.style.backgroundImage = 'url(' +  img[i - 5]   + ')'
        queueTitle.textContent = name[i- 5]
        queueInfo.textContent = info[i- 5]
    
    }else{
    queueImg.style.backgroundImage = 'url(' +  img[i + 1]   + ')'
    queueTitle.textContent = name[i + 1]
    queueInfo.textContent = info[i + 1]
    console.log(queueInfo.textContent)
    
    }
}
function checkSelected() {

    queueListBox.forEach((box, index)=> {
        box.classList.remove("selected")
    if(box.classList.contains(currentSong)){
        box.classList.remove("selected")
        box.classList.add("selected")
    }
    })
    
    }



    queueImg.style.backgroundImage = 'url(' +  img[currentSong + 1]   + ')'



    


  



