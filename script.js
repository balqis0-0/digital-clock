function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = string(now.getHours()).padStart(2, '0');
  const minutes = string(now.getMinutes()).padStart(2, '0');
  const seconds = string(now.getSeconds()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
                                        
