// Matrix rain effect
const canvas=document.getElementById("matrix"), ctx=canvas.getContext("2d");
canvas.height=window.innerHeight; canvas.width=window.innerWidth;
const letters="01", fontSize=14, columns=canvas.width/fontSize, drops=new Array(Math.floor(columns)).fill(1);
function draw(){
  ctx.fillStyle="rgba(0,0,0,0.05)"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#00FF99"; ctx.font=fontSize+"px monospace";
  drops.forEach((y,i)=>{
    const text=letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,y*fontSize);
    drops[i] = y*fontSize > canvas.height && Math.random()>0.975 ? 0 : y+1;
  });
}
setInterval(draw,35);

// Background music control
const bgm=document.getElementById("bgm"), btn=document.getElementById("mute-btn");
btn.addEventListener("click",()=>{ bgm.muted=!bgm.muted; btn.textContent = bgm.muted ? "Unmute 🔇" : "Mute 🔈"; });
