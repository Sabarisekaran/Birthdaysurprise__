import React, { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import BannerFlagsAsset from './components/BannerFlagsAsset'
import Balloons from './components/Balloons'
import GiftBox from './components/GiftBox'
import Cake from './components/Cake'
import Heart from './components/Heart'

import pandaHappy from './assests/pandahappy.png'
import pandaHeart from './assests/pandaheart.png'
import pandaPoint from './assests/pandapoint.png'
import pandaThink from './assests/pandathink.png'
import pandaWave from './assests/pandawave.png'

import teddyHappy from './assests/teddyhappy.png'
import teddyShy from './assests/teddyshy.png'
import teddySuprise from './assests/teddysuprise.png'
import teddyThank from './assests/teddythank.png'
import teddyWave from './assests/teddywave.png'
import teddyWhite from './assests/teddywhite.png'
import ringImage from './assests/ring.png'
import arrowImage from './assests/arrow.png'

type PaletteColor = {
  name: string
  hex: string
}

type Message = {
  from: 'panda' | 'teddy'
  text: string
}

type ColoredItems = {
  cake: boolean
  balloons: boolean
  gift: boolean
  teddy: boolean
}

const PALETTE: PaletteColor[] = [
  { name: 'yellow', hex: '#f7d45a' },
  { name: 'blue', hex: '#7fb1f5' },
  { name: 'red', hex: '#f46a6a' },
  { name: 'pink', hex: '#f7a3c7' },
  { name: 'purple', hex: '#b28cf2' },
  { name: 'green', hex: '#8fd6b0' },
  { name: 'orange', hex: '#f7b36a' },
]

const PANDA_IMAGE_MAP = {
  wave: pandaWave,
  happy: pandaHappy,
  heart: pandaHeart,
  point: pandaPoint,
  think: pandaThink,
}

const TEDDY_IMAGE_MAP = {
  white: teddyWhite,
  happy: teddyHappy,
  shy: teddyShy,
  surprised: teddySuprise,
  thank: teddyThank,
  wave: teddyWave,
}

function App() {
  const [entryDone, setEntryDone] = useState(false)
  const [step, setStep] = useState(0)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'panda', text: 'Happy Birthday Harshi 🎉' },
  ])
  const [inputValue, setInputValue] = useState('')
  const [brushActive, setBrushActive] = useState(false)
  const [selectedColor, setSelectedColor] = useState<PaletteColor>(PALETTE[0])
  const [coloredItems, setColoredItems] = useState<ColoredItems>({
    cake: false,
    balloons: false,
    gift: false,
    teddy: false,
  })
  const [objectColors, setObjectColors] = useState({
    cake: PALETTE[0].hex,
    balloons: PALETTE[0].hex,
    gift: PALETTE[0].hex,
    teddy: PALETTE[0].hex,
  })
  const [giftFlowActive, setGiftFlowActive] = useState(false)
  const [giftFlowCompleted, setGiftFlowCompleted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [paperStep, setPaperStep] = useState<'first' | 'second' | 'stretch' | 'reveal'>('first')
  const [stretchProgress, setStretchProgress] = useState(0)
  const [isStretching, setIsStretching] = useState(false)
  const [giftWrapColor, setGiftWrapColor] = useState(PALETTE[0].hex)
  const [ringPrompted, setRingPrompted] = useState(false)
  const [celebrationStage, setCelebrationStage] = useState<
    'idle' | 'candle' | 'cake' | 'post-cake' | 'share'
  >('idle')
  const [celebrationStarted, setCelebrationStarted] = useState(false)
  const [candleBlown, setCandleBlown] = useState(false)
  const [candlePicked, setCandlePicked] = useState(false)
  const [cakeCut, setCakeCut] = useState(false)
  const [showPandaMessage, setShowPandaMessage] = useState(false)
  const [pandaPopupPhase, setPandaPopupPhase] = useState<
    'none' | 'tap-more' | 'wish' | 'share'
  >('none')
  const [userNote, setUserNote] = useState('')
  const stretchStartY = useRef<number | null>(null)
  const messagesRef = useRef<HTMLDivElement | null>(null)
  const pandaPopupTimer = useRef<number | null>(null)
  const pandaShareTimer = useRef<number | null>(null)

  const pandaEmotion = useMemo(() => {
    if (pandaPopupPhase === 'tap-more') return 'point'
    if (pandaPopupPhase === 'wish') return 'heart'
    if (pandaPopupPhase === 'share') return 'happy'
    if (giftFlowCompleted) return 'happy'
    if (showPopup && paperStep === 'reveal') return 'heart'
    if (giftFlowActive && !showPopup) return 'point'
    if (brushActive) {
      if (!coloredItems.cake) return 'point'
      if (!coloredItems.balloons) return 'point'
      if (!coloredItems.gift) return 'point'
      if (!coloredItems.teddy) return 'heart'
      return 'happy'
    }

    if (step === 0) return 'wave'
    if (step === 1) return 'happy'
    if (step === 2) return 'heart'
    if (step === 3) return 'think'
    if (step >= 4) return 'point'
    return 'happy'
  }, [
    brushActive,
    coloredItems,
    giftFlowActive,
    giftFlowCompleted,
    pandaPopupPhase,
    paperStep,
    showPopup,
    step,
  ])

  const teddyEmotion = useMemo(() => {
    if (coloredItems.teddy) return 'thank'
    if (brushActive && step >= 4) return 'shy'
    if (step === 1) return 'happy'
    if (step === 2) return 'surprised'
    if (step === 3) return 'white'
    if (step >= 4) return 'wave'
    return 'white'
  }, [brushActive, coloredItems.teddy, step])

  const arrowTarget = useMemo(() => {
    if (celebrationStage === 'candle') return 'candle'
    if (celebrationStage === 'cake' && !cakeCut) return 'cake'
    if (giftFlowActive && !showPopup && !giftFlowCompleted) return 'gift'
    if (step >= 4 && !brushActive) return 'heart'
    if (!brushActive) return null
    if (!coloredItems.cake) return 'cake'
    if (!coloredItems.balloons) return 'balloons'
    if (!coloredItems.gift) return 'gift'
    if (!coloredItems.teddy) return 'teddy'
    return null
  }, [brushActive, cakeCut, celebrationStage, coloredItems, giftFlowActive, giftFlowCompleted, showPopup, step])

  const pandaImage = PANDA_IMAGE_MAP[pandaEmotion]
  const teddyImage = TEDDY_IMAGE_MAP[teddyEmotion]

  const pandaPopupText = useMemo(() => {
    if (pandaPopupPhase === 'tap-more') {
      return 'Tap to see more'
    }
    if (pandaPopupPhase === 'wish') {
      return (
        'May the years bring the best for you ✨\n' +
        'Feel happy, stay bold 💫\n' +
        'I will always be with you ❤️'
      )
    }
    if (pandaPopupPhase === 'share') {
      return 'Share a sweet piece with someone special 🍰'
    }
    return ''
  }, [pandaPopupPhase])

  const pandaPopupActive = showPandaMessage && pandaPopupPhase !== 'none'

  const pandaMessage = useMemo(() => {
    const lastMessage = [...messages].reverse().find((message) => message.from === 'panda')
    return lastMessage?.text ?? ''
  }, [messages])

  const displayedPandaMessage = pandaPopupActive ? pandaPopupText : pandaMessage

  const teddyMessage = useMemo(() => {
    const lastMessage = [...messages].reverse().find((message) => message.from === 'teddy')
    return lastMessage?.text ?? ''
  }, [messages])

  const teddyColorName = useMemo(() => {
    const match = PALETTE.find((color) => color.hex.toLowerCase() === objectColors.teddy.toLowerCase())
    return match?.name ?? 'custom'
  }, [objectColors.teddy])

  const teddyDreamDetail = useMemo(() => {
    if (!brushActive) return 'Tap the heart to color me.'
    if (!coloredItems.teddy) return `Pick my color: ${selectedColor.name}.`
    return `My color: ${teddyColorName}.`
  }, [brushActive, coloredItems.teddy, selectedColor.name, teddyColorName])

  const allColored =
    coloredItems.cake && coloredItems.balloons && coloredItems.gift && coloredItems.teddy

  useEffect(() => {
    if (!allColored || giftFlowActive || giftFlowCompleted) return
    setGiftFlowActive(true)
    pushPandaMessage('Harshi… tap the gift 🎁')
  }, [allColored, giftFlowActive, giftFlowCompleted])

  useEffect(() => {
    if (!giftFlowCompleted || celebrationStarted) return
    setCelebrationStarted(true)
    setCelebrationStage('candle')
    setCandleBlown(false)
    setCandlePicked(false)
    setCakeCut(false)
    setShowPandaMessage(false)
    setPandaPopupPhase('none')
    setUserNote('')
    pushPandaMessage("Now it's time to celebrate Harshi! 🎉")
    pushPandaMessage('Tap the candle to blow it 🕯️')
  }, [celebrationStarted, giftFlowCompleted])

  useEffect(() => {
    if (!cakeCut || celebrationStage === 'share') return
    if (pandaPopupPhase !== 'none') return
    setShowPandaMessage(true)
    setPandaPopupPhase('tap-more')
  }, [cakeCut, celebrationStage, pandaPopupPhase])

  useEffect(() => {
    const container = messagesRef.current
    if (!container) return
    container.scrollTop = container.scrollHeight
  }, [messages])

  useEffect(() => {
    if (paperStep !== 'reveal' || !showPopup || ringPrompted) return
    pushPandaMessage('Tap the ring 💍')
    setRingPrompted(true)
  }, [paperStep, ringPrompted, showPopup])

  useEffect(() => {
    if (!cakeCut || celebrationStage === 'share') return

    if (pandaPopupTimer.current) window.clearTimeout(pandaPopupTimer.current)
    if (pandaShareTimer.current) window.clearTimeout(pandaShareTimer.current)

    pandaPopupTimer.current = window.setTimeout(() => {
      setShowPandaMessage(true)
      setPandaPopupPhase('wish')
      pandaShareTimer.current = window.setTimeout(() => {
        setPandaPopupPhase('share')
        setCelebrationStage('share')
      }, 2500)
    }, 7000)

    return () => {
      if (pandaPopupTimer.current) window.clearTimeout(pandaPopupTimer.current)
      if (pandaShareTimer.current) window.clearTimeout(pandaShareTimer.current)
    }
  }, [cakeCut, celebrationStage])

  const pushPandaMessage = (text: string) => {
    setMessages((prev) => [...prev, { from: 'panda', text }])
  }

  const pushTeddyMessage = (text: string) => {
    setMessages((prev) => [...prev, { from: 'teddy', text }])
  }

  const handleBack = () => {
    window.history.back()
  }

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!inputValue.trim()) return

    const message = inputValue.trim()
    setInputValue('')
    pushTeddyMessage(message)

    if (step === 0) {
      pushPandaMessage('That’s so sweet Harshi 😊')
      setStep(1)
      return
    }

    if (step === 1) {
      pushPandaMessage('You always make everything special ❤️')
      setStep(2)
      return
    }

    if (step === 2) {
      pushPandaMessage('Hmm… something is missing… 🤔')
      setStep(3)
      return
    }

    if (step === 3) {
      pushPandaMessage("Let’s make this beautiful!")
      pushPandaMessage('Tap the heart above to start coloring 🎨')
      setStep(4)
      return
    }

    pushPandaMessage('I knew you would make it special 💫')
  }

  const handleHeartClick = () => {
    if (step < 4) return
    setBrushActive(true)
  }

  const handleColorObject = (target: keyof ColoredItems) => {
    if (!brushActive) return
    if (arrowTarget && arrowTarget !== target) return
    setColoredItems((prev) => ({ ...prev, [target]: true }))

    if (target === 'teddy') {
      setObjectColors((prev) => ({ ...prev, teddy: selectedColor.hex }))
      pushPandaMessage('This is perfect Harshi! 😊')
      return
    }

    setObjectColors((prev) => ({ ...prev, [target]: selectedColor.hex }))

    if (target === 'cake') {
      pushPandaMessage('Now the balloons 🎈')
    } else if (target === 'balloons') {
      pushPandaMessage('And the gift 🎁')
    } else if (target === 'gift') {
      pushPandaMessage('Wow Harshi! It looks beautiful 💖')
      pushPandaMessage('Now color the teddy 🧸')
      pushPandaMessage('Choose your favorite color!')
    }
  }

  const handleCakeClick = () => {
    if (celebrationStage === 'cake' && !cakeCut) {
      setCakeCut(true)
      setShowPandaMessage(false)
      setShowPandaMessage(true)
      setPandaPopupPhase('tap-more')
      setCelebrationStage('post-cake')
      return
    }

    handleColorObject('cake')
  }

  const handleGiftClick = () => {
    if (giftFlowActive && !giftFlowCompleted && !showPopup) {
      setGiftWrapColor(selectedColor.hex)
      setShowPopup(true)
      setPaperStep('first')
      setStretchProgress(0)
      setIsStretching(false)
      setRingPrompted(false)
      return
    }

    handleColorObject('gift')
  }

  const handlePaperAdvance = () => {
    if (paperStep === 'first') {
      setPaperStep('second')
      return
    }
    if (paperStep === 'second') {
      setPaperStep('stretch')
    }
  }

  const startStretch = (clientY: number) => {
    if (paperStep !== 'stretch') return
    setIsStretching(true)
    stretchStartY.current = clientY
  }

  const updateStretch = (clientY: number) => {
    if (!isStretching || stretchStartY.current === null) return
    const delta = stretchStartY.current - clientY
    const progress = Math.min(Math.max(delta / 140, 0), 1)
    setStretchProgress(progress)

    if (progress >= 1) {
      setIsStretching(false)
      setPaperStep('reveal')
    }
  }

  const endStretch = () => {
    setIsStretching(false)
    stretchStartY.current = null
  }

  const handleRingClick = () => {
    setShowPopup(false)
    setGiftFlowActive(false)
    setGiftFlowCompleted(true)
    setPaperStep('first')
    setStretchProgress(0)
    setRingPrompted(false)
    pushTeddyMessage('Ohh ring!!')
    pushPandaMessage('You will receive it soon Harshi ❤️')
  }

  const handleCandleClick = () => {
    if (celebrationStage !== 'candle' || candleBlown) return
    setCandleBlown(true)
    window.setTimeout(() => setCandlePicked(true), 500)
    window.setTimeout(() => {
      setCelebrationStage('cake')
      pushPandaMessage('Now cut the cake Harshi 🎂')
    }, 700)
  }

  const handleShare = () => {
    if (celebrationStage !== 'share') return
    const note = userNote.trim()
    const baseMessage = "Here's a sweet cake for you 🍰❤️"
    const fullMessage = note ? `${baseMessage}\n\n${note}` : baseMessage
    const url = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`
    window.open(url, '_blank')
  }

  const entryLines = [
    'May 4, 2006 – Something beautiful entered the world',
    'May 4 – A special day began',
    'May 4 – A reason to celebrate forever',
  ]

  const entryNames = [
    'Harshitha',
    'ஹர்ஷிதா',
    'हर्षिता',
    'ハルシタ',
    '하르시타',
    'هارشيتا',
    'Harshitha',
  ]

  const entryMoons = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘']

  const EntryPage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [entryStep, setEntryStep] = useState(1)
    const [fadeTick, setFadeTick] = useState(0)
    const [isExiting, setIsExiting] = useState(false)

    const entryText =
      entryStep === 1
        ? 'Some souls arrive like light ✨\nQuiet… yet everything changes\nToday feels special for a reason ❤️'
        : entryStep === 2
          ? 'Follow the little moments…\nSomething beautiful is waiting for you 👀'
          : 'Go explore what’s been created just for you 💫'

    const hintText =
      entryStep === 1 ? 'Tap to view more →' : entryStep === 2 ? 'Keep going…' : 'Tap to reveal ✨'

    const handleTap = () => {
      if (isExiting) return
      if (entryStep < 3) {
        setEntryStep((prev) => prev + 1)
        setFadeTick((prev) => prev + 1)
        return
      }

      setFadeTick((prev) => prev + 1)
      setIsExiting(true)
      window.setTimeout(onComplete, 520)
    }

    return (
      <div className={isExiting ? 'entry-shell entry-exit main-bg' : 'entry-shell main-bg'}>
        <div className="entry-name-flow" aria-hidden>
          <div className="entry-name-track">
            {[...entryNames, ...entryNames].map((name, index) => (
              <span key={`${name}-${index}`} className="entry-name">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="entry-timeline" aria-hidden>
          <div className="entry-timeline-track">
            {[...entryLines, ...entryLines, ...entryLines].map((line, index) => (
              <div key={`${line}-${index}`} className="entry-timeline-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div
          className="entry-card"
          role="button"
          tabIndex={0}
          onClick={handleTap}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              handleTap()
            }
          }}
        >
          <p key={fadeTick} className="entry-text">
            {entryText.split('\n').map((line, index) => (
              <span key={`${line}-${index}`} className="entry-line">
                {line}
              </span>
            ))}
          </p>
          <div className="entry-hint">{hintText}</div>
        </div>

        <div className="entry-moons" aria-hidden>
          <div className="entry-moons-track">
            {[...entryMoons, ...entryMoons].map((moon, index) => (
              <span key={`${moon}-${index}`} className="entry-moon">
                {moon}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!entryDone) {
    return <EntryPage onComplete={() => setEntryDone(true)} />
  }

  return (
    <div className="app-shell">
      <div className="frame">
        <button className="back-button" onClick={handleBack} aria-label="Go back">
          ←
        </button>

        <div className="flags">
          <BannerFlagsAsset size={320} />
        </div>

        <div className="title">
          <p className="title-top">Shhh...</p>
          <p className="title-main">
            It's a <span>Birthday</span> Surprise
          </p>
          <div className="title-heart">
            <Heart onActivate={handleHeartClick} />
          </div>
        </div>

        <div className={candleBlown ? 'scene scene-dimmed' : 'scene'}>
          <div className="balloons" onClick={() => handleColorObject('balloons')}>
            <Balloons colored={coloredItems.balloons} color={objectColors.balloons} />
          </div>
          <div
            className={coloredItems.teddy ? 'teddy colored' : 'teddy'}
            onClick={() => handleColorObject('teddy')}
            style={{ '--teddy-color': objectColors.teddy } as React.CSSProperties}
          >
            <img src={teddyImage} alt="Teddy" />
          </div>

          <div className="mind-bubble mind-bubble-teddy">
            <div className="mind-bubble-text">{teddyMessage || '...'}</div>
            <div className="mind-bubble-sub">{teddyDreamDetail}</div>
          </div>

          <div
            className={`cake ${candleBlown ? 'cake-dimmed' : ''} ${cakeCut ? 'cake-split' : ''}`}
            onClick={handleCakeClick}
          >
            {!cakeCut && (
              <Cake
                colored={coloredItems.cake}
                color={objectColors.cake}
                candleLit={!candleBlown}
                candleVisible={!candlePicked}
                showCandleGlow={celebrationStage === 'candle' && !candleBlown}
              />
            )}
            {cakeCut && (
              <>
                <div className="cake-slice cake-slice-left">
                  <Cake colored={coloredItems.cake} color={objectColors.cake} candleVisible={false} />
                </div>
                <div className="cake-slice cake-slice-right">
                  <Cake colored={coloredItems.cake} color={objectColors.cake} candleVisible={false} />
                </div>
              </>
            )}
            {celebrationStage === 'candle' && !candleBlown && (
              <button
                type="button"
                className="candle-hitbox"
                onClick={(event) => {
                  event.stopPropagation()
                  handleCandleClick()
                }}
                aria-label="Blow candle"
              />
            )}
          </div>

          <div className="gift" onClick={handleGiftClick}>
            <div className="gift-label-inline">Gift there</div>
            <GiftBox colored={coloredItems.gift} color={objectColors.gift} />
          </div>

          <div
            className={
              pandaPopupActive
                ? 'panda panda-popup'
                : candleBlown
                  ? 'panda panda-move'
                  : 'panda'
            }
          >
            <img src={pandaImage} alt="Panda" />
            {candlePicked && <div className="panda-candle" />}
          </div>

          <div
            className={
              pandaPopupActive
                ? 'mind-bubble mind-bubble-panda mind-bubble-popup'
                : 'mind-bubble mind-bubble-panda'
            }
          >
            <div className="mind-bubble-text">{displayedPandaMessage || '...'}</div>
          </div>
        </div>

        <div className="messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div
              key={`${message.from}-${index}`}
              className={message.from === 'panda' ? 'message-row panda-row' : 'message-row teddy-row'}
            >
              <div className="bubble">{message.text}</div>
            </div>
          ))}
        </div>

        <form className="input-row" onSubmit={handleInputSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="Type as Teddy..."
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>

        {celebrationStage === 'share' && (
          <div className="share-card">
            <div className="share-title">Share a sweet piece</div>
            <input
              type="text"
              value={userNote}
              placeholder="Write a note..."
              onChange={(event) => setUserNote(event.target.value)}
            />
            <button type="button" onClick={handleShare}>
              Share via WhatsApp
            </button>
          </div>
        )}

        {brushActive && (
          <div className="palette">
            <div className="palette-title">Select a color:</div>
            <div className="palette-colors">
              {PALETTE.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={
                    color.name === selectedColor.name ? 'palette-color active' : 'palette-color'
                  }
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>
        )}

        {!brushActive && step >= 4 && (
          <div className="hint-box">
            <span className="hint-text">Follow the panda 🐼</span>
          </div>
        )}

        {arrowTarget && (
          <div className={`arrow arrow-${arrowTarget}`}>
            <img src={arrowImage} alt="Arrow" />
          </div>
        )}

        {cakeCut && (
          <div className="confetti">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        )}

        {showPopup && (
          <div
            className="gift-modal-backdrop"
            onMouseMove={(event) => updateStretch(event.clientY)}
            onMouseUp={endStretch}
            onTouchMove={(event) => updateStretch(event.touches[0]?.clientY ?? 0)}
            onTouchEnd={endStretch}
          >
            <div className="gift-modal" onClick={(event) => event.stopPropagation()}>
              <div className="gift-modal-header">Your Gift</div>

              <div className="gift-wrap" style={{ '--wrap-color': giftWrapColor } as React.CSSProperties}>
                <div className="wrap-ribbon wrap-ribbon-vertical" />
                <div className="wrap-ribbon wrap-ribbon-horizontal" />
                <div className="gift-box-mini open">
                  <div className="gift-label">Gift</div>
                  <div className="gift-box-lid" />
                  <div className="gift-box-base" />
                </div>

                <div
                  className={
                    paperStep === 'first'
                      ? 'gift-paper gift-paper-first active'
                      : 'gift-paper gift-paper-first behind'
                  }
                  onClick={handlePaperAdvance}
                >
                  <div className="paper-title">Paper</div>
                  Distance only separates us…
                </div>

                {paperStep !== 'first' && (
                  <div
                    className={
                      paperStep === 'second'
                        ? 'gift-paper gift-paper-second active'
                        : paperStep === 'stretch' || paperStep === 'reveal'
                          ? 'gift-paper gift-paper-second stretch'
                          : 'gift-paper gift-paper-second'
                    }
                    style={{ height: `${180 + stretchProgress * 120}px` }}
                    onClick={handlePaperAdvance}
                  >
                    <div className="paper-title">Paper</div>
                    <div className="paper-text">…but our bond and emotions ❤️</div>
                    <div className="paper-location">Me → You : 315 km 📍</div>
                    <div className="paper-more">Tap more</div>
                    {paperStep === 'stretch' && (
                      <div
                        className="paper-stretch-handle"
                        onMouseDown={(event) => startStretch(event.clientY)}
                        onTouchStart={(event) => startStretch(event.touches[0]?.clientY ?? 0)}
                      >
                        Stretch the paper fully to reveal your gift 🎁
                      </div>
                    )}
                  </div>
                )}

                {paperStep === 'reveal' && (
                  <button className="ring-reveal" type="button" onClick={handleRingClick}>
                    <span className="ring-glow" />
                    <span className="ring-sparkle ring-sparkle-1" />
                    <span className="ring-sparkle ring-sparkle-2" />
                    <img className="ring-image" src={ringImage} alt="Ring" />
                    <span className="ring-caption">Tap on ring</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
