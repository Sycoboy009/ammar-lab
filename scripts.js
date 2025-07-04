function enterSite() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-site').style.display = 'block';
}

// Matrix animation
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
setInterval(draw, 33);

function openOption(url) {
  window.open(url, '_blank');
}