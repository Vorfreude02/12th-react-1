import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Clock() {
  useEffect(() => {
    getClock();
    const intervalId = setInterval(getClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTime({ hours, minutes, seconds });
  };
  return (
    <ClockContainer>
      {time.hours}:{time.minutes}:{time.seconds}
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.h2`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 110px;
  font-family: "CabinetGrotesk-regular";
`;
