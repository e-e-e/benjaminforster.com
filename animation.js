(function() {

  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(init)

  var MAX_FRAMES = 1867
  var FRAME_RATE = Math.floor(1000/25)
  var BATCH_SIZE = 25

  var imgEl

  var start = null
  var currentFrame = 0
  var frames = []
  var batch = []
  var batchLoadCounter = 0

  function init () {
    imgEl = document.getElementById('ani')
    loadBatch(0)
    window.requestAnimationFrame(step)
  }

  function paddedCount(num) {
    if (num >= 1000) return '' + num
    else if (num >= 100) return '0' + num
    else if (num >= 10) return '00' + num
    else return '000' + num
  }

  function frameLoaded() {
    batchLoadCounter++
    if (frames.length === MAX_FRAMES || batchLoadCounter === BATCH_SIZE) {
      Array.prototype.push.apply(frames, batch)
      batch = []
      if (frames.length < MAX_FRAMES) {
        loadBatch(frames.length)
      }
    }
  }

  function loadBatch(num) {
    batchLoadCounter = 0
    for (var i = num; i < num + BATCH_SIZE && i < MAX_FRAMES; i++) {
      var image = new Image()
      image.onload = frameLoaded
      image.src = './images/img' + paddedCount(i) + '.jpg'
      batch.push(image)
    }
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
