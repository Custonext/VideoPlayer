import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

// data-title="Video Title" 
// data-description="Video Description"
// data-thumbnail=""
// data-video="" 
// data-color="red">

const WidgetDivs = document.querySelectorAll('.cnxt-video-player');
{/** if(WidgetDivs.length === 0) {
  console.log('No Widget Divs found, create demo div');
  const demoDiv = document.createElement('div');
  
  demoDiv.setAttribute('data-title', 'Video Title Demo');
  demoDiv.setAttribute('data-thumbnail', 'https://lp.custonext.nl/hubfs/Benchmark.jpeg');
  demoDiv.setAttribute('data-video', 'https://lp.custonext.nl/hubfs/Videos/Webinar%20DISC%20en%20marketing.mp4');
  demoDiv.setAttribute('data-color', 'purple.300');
  const container = document.getElementById('root');
  const root = createRoot(container);
  console.log(root);
  root.render(
    <React.StrictMode>
     
        <App divElement={demoDiv}/>
    
    </React.StrictMode>
    
  )

} else {
*/}  
WidgetDivs.forEach(divElement => {
    const root = createRoot(divElement);
    root.render(
      <React.StrictMode>
        <App divElement={divElement}  />
      </React.StrictMode>
    );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
