const section = document.querySelector("section");

const iconbtn = document.querySelector(".icon");

const video = document.querySelector(".video");

iconbtn.addEventListener("click", () => {
  section.classList.toggle("dark");
});

function render1() {
  video.innerHTML = `
        <source src="/image/lvr-day-157af84b5c44dc5321fd2650bcfdcdb6.mp4" type="" >
        `;
}

function render2() {
  video.innerHTML = `
     <source src="/image/lofi-day-0964a6b381665e36164b1ee6ca444b1d.mp4" type="" >
    `;
}

setInterval(() => {
  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  second = date.getSeconds();
  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".minutes_num").innerText = min;
  document.querySelector(".seconds_num").innerText = second;
  document.querySelector(".am_pm").innerText = d;
}, 1000);
