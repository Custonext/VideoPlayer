import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';


const WidgetDivs = document.querySelectorAll('.hubspot-form');
console.log(WidgetDivs);
if(WidgetDivs.length === 0) {
  console.log('No Widget Divs found, create demo div');
  const demoDiv = document.createElement('div');
  demoDiv.setAttribute('data-form-id', 'c487177d-28e1-4c41-825e-166ebf528800');
  demoDiv.setAttribute('data-portal-id', '25053756');
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
     
        <App divElement={demoDiv}/>
    
    </React.StrictMode>
    
  )

} else {
  WidgetDivs.forEach(divElement => {
    console.log(divElement);
    const root = createRoot(divElement);
    root.render(
      <React.StrictMode>
        <App divElement={divElement}  />
      </React.StrictMode>
    );
})
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
