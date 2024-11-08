import React, {useEffect, useRef, useState} from 'react';
import './style.css'

export interface SelectProps {
    options: any;
    selectedOpt?: any;
}

/**
 * 기본 셀렉트 컴포넌트
 * @param options 셀렉트 옵션 배열
 * @param selectedOpt 디폴트로 설정될 옵션값
 * @constructor
 */

export function Select({options, selectedOpt = options[0]}: SelectProps) {
    const [selectedOption, setSelectedOption] = useState(selectedOpt); // 선택된 옵션
    const [isOptVisible, setIsOptVisible] = useState<boolean>(false); // 옵션 여부
    const selectRef= useRef<HTMLDivElement | null>(null);

    // 셀렉트를 열고 닫음
    const handleOpenSelect = () => {
        setIsOptVisible(prev => !prev)
    }

    // 선택된 옵션 값으로 업데이트
    const handleSelectedValue = (opt:string) => {
        setSelectedOption(opt)
        setIsOptVisible(false)
    }

    // 셀렉트가 아닌 곳을 클릭하면 셀렉트 옵션이 열려있는 경우 닫음
    const handleCloseSelect: EventListener = (e) => {
        if(!selectRef.current?.contains(e.target as Node)){
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
            <div className={'hs-select-selected'} onClick={handleOpenSelect}>
                <p>{selectedOption}</p>
                <div className={`hs-arrow-icon ${!isOptVisible && "rotate"}`}>
                    <ArrowIcon/>
                </div>
            </div>
            <ul className={`hs-select-options ${!isOptVisible && "open"}`}>
                {options.map((option: string) => (
                    <li key={option} onClick={()=>handleSelectedValue(option)} className={`${selectedOption === option && 'selected'}`}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};


// 셀렉트 화살표 아이콘 컴포넌트
function ArrowIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ccc">
            <path
                d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
        </svg>
    )
}