import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
`;

const LoadingText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
`;

const blurAnimation = keyframes`
  0% {
    filter: blur(0px);
  }
  100% {
    filter: blur(4px);
  }
`;

const LoadingSpan = styled.span`
  display: inline-block;
  margin: 0 5px;
  color: #fff;
  font-family: "Quattrocento Sans", sans-serif;
  animation: ${blurAnimation} 1.5s infinite linear alternate;
  animation-delay: ${props => props.delay};
`;

const Loading = () => (
  <LoadingContainer className="loading">
    <LoadingText className="loading-text">
      <LoadingSpan delay="0s">L</LoadingSpan>
      <LoadingSpan delay="0.2s">O</LoadingSpan>
      <LoadingSpan delay="0.4s">A</LoadingSpan>
      <LoadingSpan delay="0.6s">D</LoadingSpan>
      <LoadingSpan delay="0.8s">I</LoadingSpan>
      <LoadingSpan delay="1s">N</LoadingSpan>
      <LoadingSpan delay="1.2s">G</LoadingSpan>
    </LoadingText>
  </LoadingContainer>
);

export default Loading;
