import { useState } from "react";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

import "./RollDice.css";

const sides = [
  <FaDiceOne />,
  <FaDiceTwo />,
  <FaDiceThree />,
  <FaDiceFour />,
  <FaDiceFive />,
  <FaDiceSix />,
];
export default function RollDice() {
  const [die1, setDie1] = useState(sides[0]);
  const [die2, setDie2] = useState(sides[0]);

  function roll() {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);
  }

  return (
    <div className="dice-container">
      <h2>Dice is rolling</h2>
      <div className="dice">
        <div className="die">{die1}</div>
        <div className="die">{die2}</div>
      </div>
      <button onClick={roll}>Roll Dice!</button>
    </div>
  );
}
