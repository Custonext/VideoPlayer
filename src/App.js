import * as React from 'react'
import {VideoPlayer} from "./components/VideoPlayer";
import { Box } from '@chakra-ui/react'



export default function App({divElement}) {
  
  
  return (
   
      <Box fontFamily={'sans-serif'}>
      <VideoPlayer {...divElement.dataset} />
      </Box>
   
  );
}