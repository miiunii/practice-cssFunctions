scroll = window.pageYOffset

document.addEventListener('scroll', () => {
  var offset = window.pageYOffset;
  scroll = offset
  document.getElementById('layer1').style.width = (100 + scroll/5) + '%'
  document.getElementById('layer2').style.width = (100 + scroll/5) + '%'
  document.getElementById('layer2').style.left = (scroll/50) + '%'
  document.getElementById('text').style.top = (- scroll/5) + '%'
})
