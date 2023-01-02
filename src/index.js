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
