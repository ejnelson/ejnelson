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
      <span>
        You are the best Mom in the world! I think that you should know should
        be reaffirmed of that every day, even if I don't remember to tell you.
        So, now, everyday you are required to come here and press this button to
        see some of the the words I think describe you.
      </span>
      <button
        style={{
          border: "1px solid black",
          backgroundColor: "transparent",
          zIndex: 100,
          margin: "10px 40px",
        }}
        onClick={toggleWords}
      >
        click to toggle words
      </button>
      <span>
        Also, in lieu of a gift, I planned some stuff for an upcoming important
        date!...
      </span>
    </div>
  )
}

const Schedule = ({ toggleWords, onClick }) => {
  // useEffect(() => {
  //   toggleWords(false)
  // }, [])
  return (
    <div className="message">
      <h2 onClick={onClick}>Anniversary Schedule</h2>
      <h4>Saturday 8/8:</h4>
      <div className="event">
        <span>Drop kids off at your parents</span>
        <span>4:30pm</span>
      </div>
      <div className="event">
        <span>
          Check into{" "}
          <a href="https://www.intercontinentalstp.com/">
            InterContinental Hotel
          </a>{" "}
          in St. Paul
        </span>
        <span>5:00pm</span>
      </div>
      <div className="event">
        <span>
          Pick up take out from <a href="cosettas.com">Cosetta's eatery</a>
        </span>
        <span>6:00pm</span>
      </div>
      <div className="event">
        <span>
          Eat dinner at nearby{" "}
          <a href="https://www.stpaul.gov/departments/parks-recreation/harriet-island/raspberry-island">
            Raspberry Island Park
          </a>{" "}
          or{" "}
          <a href="https://www.stpaul.gov/facilities/irvine-park">
            Irvine Park
          </a>
        </span>
        <span>6:30pm</span>
      </div>
      <div className="event">
        <span>
          Curbside pickup icecream from
          <a href="https://icecreampizzaroseville.com/wp-content/uploads/2020/05/Curbside-Menu-Grand-1.pdf">
            Grand Ole Creamery
          </a>
        </span>
        <span>8:30pm</span>
      </div>
      <div className="event">
        <span>Back to the hotel!</span>
        <span>9:30pm</span>
      </div>
      <h4>Sunday 8/9:</h4>
      <div className="event">
        <span>
          Breakfast in bed courtesy of room service or{" "}
          <a href="http://citizensaintpaul.com/index.php/breakfast-menu/#1505587621394-0d490114-c3da">
            Citizen restaurant (located adjacent to hotel)
          </a>
        </span>
        <span>7:00am</span>
      </div>
      <div className="event">
        <span>A walk along the river in downtown St. Paul</span>
        <span>8:30pm</span>
      </div>
      <div className="event">
        <span>Donuts and coffee at Keg and Case</span>
        <span>10:30am</span>
      </div>
      <div className="event">
        <span>Pick up the boys</span>
        <span>11:00am</span>
      </div>
    </div>
  )
}

const Christa = () => {
  const [step, setStep] = useState(2)
  const [renderedClass, setRenderedClass] = useState("hidden")
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [showTips, setShowTips] = useState(false)

  useEffect(() => {
    setRenderedClass("visible")
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
    }, 5000)
  }, renderedClass)

  const handleClick = () => {
    if (step < Object.values(steps).length) transitionToStep(step + 1)
    else transitionToStep(1)
  }

  const transitionToStep = step => {
    setShowTips(false)
    setRenderedClass("hidden")
    setIsButtonVisible(false)
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
    [3]: Schedule,
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
      {isButtonVisible && (
        <div className={`proceedContainer fadein`}>
          <button className={"proceed"} onClick={handleClick}>
            click to proceed
          </button>
        </div>
      )}
    </BirthdayWrapper>
  )
}

export default Christa
