(function() {
  var imgEl
  var start = null
  var MAX_FRAMES = 1867
  var FRAME_RATE = Math.floor(1000/25)
  var currentFrame = 0
  var frames = []

  function paddedCount(num) {
    if (num >= 1000) return '' + num
    else if (num >= 100) return '0' + num
    else if (num >= 10) return '00' + num
    else return '000' + num
  }

  function pushFrameOntoStack(e) {
    frames.push(e.target)
    if (frames.length < MAX_FRAMES) loadFrame(frames.length)
  }

  function loadFrame (num) {
    var image = new Image()
    image.addEventListener('load', pushFrameOntoStack)
    image.src = './images/img' + paddedCount(num) + '.jpg'
  }

  window.onload = function () {
    imgEl = document.getElementById('ani')
    loadFrame(0)
    window.requestAnimationFrame(step)
  }

  function step(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    if (progress > FRAME_RATE) {
      const i = Math.floor(progress / FRAME_RATE)
      currentFrame += i
      start = timestamp - (progress % FRAME_RATE)
      currentFrame %= frames.length
      var current = frames[currentFrame]
      if(current) imgEl.src = current.src
    }
    window.requestAnimationFrame(step)
  }
})()
