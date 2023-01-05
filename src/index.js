import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import createCache from "@emotion/cache";
import { CacheProvider } from '@emotion/react';
import {  ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = {
 fonts:{
    heading: `sans-serif`,
    body: `sans-serif`,
  },
  shadows:{
    outline: 0
  },
};
const CustonextTheme = extendTheme(theme);
// data-title="Video Title" 
// data-description="Video Description"
// data-thumbnail=""
// data-video="" 
// data-color="red">

const WidgetDivs = document.querySelectorAll('.cnxt-video-player');
if(WidgetDivs.length === 0) {
  console.log('No Widget Divs found, create demo div');
  const demoDiv = document.createElement('div');
  
  demoDiv.setAttribute('data-title', 'Video Title Demo');
  demoDiv.setAttribute('data-thumbnail', 'https://lp.custonext.nl/hubfs/Benchmark.jpeg');
  demoDiv.setAttribute('data-video', 'https://lp.custonext.nl/hubfs/Videos/Webinar%20DISC%20en%20marketing.mp4');
  demoDiv.setAttribute('data-color', 'orange');
  demoDiv.setAttribute('data-radius', 'xl');
  demoDiv.setAttribute('data-shadow', 'xl');
  demoDiv.setAttribute('data-ratio', 'square');
  const container = document.getElementById('root');

  const shadowRoot = container.attachShadow({ mode: "open" });
  const myCache = createCache({
    // @ts-ignore
    container: shadowRoot,
    key: "c",
  });
  const root = createRoot(shadowRoot);

  root.render(
    <React.StrictMode>
      <CacheProvider value={myCache}>
        <ChakraProvider theme={CustonextTheme}>
          <App divElement={demoDiv}/>
        </ChakraProvider>
      </CacheProvider>        
    </React.StrictMode>
    
  )

} else {

WidgetDivs.forEach(divElement => {
  const shadowRoot = divElement.attachShadow({ mode: "open" });
  const myCache = createCache({
    // @ts-ignore
    container: shadowRoot,
    key: "c",
  });
  const root = createRoot(shadowRoot);

    root.render(
      <React.StrictMode>
      <CacheProvider value={myCache}>
        <ChakraProvider theme={CustonextTheme}>
          <App divElement={divElement}/>
        </ChakraProvider>
      </CacheProvider>        
    </React.StrictMode>
    );
})
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
