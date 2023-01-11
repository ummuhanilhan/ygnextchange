import PrivateLayout from "@layouts/PrivateLayout";
import React, { useState } from "react";
import Smile from "../../public/assets/feedback/smile.svg";
import Wink from "../../public/assets/feedback/wink.svg";
import HeartEyes from "../../public/assets/feedback/heart-eyes.svg";
import Frown from "../../public/assets/feedback/frown.svg";
import Neutral from "../../public/assets/feedback/neutral.svg";

export const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = (e: any) => {
    setClick(true);

    if (e.target.id === "frown") {
      setFeedback("frown");
    } else if (e.target.id === "neutral") {
      setFeedback("neutral");
    } else if (e.target.id === "smile") {
      setFeedback("smile");
    } else if (e.target.id === "wink") {
      setFeedback("wink");
    } else if (e.target.id === "heart-eyes") {
      setFeedback("heart-eyes");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl">Feedback</h1>
      <div className="flex flex-row items-center justify-center mt-5 w-96 h-50 bg-white ">
        <button className=" px-4 py-2 rounded-md mr-2">
          <Frown />
        </button>
        <button className=" px-4 py-2 rounded-md mr-2">
          <Neutral />
        </button>
        <button className=" px-4 py-2 rounded-md mr-2">
          <Smile />
        </button>
        <button className=" px-4 py-2 rounded-md mr-2">
          <Wink />
        </button>
        <button className=" px-4 py-2 rounded-md mr-2">
          <HeartEyes />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 bg-white ">
        <textarea className="w-96 h-96" />
        <button className=" px-4 py-2 rounded-md mr-2 mt-5 bg-blue-500 text-white">
          Send
        </button>
      </div>
    </div>
  );
};

Feedback.Layout = PrivateLayout;

export default Feedback;
