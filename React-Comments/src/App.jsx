import './App.css';
import Comments from './Components/Comments';
import { Data } from './data/Data';

function App() {
  return (
    <div className="App">
      <Comments data={Data}/>
    </div>
  );
}

export default App;