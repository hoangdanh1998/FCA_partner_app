import React from "react";
import { Animated } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { COUNTDOWN_TIMER } from "../../../../src/constance/constance";

const CountdownTimer = (props) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={COUNTDOWN_TIMER}
      size={80}
      strokeWidth={5}
      colors={[
        ["#82B366", 0.4],
        ["#F7B801", 0.4],
        ["#B85450", 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize:30 }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
