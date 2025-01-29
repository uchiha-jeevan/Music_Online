//const songs = ["song1.mp3", "song2.mp3", "song3.mp3"]; // Update with actual file names

const songs = ["Unforgettable-slowed x reverbed.mp3", "French Montana - Unforgettable.mp3", "sweater weather.mp3",
    "Summertime Sadness.mp3",
    "the weeknd-starboy.mp3",
    "kings and queens.mp3",
    "Softcore.mp3",
    "My Ordinary Life (Slowed).mp3",
    "clean bandit.mp3"
    ];

    
let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");
const playlist = document.getElementById("playlist");

function loadSongs() {
    songs.forEach((song, index) => {
        let option = document.createElement("option");
        option.textContent = song;
        playlist.appendChild(option);
    });
}

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = "music/" + songs[currentSongIndex]; // Ensure files are in 'music' folder
    audioPlayer.play();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playlist.selectedIndex = currentSongIndex;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playlist.selectedIndex = currentSongIndex;
    playSong(currentSongIndex);
}

audioPlayer.addEventListener("ended", nextSong);
loadSongs();