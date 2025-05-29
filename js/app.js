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
