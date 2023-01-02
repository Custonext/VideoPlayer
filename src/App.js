import * as React from 'react'
import {VideoPlayer} from "./components/VideoPlayer";
import "./styles.css";

import { ChakraProvider, extendTheme, useTheme } from '@chakra-ui/react'

const theme = {
  fonts:{
    heading: 'system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    body: 'system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
  shadows:{
    outline: 0
  },
};
const CustonextTheme = extendTheme(theme);

export default function App({divElement}) {
  
  
  return (
    <ChakraProvider theme={CustonextTheme}>
      <VideoPlayer {...divElement.dataset} />
    </ChakraProvider>
  );
}