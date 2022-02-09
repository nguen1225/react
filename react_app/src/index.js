import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './function/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// --------------------------------------------------

// const name = '花子太郎';
// const hello = <h1>hello、{name}</h1>;

// ReactDOM.render(
//     hello,
//     document.getElementById('hello')
// );

// -------------------------------------------------




// -------------------------------------------------

// function formatName(user) {
//   return user.firstName + '' + user.lastName;
// }

// const user = {
//   firstName: '刹那',
//   lastName: '・F・セイエイ'
// };

// console.log(user);

// const element = (
//   <h1>
//     Hello,{formatName(user)}
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('name')
// )

// -------------------------------------------------


// -------------------------------------------------
function tick() {
  const element_tick = (
    <div>
      <h1>
        時計：[{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}]
      </h1>
    </div>
  );
  ReactDOM.render(
    element_tick,
    document.getElementById('tick')
  );
}
setInterval(tick, 1000);
// -------------------------------------------------


// -------------------------------------------------

// -------------------------------------------------

reportWebVitals();
