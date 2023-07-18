
import React from "react";

const IncomigCallBanner = ({ action, setAction }) => {
  const answerIncomingCall = () => {
    setAction( "start" );
  };

  return (
    <div>
      <button onClick={answerIncomingCall}>Answer</button>
    </div>
  );
};

export default IncomigCallBanner;
