import React, { useState, useEffect } from "react"
import BirthdayWrapper from "../components/birthdayWrapper"
import "./32.scss"

const HappyBirthday = ({ onClick }) => {
  return (
    <h1 onClick={onClick}>
      <span>H</span>
      <span>a</span>
      <span>p</span>
      <span>p</span>
      <span>y</span>
      <span> </span>
      <span>B</span>
      <span>i</span>
      <span>r</span>
      <span>t</span>
      <span>h</span>
      <span>d</span>
      <span>a</span>
      <span>y</span>
    </h1>
  )
}

const Message = ({ toggleWords, onClick }) => {
  return (
    <div className="message">
      <h2 onClick={onClick}>I LOVE YOU CHRISTA</h2>
      <span>
        I know I couldn't wake you up on your birthday and tell you how
        beautiful I think you are and give you a big kiss, so I wanted to at
        least give you a little surprise!
      </span>
      <br></br>
      <span>You are the best Mom in the world!</span>
      <button
        style={{ border: "1px solid black", zIndex: 100 }}
        onClick={toggleWords}
      >
        click to toggle words
      </button>
    </div>
  )
}

const Christa = () => {
  const [step, setStep] = useState(1)
  const [renderedClass, setRenderedClass] = useState("hidden")
  const [showTips, setShowTips] = useState(false)

  useEffect(() => {
    setRenderedClass("visible")
  }, [])

  const handleClick = () => {
    if (step < Object.values(steps).length) transitionToStep(step + 1)
    else transitionToStep(1)
  }

  const transitionToStep = step => {
    setRenderedClass("hidden")
    setTimeout(() => {
      setStep(step)
    }, 1000)
    setTimeout(() => {
      setRenderedClass("visible")
    }, 1100)
  }

  const steps = {
    [1]: HappyBirthday,
    [2]: Message,
    // [3]: Schedule,
  }
  const handleToggleWords = () => {
    console.log("TOGGLED")
    setShowTips(!showTips)
  }
  const RenderedComponent = steps[step]
  return (
    <BirthdayWrapper
      onClick={handleClick}
      className={renderedClass}
      showTips={showTips}
    >
      <RenderedComponent
        toggleWords={handleToggleWords}
        onClick={handleClick}
      />
    </BirthdayWrapper>
  )
}

export default Christa
