import styled from "styled-components";

const LoaderSpin = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #aaacaf;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(170, 172, 175, 0) 45deg,
    #aaacaf 360deg
  );
  position: absolute;
  top: 10px;
  left: 65px;
  animation: load3 1.4s infinite linear;
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &::after {
    background: #fff;
    width: 66%;
    height: 66%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderSpin;
