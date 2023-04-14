import React, { useState } from "react";
import styled from "styled-components";
import { videoIndexAtom } from "../hooks/store";
import { useAtomValue } from "jotai";

const VideoContainer = styled.div`
  position: relative;
  /* width: 50rem;
  height: 50rem; */
  width: 40rem;
  height: 40rem;
  margin-top: 10%;
   /* Mobile styles */
   @media only screen and (max-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
  /* Tablet styles */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }
`;

const Container = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
`

const Video = styled.video`
  object-fit: cover;
  border: 1px solid black;
  height: ${props => props.height ? "30rem" : "auto"};
  width: ${props => props.height ? "40rem" : "auto"};
  /* Hide default controls */
  &::-webkit-media-controls {
    display: none !important;
  }
  &::-webkit-media-controls-panel {
    display: none !important;
  }
  &::-webkit-media-controls-play-button {
    display: none !important;
  }
  /* Show controls on hover */
  &:hover::-webkit-media-controls {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }
  &:hover::-webkit-media-controls-panel {
    display: flex !important;
  }
  &:hover::-webkit-media-controls-play-button {
    display: flex !important;
  }
`;

function VideoPlayer() {
  const [isHovering, setIsHovering] = useState(false);
  const videoIndex = useAtomValue(videoIndexAtom);

  const toggleHovering = () => {
    setIsHovering(!isHovering);
  };

  return (
    <Container>
    <VideoContainer onMouseEnter={toggleHovering} onMouseLeave={toggleHovering}>
      <Video
        src={videoIndex === 0 && require("../image/whyChooseUs/CHAT.mp4") || videoIndex === 1 && require("../image/whyChooseUs/ONBOARDING.mp4") || videoIndex === 2 && require("../image/whyChooseUs/PAYROLL.mp4") || videoIndex === 3 && require("../image/whyChooseUs/COMPLIANCE.mp4")}
        autoPlay
        muted
        loop
        controls
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        videoIndexCount = {videoIndex}
        height={videoIndex === 0 ? "20rem": "100%"}
        width={videoIndex === 0 ? "20rem": "100%"}
      />
      </VideoContainer>
    </Container>
  );
}

export default VideoPlayer;
