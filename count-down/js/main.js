const eleCountDownBody = document.querySelector(".count-down-body");
const newYearDate = new Date("2024-02-10 00:00:00");

setInterval(() => {
  const currentDate = new Date();

  //Math.round => Làm tròn số
  //newYearDate.getTime() - currentDate.getTime()
  //=> chênh lệch milisecond từ now đến tết
  let secondRemain = Math.round(
    (newYearDate.getTime() - currentDate.getTime()) / 1000 // chia 1000 để chuyển từ ms sang s
  );
  const totalSecondOfOneDay = 60 * 60 * 24; // 60s * 60p * 24h
  const totalSecondOfOneHour = 60 * 60;
  const totalSecondOfOneMinute = 60;

  const dayRemain = Math.floor(secondRemain / totalSecondOfOneDay);
  secondRemain = secondRemain - dayRemain * totalSecondOfOneDay;
  const hourRemain = Math.floor(secondRemain / totalSecondOfOneHour);
  secondRemain = secondRemain - hourRemain * totalSecondOfOneHour;
  const minuteRemain = Math.floor(secondRemain / totalSecondOfOneMinute);
  secondRemain = secondRemain - minuteRemain * totalSecondOfOneMinute;

  eleCountDownBody.textContent = `${dayRemain} ngày ${hourRemain} giờ ${minuteRemain} phút ${secondRemain} giây`;
}, 1000);
