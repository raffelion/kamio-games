function showComingSoon(platform) {
  const existing = document.querySelector(".popup-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
      <div class="popup-content">
        <h3>Coming Soon!</h3>
        <p>The ${platform} version is currently in development. Our team is working hard to bring you the best experience possible. Stay tuned!</p>
        <button class="close-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
      </div>
  `;
  document.body.appendChild(overlay);
}
