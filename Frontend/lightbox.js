const images = document.querySelectorAll('.lightbox-img');
images.forEach(img => {
  img.onclick = () => {
    const overlay = document.createElement('div');
    overlay.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer';
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:12px">`;
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  }
});