import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';


const WidgetDivs = document.querySelectorAll('.hubspot-form');
console.log(WidgetDivs);
WidgetDivs.forEach(divElement => {
  console.log(divElement);
  const root = createRoot(divElement);
  root.render(
    <React.StrictMode>
      <App divElement={divElement}  />
    </React.StrictMode>
  );
})
if(WidgetDivs.length === 0){
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App divElement={'thisitem'}/>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
