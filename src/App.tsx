import React from 'react';
import './App.css';
import {Select} from "./select";
import {Button} from "./button";
import {Input} from "./input";
import {Checkbox} from "./checkbox";
import {Radio} from "./radio";
import {Badge} from "./badge";
import {Textarea} from "./textarea";
import {Accordion} from "./accordion";

function App() {
    const options = ['안녕', '반가워', '오늘은목요일']; // 셀렉트 리스트
    const onClick = () => {
        console.log('click!!')
    }
    const onChange = (e:any) => {
        console.log('change@@', e.target.value)
    }
    const options1 = [
        {
            menu: '메뉴1',
            content: '내용1'
        },
        {
            menu: '메뉴2',
            content: '내용2'
        },
        {
            menu: '메뉴3',
            content: '내용3'
        }
    ]
    return (
    <div className="App">
      {/*<Select options={options} selectedOpt={options[1]} />*/}
      {/*<Button type={'submit'} onClick={onClick}>버튼</Button>*/}
      {/*<Input placeholder={'test'} defaultValue={'123'} regex={/^[0-9]*$/} errorMsg={'숫자아님'} maxLength={5} onClick={onClick} onChange={onChange}/>*/}
      {/*<Checkbox label={'체크여부'} checked disabled/>*/}

      {/*<Radio name='1' options={options}/>*/}
      {/*<Badge variant={'outline'}>뱃지</Badge>*/}
      {/*<Textarea placeholder={'내용을 입력해주세요'} maxLength={20}/>*/}
      {/*<Accordion options={options1} openTabs={[0,2]}/>*/}
    </div>
  );
}

export default App;
