import {TweenMax, Power4, TimelineMax} from 'gsap'
import MorphSVG from 'gsap/MorphSVGPlugin'
import Draggable from 'gsap/Draggable'
import GSDevTools from 'gsap/GSDevTools'

var frame_rate = 24

function init() {
  var palpebraInf = document.getElementById('palpebra-inf-open')
  var palpebraSup = document.getElementById('palpebra-sup-open')

  var t1 = new TimelineMax({id: 'pupilla'})
  t1.to('#pupilla', .42, {
      delay: .25,
      x: '+=50',
    })
    .to('#pupilla', .42, {
      delay: .375,
      x: '-=100',
    })
    .to('#pupilla', .42, {
      delay: .375,
      x: '+=50'
    })

  var t2 = new TimelineMax({id: 'palpebra-inf'})
  t2.to(palpebraInf, .08, {
      morphSVG: '#palpebra-inf',
    })
    .to(palpebraInf, 0, {
      visibility: 'hidden'
    })
    .to('#palpebra-inf-closed', 0, {
      visibility: 'visible'
    })
    .to('#palpebra-inf-closed', 0, {
      delay: .08,
      visibility: 'hidden'
    })
    .to(palpebraInf, 0, {
      visibility: 'visible'
    })
    .to(palpebraInf, .08, {
      morphSVG: palpebraInf,
    })

  var t3 = new TimelineMax({id: 'palpebra-sup'})
  t3.to(palpebraSup, .08, {
      morphSVG: '#palpebra-sup-closed',
    })
    .to(palpebraSup, .08, {
      delay: .08,
      morphSVG: palpebraSup
    })

  var palperbraTimeline = new TimelineMax()
  palperbraTimeline.add(t2, 0.01)
  palperbraTimeline.add(t3, 0.01)

  var t4 = new TimelineMax({id: 'lettere'})
  t4.to('#P-letter', 0.01, {
      visibility: 'visible'
    })
    .to('#P-letter', 0, {
      delay: .5,
      visibility: 'hidden',
    })
    .to('#R-letter', 0, {
      visibility: 'visible',
    })
    .to('#R-letter', 0, {
      delay: .33,
      visibility: 'hidden',
    })
    .to('#E-letter', 0, {
      visibility: 'visible',
    })
    .to('#E-letter', 0, {
      delay: .33,
      visibility: 'hidden',
    })
    .to('#S-letter-1', 0, {
      visibility: 'visible',
    })
    .to('#S-letter-1', 0, {
      delay: .33,
      visibility: 'hidden',
    })
    .to('#S-letter-2', 0, {
      visibility: 'visible',
    })
    .to('#S-letter-2', 0, {
      delay: .33,
      visibility: 'hidden',
    })

  var t5 = new TimelineMax({id: 'palpebra-inf'})
  t5.to(palpebraInf, .08, {
      morphSVG: '#palpebra-inf',
    })
    .to(palpebraInf, 0, {
      visibility: 'hidden'
    })
    .to('#palpebra-inf-closed', 0, {
      visibility: 'visible'
    })
    .to('#palpebra-inf-closed', 0, {
      delay: .08,
      visibility: 'hidden'
    })
    .to(palpebraInf, 0, {
      visibility: 'visible'
    })
    .to(palpebraInf, .08, {
      morphSVG: palpebraInf,
    })

  var t6 = new TimelineMax({id: 'palpebra-sup'})
  t6.to(palpebraSup, .08, {
      morphSVG: '#palpebra-sup-closed',
    })
    .to(palpebraSup, .08, {
      delay: .08,
      morphSVG: palpebraSup
    })

  var palperbraTimeline2 = new TimelineMax()
  palperbraTimeline2.add(t5, 0.01)
  palperbraTimeline2.add(t6, 0.01)

  var master = new TimelineMax({id: 'master'})
  master.add(t1, 0.01)
  master.add(palperbraTimeline, 2.26)
  master.add(t4, 2.42)
  master.add(palperbraTimeline2, 4.20)

  master.play()
  master.eventCallback('onComplete', function() {
    master.restart()
  })
}


function frameToSeconds(frame) {
  return (1 / frame_rate) * frame
}


window.onload = function() {
  // alert(frameToSeconds(8))
  init()

  // Add GSAP DevTools
  // GSDevTools.create()
}
