// src/components/VideoBackground.tsx
import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const VideoBackground: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      overflow="hidden"
      position="relative"
      className="responsive-media"
      backgroundColor={'black'}
    >
      <ReactPlayer
        className="responsive-media"
        url="src/main.mp4" // Replace with the actual path to your video file
        playing
        loop
        muted
        width="100vw" // Updated to cover the entire viewport width
        height="100vh" // Updated to cover the entire viewport height
        style={{ objectFit: 'fill' }}
      />

      <Text
        zIndex={'100'}
        color="white"
        position={'absolute'}
        top="60%"
        width={'40vw'}
        justifyContent={'center'}
        alignContent={'center'}
        align={'center'}
        justifySelf={'center'}
        justifyItems={'center'}
        display="flex"
        fontSize="2.5vw"
        fontFamily={'Georgia, serif'}
      >
        Building a more connected, sophisticated and better world by digital
        methods
      </Text>
    </Flex>
  );
};

export default VideoBackground;
