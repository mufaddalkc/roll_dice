import { useState } from "react";
import Die from "./Die";

import "./RollDice.css";

const sides = ["one", "two", "three", "four", "five", "six"];

export default function RollDice() {
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");

  function roll() {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);
  }

  return (
    <div className="dice-container">
      <h2>Roll Dice</h2>
      <div className="dice">
        <Die face={die1} />
        <Die face={die2} />
      </div>
      <button onClick={roll}>Roll Dice!</button>
    </div>
  );
}
