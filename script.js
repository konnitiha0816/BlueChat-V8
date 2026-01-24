function setBackgroundByTime() {
  const now = new Date();
  const japanTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
  );

  const hour = japanTime.getHours();
  const body = document.body;

  if (hour >= 5 && hour < 17) {
    body.classList.add("day");
  } else {
    body.classList.add("night");
  }
}

window.onload = () => {
  setBackgroundByTime();

  const startBtn = document.getElementById("startBtn");
  const music = document.getElementById("titleMusic");

  startBtn.addEventListener("click", () => {
    music.play();
    alert("次は本人確認画面に進みます（フェーズ3）");
  });
};
