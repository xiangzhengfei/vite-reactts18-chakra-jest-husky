// src/components/VideoBackground.tsx
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import CustomText from '../utils/CustomText';

const Introduction: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="80vh"
      overflow="hidden"
      position="relative"
      //className="responsive-media"
      backgroundColor={'black'}
    >
      <Box
        zIndex={'10'}
        color="white"
        position={'absolute'}
        top="10%"
        width={'70vw'}
        justifyContent={'center'}
        alignContent={'center'}
        justifySelf={'center'}
        justifyItems={'center'}
        display="flex"
        fontSize="2vw"
        fontFamily={'Georgia, serif'}
      >
        <Text>
          Zhengfei is a Software Engineering Analyst at McKinsey & Company in
          the New York office. He obtained his M.S. in Computer Information
          Science degree at Cornell Tech, Cornell University. Zhengfei has a
          great enthusiasm for digital products, he is a solid full-stack
          software developer, an excellent engineer with sharp product sense,
          and also a great team player. His past experience includes working as
          a Software Engineer Intern at Meta(Facebook), BMW China, as a
          Technical Product Manager intern at Tencent Company Timi-Studio, and
          as a Part-Time Assistant at Bain & Company.
        </Text>
      </Box>
    </Flex>
  );
};

export default Introduction;
