const songs = [
  {
    title: "Shawn Mendes  There s Nothing Holdin Me Back",
    src: "./music/Shawn Mendes - There s Nothing Holdin  Me Back.mp3",
    cover: "./images/Shawn Mendes - There s Nothing Holdin  Me Back.jpg",
  },
  {
    title: "The Weeknd Blinding  Lights",
    src: "./music/The Weeknd - Blinding Lights.mp3",
    cover: "./images/The Weeknd - Blinding Lights.jpg",
  },
  {
    title: "The Weeknd  Save Your Tears",
    src: "./music/The Weeknd - Save Your Tears.mp3",
    cover: "./images/The Weeknd - Save Your Tears.jpg",
  },
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const musicCount = document.getElementById("music-count");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  cover.src = song.cover;
  title.textContent = song.title;
  musicCount.textContent = `Play music ${index + 1} / ${songs.length}`;
  audio.load();
}

function playSong() {
  audio.play();
  playBtn.innerHTML = "❚❚";
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
  volumeValue.textContent = Math.round(volume.value * 100);
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

loadSong(currentSong);

//  const playBtn = document.querySelector("#play");
//  const audio = document.querySelector("audio");
//  const voiceRange = document.querySelector("#voice");
//  const voiceValue = document.querySelector("#voice-value");
//  const container = document.querySelector(".container");
//  const backward = document.querySelector("#backward");
//  const forward = document.querySelector("#forward");
//  const cover = document.querySelector("#cover");
//  const musics = [
//    "Adele - A Set Fire to the Rain",
//    "Adele - Hello",
//    "Adele - Rolling in the Deep",
//    "Adele - Send My Love (To Your New Lover)",
//    "Adele - Skyfall",
//    "Lady Gaga feat. Bruno Mars - Die With A Smile",
//    "Sezen Aksu - Biliyorsun  Www",
//    "Shawn Mendes - There s Nothing Holdin  Me Back",
//    "The Weeknd - Blinding Lights",
//    "The Weeknd - Save Your Tears",
//  ];
//  let currentMusic = 0;
//  function changeMusic(currentMusic) {
//    const fileName = encodeURIComponent(musics[currentMusic]);
//    cover.src = `./images/${fileName}.jpg`;
//    cover.alt = musics[currentMusic];
//    audio.src = `./music/${fileName}.mp3`;
//  }
//  changeMusic(currentMusic);
//  audio.volume = 0.5;
//  voiceValue.textContent = 50;
//  function play() {
//    audio.play();
//    container.classList.add("play");
//    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
//  }
//  function pause() {
//    audio.pause();
//    container.classList.remove("play");
//    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
//  }
//  forward.addEventListener("click", () => {
//    if (musics.length - 1 > currentMusic) {
//      currentMusic++;
//    } else {
//      currentMusic = 0;
//    }
//    changeMusic(currentMusic);
//    play();
//  });
//  backward.addEventListener("click", () => {
//    if (currentMusic !== 0) {
//      currentMusic--;
//    } else {
//      currentMusic = musics.length - 1;
//    }
//    changeMusic(currentMusic);
//    play();
//  });
//  playBtn.addEventListener("click", () => {
//    const isPlaying = container.classList.contains("play");
//    if (isPlaying) {
//      pause();
//    } else {
//      play();
//    }
//  });
//  voiceRange.addEventListener("input", () => {
//    audio.volume = voiceRange.value / 100;
//    voiceValue.textContent = voiceRange.value;
//  })

// const playBtn = document.querySelector("#play");
// const audio = document.querySelector("audio");
// const voiceRange = document.querySelector("#voice");
// const voiceValue = document.querySelector("#voice-value");
// const container = document.querySelector(".container");
// const backward = document.querySelector("#backward");
// const forward = document.querySelector("#forward");
// const cover = document.querySelector("#cover");
// const progress = document.querySelector("#progress");
// const trackName = document.querySelector("#track-name");
// const music = [
//   "The Weeknd - Save Your Tears",
//   "The Weeknd - Blinding Lights",
//   "Shawn Mendes - There s Nothing Holdin  Me Back",
// ];
// let curreentMusic = 0;
// function changeMusic(index) {
//   const title = music[index];
//   cover.src = `./music-cover/images/${title}`.jpg;
//   cover.alt = title;
//   audio.src = `./music-cover/music/${title}`.mp3;
//   document.querySelector("#song-title").textContent = music[curreentMusic];
//   trackName.textContent = title;
// }
// changeMusic(curreentMusic);
// audio.volume = 0.5;
// voiceValue.textContent = 50;
// function play() {
//   audio.play();
//   container.classList.add("play");
//   playBtn.innerHTML = <i class="fa-solid fa-pause"></i>;
// }
// function pause() {
//   audio.pause();
//   container.classList.remove("play");
//   playBtn.innerHTML = <i class="fa-solid fa-play"></i>;
// }
// forward.addEventListener("click", () => {
//   if (music.length - 1 > curreentMusic) {
//     curreentMusic++;
//   } else {
//     curreentMusic = 0;
//   }
//   changeMusic(curreentMusic);
//   play();
// });
// backward.addEventListener("click", () => {
//   if (curreentMusic !== 0) {
//     curreentMusic--;
//   } else {
//     curreentMusic = music.length - 1;
//   }
//   changeMusic(curreentMusic);
//   play();
// });
// playBtn.addEventListener("click", () => {
//   const isPlaying = container.classList.contains("play");
//   if (isPlaying) {
//     pause();
//   } else {
//     play();
//   }
// });
// voiceRange.addEventListener("input", () => {
//   audio.volume = voiceRange.value / 100;
//   voiceValue.textContent = voiceRange.value;
// });
// audio.addEventListener("timeupdate", () => {
//   progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
// });
// audio.addEventListener("ended", () => {
//   forward.click();
// });
