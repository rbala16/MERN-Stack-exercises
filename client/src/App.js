import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from "./pages/";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className="pages">
      <Routes>
        <Route
        path='/'
        element={<HomePage/>}
        />
      </Routes>
    </div>
</BrowserRouter>
    </div>
  );
}

export default App;
