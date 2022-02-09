import logo from '../img/logo.svg';
import '../css/App.css';
import {
  Article,
  TextInput,
  Counter,
  ToggleButton
} from '../components/entryPoint';

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

      <TextInput />

      <Counter />

      <ToggleButton />
    </>
  )
}

export default App;
