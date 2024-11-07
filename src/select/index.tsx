import React, {useEffect, useRef, useState} from 'react';
import './style.css'

// 셀렉트 화살표 아이콘 컴포넌트
function ArrowIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ccc">
            <path
                d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
        </svg>
    )
}


interface SelectProps {
    // options: any;
}

export function Select({}: SelectProps) {
    const options = ['안녕', '반가워', '오늘은목요일']; // 셀렉트 리스트
    const [selectedOption, setSelectedOption] = useState(options[0]); // 선택된 옵션
    const [isOptVisible, setIsOptVisible] = useState(false); // 옵션 여부
    const selectRef= useRef<HTMLDivElement>(null);

    // 셀렉트를 열고 닫을 수 있습니다.
    const handleSelect = () => {
        setIsOptVisible(prev => !prev)
    }

    // 옵션을 선택한 값으로 업데이트 합니다.
    const handleSelected = (opt:string) => {
        setSelectedOption(opt)
        setIsOptVisible(false)
    }

    // 화면을 클릭하면 옵션이 열려있는 경우 닫힙니다.
    const handleCloseSelect = (e:any) => {
        if(!selectRef.current?.contains(e.target)){
            setIsOptVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('click',handleCloseSelect)
        return () => {
            window.removeEventListener('click',handleCloseSelect)
        }
    }, []);

    return (
        <div className={'hs-select-container'} ref={selectRef}>
            <div className={'hs-select-selected'} onClick={handleSelect}>
                <p>{selectedOption}</p>
                <div className={`hs-arrow-icon ${!isOptVisible && "down"}`}>
                    <ArrowIcon/>
                </div>
            </div>
            <ul className={`hs-select-options ${!isOptVisible && "hidden"}`}>
                {options.map((option: string) => (
                    <li key={option} onClick={()=>handleSelected(option)} className={`${selectedOption === option && 'selected'}`}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};
