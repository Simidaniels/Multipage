function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial render
updateTime();

// Optional: live update every second
setInterval(updateTime, 1000);
