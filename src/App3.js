import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<DayList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>                
          <Route path="/*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
