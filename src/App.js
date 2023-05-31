import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import MainRoutes from './Route/MainRoutes';
function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <MainRoutes search={search} setSearch={setSearch}>
        
      </MainRoutes>
    </div>
  );
}

export default App;
