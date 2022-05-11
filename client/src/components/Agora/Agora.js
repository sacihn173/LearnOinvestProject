import classes from "./Agora.module.css";
import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

const Agora = () => {
  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: "d6926d1dcdb843ea956bde272e7d4f8a",
    channel: "channel123", // your agora channel
    // token: '<Your channel Token>' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div
      className={classes.agora}
      style={{
        display: "flex",
        width: "90%",
        height: "90%",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <>
      <h1 className={classes.startcall} onClick={() => setVideoCall(true)}>
        Start Stream
      </h1>
      <h1 className={classes.startcall} onClick={() => setVideoCall(true)}>
        Join Stream
      </h1>
    </>
  );
};

export default Agora;
