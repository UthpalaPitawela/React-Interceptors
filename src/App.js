import logo from './logo.svg';
import './App.css';
import { ViewCatsAxios } from './components/viewCatsAxios/viewCatsAxios';

function App() {
  return (
    <div className="App">
      <h1> Cats Images</h1>
      <ViewCatsAxios/>
    </div>
  );
}

export default App;
