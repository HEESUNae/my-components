import React from 'react';
import './App.css';
import {Select} from "./select";
import {Button} from "./button";
import {Input} from "./input";

function App() {
    const options = ['안녕', '반가워', '오늘은목요일']; // 셀렉트 리스트
    const onClick = () => {
        console.log('click!!')
    }
    const onChange = (e:any) => {
        console.log('change@@', e.target.value)
    }
    return (
    <div className="App">
      {/*<Select options={options} selectedOpt={options[1]} />*/}
      {/*<Button type={'submit'} onClick={onClick} className={'btn'} disabled>버튼</Button>*/}
      {/*<Input placeholder={'test'} defaultValue={'123'} regex={/^[0-9]*$/} errorMsg={'숫자아님'} maxLength={5} onClick={onClick} onChange={onChange}/>*/}
    </div>
  );
}

export default App;
