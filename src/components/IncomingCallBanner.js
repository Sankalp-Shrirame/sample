// import React, { useState } from "react";

// const IncomigCallBanner = ({cust_obj}) => {
//     const [action, setAction] = useState("stop");

//     const answerIncomingCall =() => {
//         setAction(action === "stop" ? "start" : "stop");
//     }

//     return(
//         <div>
//             <button onClick={() => answerIncomingCall()}>Answer</button>
//         </div>
//     )
// }

// export default IncomigCallBanner;

import React, { useState } from "react";

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
