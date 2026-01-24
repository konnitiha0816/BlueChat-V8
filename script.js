function setBackgroundByTime() {
  const now = new Date();

  // 日本時間に変換
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

window.onload = setBackgroundByTime;
