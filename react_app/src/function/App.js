import logo from '../img/logo.svg';
import '../css/App.css';
import {Article} from '../components/entryPoint';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <p>
//           <strong>
//             なんとなく入れてみた
//           </strong>
//         </p>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Article 
        title = {'これはテスト'}
        content = {'テキストテキスト本文'}
      />

      <Article 
        title = {'再利用可能'}
        content = {'再利用もできる'}
      />
    </>
  )
}

export default App;
