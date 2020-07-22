import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import "./layout.css"

const listOfWords = [
  "HOT",
  "BRAVE",
  "LOVING",
  "SEXY",
  "STRONG",
  "SMART",
  "STRONG WILLED",
  "PREPARED",
  "BLESSED",
  "FORGIVING",
  "BEAUTIFUL",
  "CAPABLE",
  "WORTHY",
  "INSPIRING",
  "KIND",
  "QUALIFIED",
  "PERSERVERANT",
  "PERFECT",
]
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  background: #c0392b;
  background-image: radial-gradient(#e67e22, #e74c3c);
`
const WIN_WIDTH = window.innerWidth
const WIN_HEIGHT = window.innerHeight
const Hearts = ({ showTips }) => {
  const [positions, setPositions] = useState({})
  console.log("show tips?", showTips)
  useEffect(() => {
    let positions = {}
    for (let i = 1; i < 33; i++) {
      positions[i] = {
        x: `${Math.random() * WIN_WIDTH}px`,
        y: `${Math.random() * WIN_HEIGHT}px`,
        word: listOfWords[Math.round(Math.random() * listOfWords.length - 1)],
      }
    }
    setPositions(positions)
  }, [])
  console.log("pos", positions)
  return (
    <>
      {Object.keys(positions).map(key => {
        return (
          <div
            className="heartAndEncouragement"
            key={key}
            style={{
              position: "absolute",
              display: "flex",
              top: positions[key] && positions[key].y,
              left: positions[key] && positions[key].x,
              width: "75px",
              height: "20px",
              justifyContent: "center",
              animationDelay: `${key * 0.03}s`,
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span
              style={{ animationDelay: `${key * 0.03}s` }}
              className={showTips ? "encouragementOn" : "encouragementOff"}
            >
              {positions[key].word}
            </span>
          </div>
        )
      })}
    </>
  )
}
const BirthdayWrapper = ({ children, className, showTips }) => {
  return (
    <CenterContainer>
      <Hearts showTips={showTips} />
      <div className={className}>{children}</div>
    </CenterContainer>
  )
}

BirthdayWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BirthdayWrapper
