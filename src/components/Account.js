// import { useState,useEffect } from "react"
// import IncomigCallBanner from "./IncomingCallBanner";

// const Account = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         let interval = null;

//         if(action === "start"){
//             interval = setInterval(() => {
//                 setSeconds((seconds) => seconds+1);
//             },1000);
//         }else if(action === "start)" && seconds !== 0){
//             clearInterval(interval);
//         } else if (action === "stop"){
//             clearInterval(interval);
//             setSeconds(0);
//         }
//         return () => clearInterval(interval);
//     }, [action, seconds]);

//     return(
//         <div>
//             <IncomigCallBanner/>
//             <div>{new Date(seconds *1000).toISOString().substring(14, 19)}</div>
//         </div>
//     )
// }

// export default Account;

import React, { useState, useEffect } from "react";
import IncomigCallBanner from "./IncomingCallBanner";

const Account = () => {
  const [action, setAction] = useState("stop");
  const [seconds, setSeconds] = useState(0);

  const endCall = () => {
    setAction("stop");
  }

  useEffect(() => {
    let interval = null;

    if (action === "start") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (action === "stop" && seconds !== 0) {
      clearInterval(interval);
    } else if (action === "stop") {
      clearInterval(interval);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [action, seconds]);

  return (
    <div>
      <IncomigCallBanner action={action} setAction={setAction} />
      <div><button onClick={endCall}>End</button></div>
      <div>{new Date(seconds * 1000).toISOString().substring(14, 19)}</div>
    </div>
  );
};

export default Account;
