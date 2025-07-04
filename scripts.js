// Matrix background effect
const canvas = document.getElementById("matrix"),
      ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const letters = "01", fontSize = 14, columns = Math.floor(canvas.width / fontSize), drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00FF99";
  ctx.font = fontSize + "px monospace";
  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, y * fontSize);
    drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}
setInterval(draw, 35);

// ✅ Background YouTube Music Mute Toggle (Hidden iframe control)
const btn = document.getElementById("mute-btn"),
      hiddenMusicIframe = document.querySelector("div[style*='display: none;'] iframe");

let isMuted = false;

btn.addEventListener("click", () => {
  const currentSrc = hiddenMusicIframe.src;

  if (!isMuted) {
    hiddenMusicIframe.src = currentSrc.replace("autoplay=1", "autoplay=0");
    btn.textContent = "🔊 Unmute Music";
  } else {
    hiddenMusicIframe.src = currentSrc.replace("autoplay=0", "autoplay=1");
    btn.textContent = "🔇 Mute Music";
  }

  isMuted = !isMuted;
});
