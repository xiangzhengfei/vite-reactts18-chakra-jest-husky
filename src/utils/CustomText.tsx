import React from 'react';
import {
  Box,
  Link,
  Text,
  LinkProps,
  BoxProps,
  TextProps,
} from '@chakra-ui/react';

interface CustomTextProps {
  children?: any;
  backgroundColor?: string;
  hyperlink?: string;
  textProps?: TextProps;
  linkProps?: LinkProps;
  boxProps?: BoxProps;
}

const CustomText: React.FC<CustomTextProps> = ({
  backgroundColor,
  hyperlink,
  children,
  textProps,
  linkProps,
  boxProps,
}) => {
  return (
    <Box backgroundColor={backgroundColor} {...boxProps}>
      {hyperlink ? (
        <Link href={hyperlink} {...linkProps}>
          <Text {...textProps}>{children}</Text>
        </Link>
      ) : (
        <Text {...textProps}>{children}</Text>
      )}
    </Box>
  );
};

export default CustomText;
