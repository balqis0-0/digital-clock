function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = string(now.getHours()).padStart(2, '0');
  const minutes = string(now.getSecond()).padStart(2, '0');
  const second = string(now.getSecond()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minute}:${second}`;
}

setInterval(updateTime, 1000);
updateTime();
                                        
