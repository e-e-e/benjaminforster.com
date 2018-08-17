(function() {
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(init)

  var HIDDEN = 0
  var HIDING = 1
  var VISIBLE = 2
  var TRANSITION_TIME = 1000
  var textEl
  var start = null
  var pause = 0
  var state = HIDDEN

  var scripts = [
    "👋/👌/👋/👌/👋",
    "you know what/i have been thinking/thinking about it/and/fuck you",
    "fuck you if/you are comfortable/comfortable with the fact that/some people own so much/so much/that they are able/able to give",
    "able to be/“philanthropists”",
    "able to/decide/singularly/what to support/to judge “worth”",
    "able to/distribute money/to those things/those things that/they “like”",
    "all the while/able to/feel like/“moral”/and/“good”/“people”",
    "able/while others/work/and/others work/work just to get by",
    "those who have money to give/they have inherited/or/have accumulated/“their” wealth/either directly/or indirectly/through the very structures/which work against the majority/rent seeking/wage theft/conflict/war/environmental destruction",
    "with “their” wealth/they take the luxury of choice/expecting gratitude/titular recognition/while reducing the commons/reducing the public",
    "these people rob us twice",
    "so",
    "fuck you if/your happy to benefit from this",
    "and/fuck you if/you don’t see anything wrong with this",
    "and/fuck you if/you happily dine at their tables",
    "fuck you if/your happily silent",
    "✌️/👌/✌️/👌/✌️",
    "now/back/to/the/romance",
    "🌕/🌔/🌓/🌒/🌑",
    "I whisper ,/, to make/make me come/come to your/your ass ,/, and like/like this ? ” Maybe this is/is that you’re/you’re looking for/for three days/days , ”/” his/his father/father .",
    "But it wasn’t/wasn’t good enough/enough to read/read it ,/, take my/my room , and/and his body/body against him/him a smile/smile back . She stares at/at my words/words come out/out of his mouth/mouth with his/his head from/from this woman/woman , but/but I can’t help it/it was all she/she could only/only one/one of their/their loved ones .",
    '“I was hoping/hoping for a/a hot/hot against my/my hands on my/my hips/hips.',
    '"I opened my/my right hand/hand as she/she said quickly/quickly as possible/possible , but/but there was no/no doubt in my/my family ,/, ” I growl . Just as he/he thought he/he wanted ,/, anyway . That would be/be just fine/fine , ” he/he shook his head."',
    "I said ,/, but I like/like the sound/sound of my/my chin and/and took her/her last night/night , so/so I/I would/would be/be with me/me and kissed/kissed her again.",
    "“Hi , ”/” he/he asks/asks ,/, won’t you/you can be/be good for/for dear life/life , she/she did ,/, and I have/have been . But of course/course , ”/” he/he says he/he didn’t . He raised an/an asshole ,/, but/but you have/have to leave/leave me alone/alone with you/you right now/now ? ”/He opened his/his hard ,/, maybe a/a few seconds ,/, but then she/she opened her eyes/eyes , the/the hell do/do anything for/for an answer/answer right away/away from them/them , they/they",
    "I said ,/, but I like/like the sound/sound of my/my chin and/and took her/her last night/night , so/so I/I would/would be/be with me/me and kissed/kissed her again.",
    "This book is/is not going/going to bed/bed before/before I/I leave/leave you alone/alone again . “Where did you/you want more/more than that ,/, and he had/had been her/her name . I hold my/my legs again/again , all/all the times/times?”",
    "I stare at him/him to pick up/up again . I would be/be , ” he said ,/, then ? I’m willing to/to make sure she’s/she’s got a/a shadow of a doubt , that/that easy.",
    "“I know we/we could just/just don’t know/know what/what I/I could/could only be/be , ” he/he was getting/getting ready to/to think.",
    "Give me a/a chance and/and the/the first time ever/ever seen on/on to each/each other to/to wear.",
    "I’m going to have/have to/to lie/lie . Well , he/he opens his mouth/mouth to say/say anything as/as fuck . I can see/see ,/, ”/” I/I gasp ,/, got it ? ”",
    "I see that/that I got/got to know/know what it/it on/on the word/word for it . He pulls his/his seat/seat belt/belt and/and the other/ than a/a moment , before/before?",
    "He took a/a thank you/you ,/, Mr./Mr. /trying not /cock . “You want me to/to be/be on a/a good look/look on her face . I sigh as/as the way/way he looked at me/me at the same/same time as/as much as I do . “Thanks , ”/” he says as/as he/he gets/gets to/to a small/small smile . I said/said I/I was/was never going to/to cry again.",
    "“I thought we/we were living/living or/or dead/dead ,/, because she’s/she’s got a/a really good/good thing . I wrap my/my entire body/body against him/him to get/get up to/to do the right thing . I turn to/to the floor and/and I/I both/both of my/my gut at/at the idea/idea how much/much easier.",
    "I knew ,/, then his/his hand on my lower/lower lip and/and leaned in/in shock ,/, it would be/be here . But instead of/of her body with/with his . Fuck ,/, I/I don’t even/even when I/I can . I knew it would/would make me     him to say/say the/the words/words . I knew I was/was the/the ground and/and his voice/voice broke.",
    "“Have a/a seat/seat , ”/” he/he mutters/mutters ,     one of/of my eye ,/, I/I don’t know what/what I mean ?”",
    "I don’t know if/if I/I tried/tried to/to ignore/ignore me/me a few/few minutes ago/ago , we     this ? ” That’s why I     check on/on her/her clit/clit and/and closer to/to say ?",
    "I heard you/you think you’re/you’re talking about ,/, she reached/reached for his/his friend . It takes me/me into a/a grin ,/, looking down at/at me , his eyes/eyes when he/he was about to/to my bedroom and/and the/the most/most perfect     thank/thank you ,/, okay .",
    "I give him a/a few seconds ,/, aren’t you?"
  ]
  var scriptPosition = 0
  var scriptNum = 0
  var script = []

  function init () {
    textEl = document.getElementById('text')
    setTimeout(function () {
      window.requestAnimationFrame(loop)
    }, 1200)
    window.addEventListener('resize', debounce(onResize, 100))
    rotateText()
  }

  function debounce(func, wait) {
    var timeout
    return function () {
      var context = this, args = arguments
      var later = function () {
        timeout = null;
        func.apply(context, args)
      }
      clearTimeout(timeout);
      timeout = setTimeout(later, wait)
    }
  }

  function rotateText() {
    if (window.innerWidth < window.innerHeight) {
      if (!textEl.classList.contains('rotate')) {
        textEl.classList.add('rotate')
      }
    } else if (textEl.classList.contains('rotate')) {
      textEl.classList.remove('rotate')
    }
  }

  function onResize() {
    rotateText()
  }

  var BREAK_POINT = 19
  function getNewScript() {
    var s;
    if (scriptNum < BREAK_POINT) {
      s = scripts[scriptNum]
      scriptNum++
    } else {
      s = scripts[BREAK_POINT + Math.floor(Math.random() * (scripts.length - BREAK_POINT))]
    }
    return s.split('/')
  }

  function getTiming(phrase) {
    var p = 150;
    var words = phrase.split(' ')
    if (words.length === 1 && ['and', 'so', 'or', '...', 'able', 'work'].indexOf(words[0]) >= 0) return 1000
    for (var i = 0; i < words.length; i++) {
      p += (Math.floor(words[i].length / 6) + 1) * 300 * (words[i] === 'fuck' ? 3 : 1)
    }
    return p
  }

  function startStatement () {
    script = getNewScript()
    scriptPosition = 0
    var nextText = script[scriptPosition].trim()
    textEl.innerHTML = nextText
    textEl.style.opacity = 1
    state = VISIBLE
    pause = getTiming(nextText)
  }

  function waitWhileHidden () {
    state = HIDDEN
    pause = 1000 + Math.random() * 3000
  }

  function startHiding() {
    textEl.style.opacity = 0
    pause = TRANSITION_TIME
    state = HIDING
    pause = 0
  }

  function nextPhrase () {
    scriptPosition++;
    if (scriptPosition >= script.length) {
      startHiding()
      return
    }
    var nextText = script[scriptPosition].trim()
    textEl.innerHTML = nextText
    pause = getTiming(nextText)
  }

  function loop(timestamp) {
    if (!start) start = timestamp
    var progress = timestamp - start
    if (progress > pause) {
      start = timestamp
      switch (state) {
        case HIDDEN:
          startStatement()
          break
        case HIDING:
          waitWhileHidden()
          break
        case VISIBLE:
          nextPhrase()
      }
    }
    window.requestAnimationFrame(loop)
  }
})()
