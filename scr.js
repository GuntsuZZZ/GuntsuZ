window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('toggleMusic');

  // ตั้งค่า icon เริ่มต้น
  btn.innerText = music.muted ? "🔈" : "🔊";

  btn.addEventListener('click', function() {
    music.muted = !music.muted;
    btn.innerText = music.muted ? "🔈" : "🔊";
  });
});
