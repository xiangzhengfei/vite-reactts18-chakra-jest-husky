import React, { useState } from 'react';
import {
  Image,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Box,
} from '@chakra-ui/react';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openPDF = () => {
    const pdfPath = 'src/resume.pdf';
    window.open(pdfPath, '_blank');
  };

  return (
    <Flex
      display={'flex'}
      flexDir={'row'}
      justify={'space-between'}
      width={'100%'}
      align="center"
      paddingX={4}
      paddingY={2}
      color="white"
      zIndex={1}
      position="absolute"
      left={'10px'}
      top={'10px'}
    >
      <Box>
        <Image src="src/logo.png" boxSize={'40%'} />
      </Box>

      <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
        <Button variant="ghost" mx={2} onClick={openPDF}>
          Download CV
        </Button>
        <Button variant="ghost" mx={2} as="a" href={'mailto:zx73@cornell.edu'}>
          Contact
        </Button>
      </Flex>

      <Flex display={{ base: 'flex', md: 'none' }}>
        <Image src="src/menu-1.png" onClick={onOpen} boxSize={'45%'} />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Button variant="ghost" width="100%" mb={2} onClick={openPDF}>
              Download CV
            </Button>
            <Button
              variant="ghost"
              width="100%"
              mb={2}
              as="a"
              href={'mailto:zx73@cornell.edu'}
            >
              Contact
            </Button>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
