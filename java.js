const wrapper = document.querySelector(".wrapper");
musicImg = wrapper.querySelector(".img-area img");
musicName = wrapper.querySelector(".song-details .name");
musicAtrist = wrapper.querySelector(".song-details .atrist");
musicAudio = wrapper.querySelector("#main-audio");
playPausebtn = wrapper.querySelector(".play-pause");
prevBtn = wrapper.querySelector("#prev");
nextBtn = wrapper.querySelector("#next");
Progressbar = wrapper.querySelector(".progress-bars");
progressArea = wrapper.querySelector(".progress-area");
musicList = wrapper.querySelector(".music-list");
moreMusic = wrapper.querySelector("#more-music");
closeMusic = wrapper.querySelector("#close");

moreMusic.addEventListener("click", () => {
  musicList.classList.toggle("show");
});
closeMusic.addEventListener("click", () => {
  moreMusic.click();
});

const ultag = document.querySelector("ul");
allMusic.forEach((song, index) => {
  let htlms = `
    <li  >
    <div class="row " data-index = "${index + 1}">
        <span>${song.name}</span>
        <p>${song.Artist}</p>
    </div>
   
    <div  class="row-decuration"> <img src="./image/AH (86).png" alt=""></div>
   </li>
    `;
  ultag.insertAdjacentHTML("beforeend", htlms);

  musicList.addEventListener("click", (e) => {
    const songnode = e.target.closest(".row");
    const litag = document.querySelector("li");
    if (songnode) {
      indexMusic = Number(songnode.dataset.index);
      loadMusic(indexMusic);
      musicPlayed();
    }
  });
});

//  khai báo vị trí đầu tiên khi load lại trang và dùng để xác định vị trí khi load bài hát
let indexMusic = 1;
// khi load ứng dụng sẽ load lại
window.addEventListener("load", () => {
  loadMusic(indexMusic);
});

//  hàm load music
function loadMusic(indexNumber) {
  musicName.innerText = allMusic[indexNumber - 1].name;
  musicAtrist.innerText = allMusic[indexNumber - 1].Artist;
  musicImg.src = allMusic[indexNumber - 1].img;
  musicAudio.src = allMusic[indexNumber - 1].music;
}
//  play music
function musicPlayed() {
  wrapper.classList.add("paused");
  playPausebtn.querySelector("span").innerText = "pause";
  let playPromise = musicAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        musicAudio.play();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
// pause music
function musicPaused() {
  wrapper.classList.remove("paused");
  playPausebtn.querySelector("span").innerText = " play_arrow";
  musicAudio.pause();
}
// sự kiện khi click vào classpause sẽ chạy
playPausebtn.addEventListener("click", () => {
  const ismusicPause = wrapper.classList.contains("paused");
  ismusicPause ? musicPaused() : musicPlayed();
});
// hàm next music
function musicNext() {
  if (indexMusic > allMusic.length - 1) {
    indexMusic = 1;
  } else {
    indexMusic++;
  }
  loadMusic(indexMusic);
  musicPlayed();
}
// hàm prev music
function musicPrev() {
  if (indexMusic > 1) {
    indexMusic--;
  } else {
    indexMusic = allMusic.length;
  }
  loadMusic(indexMusic);
  musicPlayed();
}
// sụ kiện khi click vào sẽ next

nextBtn.addEventListener("click", () => {
  musicNext(); // gọi hàm musicnext
});
prevBtn.addEventListener("click", () => {
  musicPrev(); // gọi hàm musicPrev
});

// sự kiện update progess bar width thay đổi theo thời gian
musicAudio.addEventListener("timeupdate", (e) => {
  const currenttime = e.target.currentTime; // độ dài ban đầu của bài hát
  const duration = e.target.duration; // tổng độ dài của bài hát
  let progessWidth = (currenttime / duration) * 100;

  Progressbar.style.width = `${progessWidth}%`;

  //  lấy dom thời gian
  const musicCurrenttime = wrapper.querySelector(".current");

  const musicDuration = wrapper.querySelector(".duration");

  musicAudio.addEventListener("loadeddata", () => {
    //   update song total duration
    const audioDuration = musicAudio.duration; // lấy tổng số giây của bài hát

    let totalMin = Math.floor(audioDuration / 60); // tính ra số phút

    let totalsec = Math.floor(audioDuration % 60); // tính ra số giây
    if (totalsec < 10) {
      // kiểm tra nếu số giây bé hơn 10 thì thêm số 0 vào
      totalsec = `0${totalsec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalsec}`;
  });
  //   update song currentime

  let currentMin = Math.floor(currenttime / 60);

  let currentSec = Math.floor(currenttime % 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrenttime.innerText = `${currentMin}:${currentSec}`;
});

// update bài hát khi người dùng tua trượt thanh progess-bar
progressArea.addEventListener("click", (e) => {
  let progessWidth = progressArea.clientWidth; // lấy chiều cao của progess bar

  let clickOffsetX = e.offsetX; // lấy giá trị offset x khi click

  let songDuration = musicAudio.duration; // lấy thời gian cuối
  musicAudio.currentTime = (clickOffsetX / progessWidth) * songDuration;
  musicPlayed();
});

// lập lại bài hát, ngẫu nhiên dựa theo biểu tượng
const repaetBtn = wrapper.querySelector("#repeat");
repaetBtn.addEventListener("click", () => {
  // lấy innerText icon khi thay đổi icon tương ứng với innertext
  let gettext = repaetBtn.innerText;
  //   thay đổi icon khác nhau khi click vào nút repeat
  switch (gettext) {
    case "repeat_on": // nếu là reapet thì click vào sẽ thành repeat_one
      repaetBtn.innerText = "repeat_one_on";
      repaetBtn.setAttribute("Title", "song looped");
      break;
  }
  switch (gettext) {
    case "repeat_one_on": // nếu là reapet_one thì click vào sẽ thành shuffle_on
      repaetBtn.innerText = "shuffle_on";
      repaetBtn.setAttribute("Title", "playback shuffle");
      break;
  }
  switch (gettext) {
    case "shuffle_on": // nếu là "shuffle_on" thì click vào sẽ thành repeat_on
      repaetBtn.innerText = "repeat_on";
      repaetBtn.setAttribute("Title", "playlist looped");
      break;
  }
});
musicAudio.addEventListener("ended", () => {
  let gettext = repaetBtn.innerText;

  switch (gettext) {
    case "repeat_on":
      musicNext();
      break;
  }
  switch (gettext) {
    case "repeat_one_on":
      musicAudio.currentTime = 0;
      loadMusic(indexMusic);
      musicPlayed();
      break;
  }
  switch (gettext) {
    case "shuffle_on":
      let randIdex;
      do {
        randIdex = Math.floor(Math.random() * allMusic.length + 1);
      } while (indexMusic == randIdex);
      indexMusic = randIdex;
      musicNext(randIdex);
      loadMusic(indexMusic);
      musicPlayed();

      break;
  }
});
