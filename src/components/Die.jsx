import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

const faces = {
  one: <FaDiceOne />,
  two: <FaDiceTwo />,
  three: <FaDiceThree />,
  four: <FaDiceFour />,
  five: <FaDiceFive />,
  six: <FaDiceSix />,
};

export default function Die({ face }) {
  return <div className="die">{faces[face]}</div>;
}
