import * as React from 'react'
import {VideoPlayer} from "./components/VideoPlayer";
import { Box } from '@chakra-ui/react'



export default function App({divElement}) {
  const radius = divElement.dataset.radius || 'md';
  const shadow = divElement.dataset.shadow || 'none';

  return (
   
      <Box fontFamily={'sans-serif'} rounded={radius} boxShadow={shadow} overflow={'hidden'}>
        <VideoPlayer {...divElement.dataset} />
      </Box>
   
  );
}