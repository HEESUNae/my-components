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
import {ConfirmModal} from "./confirmModal";
import {ToastModal} from "./toastModal";

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
            <div>
                <h2>Select</h2>
                <Select options={options} selectedOpt={options[1]}/>
            </div>
            <div>
                <h2>Button</h2>
                <Button type={'submit'} className={`btn-fill`} onClick={onClick}>버튼</Button>
            </div>
            <div>
                <h2>Input</h2>
                <Input placeholder={'test'} defaultValue={'123'} regex={/^[0-9]*$/} errorMsg={'숫자아님'} maxLength={5}
                       onClick={onClick} onChange={onChange} className={`basic-input`}/>
            </div>
            <div>
                <h2>Checkbox</h2>
                <Checkbox label={'체크여부'} checked/>
                <Checkbox label={'체크여부'}/>
                <Checkbox label={'체크여부'} checked disabled/>
            </div>
            <div>
                <h2>Radio</h2>
                <Radio name='1' options={options}/>
            </div>
            <div>
                <h2>Badge</h2>
                <Badge className={'badge-fill'}>뱃지</Badge>
            </div>
            <div>
                <h2>Textarea</h2>
                <Textarea placeholder={'내용을 입력해주세요'} maxLength={20}/>
            </div>
            <div>
                <h2>Accordion</h2>
                <Accordion options={options1} openTabs={[0]}/>
            </div>
            <div>
                <h2>Modal</h2>
                <ConfirmModal title={'모달 타이틀'} content={'모달 내용'} className={`basic-modal`}>
                    <Button className={`btn-fill`}>모달을 열어주세요</Button>
                </ConfirmModal>
            </div>

            <div>
                <h2>ToastModal</h2>
                <ToastModal content={'모달 내용'} className={`basic-modal`}>
                    <Button className={`btn-fill`}>토스트 모달을 열어주세요</Button>
                </ToastModal>
            </div>


        </div>
    )
}

export default App;
