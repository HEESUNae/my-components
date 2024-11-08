import React from 'react';
import './App.css';
import {Select} from "./select";

function App() {
    const options = ['안녕', '반가워', '오늘은목요일']; // 셀렉트 리스트
    return (
    <div className="App">
      {/*<Select options={options} selectedOpt={options[1]} />*/}
    </div>
  );
}

export default App;
