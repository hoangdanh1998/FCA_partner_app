import React from "react";
import { Animated } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { COUNTDOWN_TIMER } from "../../../../src/constance/constance";

const CountdownTimer = (props) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={COUNTDOWN_TIMER}
      colors={[
        ["#004777", 0.4],
        ["#F7B801", 0.4],
        ["#A30000", 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
