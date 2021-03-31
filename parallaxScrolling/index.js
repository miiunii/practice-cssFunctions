document.addEventListener('scroll', () => {
  const scrollData = window.scrollY;
  document.getElementById('layer1').style.width = (100 + scrollData/5) + '%'
  document.getElementById('layer2').style.width = (100 + scrollData/5) + '%'
  document.getElementById('layer2').style.left = (scrollData/50) + '%'
  document.getElementById('text').style.top = (- scrollData/5) + '%'
})
