(function() {
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(init)

  var textEl
  var script = ['']

  function init () {
    textEl = document.getElementById('text')
    window.requestAnimationFrame(loop)
  }

  function loop(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    if (progress > FRAME_RATE) {

    }
    window.requestAnimationFrame(loop)
  }
})()
