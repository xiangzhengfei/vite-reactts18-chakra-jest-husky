import { motion } from 'framer-motion';
import { useState } from 'react';
import './video.css';

import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Link,
  Switch,
  Text,
} from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';
import logo from './logo.svg';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import ReactPlayer from 'react-player';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from './components/Introduction';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const handle = useFullScreenHandle();

  return (
    <ChakraProvider>
      <VideoBackground />

      <Router>
        <Header />
        {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Router>
      <Introduction></Introduction>
    </ChakraProvider>
  );
}

export default App;
