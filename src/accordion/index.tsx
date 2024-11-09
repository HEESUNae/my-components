import React, {useState} from "react";
import './style.css';

type AccordionOptionType = {menu: string; content: string}

interface AccordionProps {
    options: AccordionOptionType[];
    openTabs?: number[];
}

/**
 * 기본 아코디언 컴포넌트
 * @param options 메뉴와 컨텐츠 배열
 * @param openTabs 디폴트로 열어놓을 idx 배열
 * @constructor
 */

export function Accordion({options, openTabs}:AccordionProps){
    const [selectedTabs, setSelectedTabs] = useState<number[]>(openTabs ? [...openTabs!] : []); // 활성화 된 아코디언 배열

    // 선택된 아코디언의 활성화 여부를 반환
    const confirmIsSelected = (optionIdx: number):boolean => {
        return selectedTabs.some(item=>item === optionIdx)
    }

    // 선택된 아코디언이 열려있다면 닫고, 닫혀있다면 열기
    const handleToggle = (optionIdx: number) => {
        const openTabs:number[] = selectedTabs.filter((item: number)=> item !== optionIdx);
        setSelectedTabs(confirmIsSelected(optionIdx) ? openTabs : [...selectedTabs, optionIdx]);
    }

    return (
        <div className={`hs-accordion-container`}>
            <ul>
                {options.map((option:AccordionOptionType, optionIdx:number) => (
                    <li key={option.menu} className={`hs-accordion ${confirmIsSelected(optionIdx) && "open"}`}>
                        <div className={`hs-accordion-menu`} onClick={()=>handleToggle(optionIdx)}>
                            <p>{option.menu}</p>
                            <div className={`hs-accordion-icon`}><ArrowIcon/></div>
                        </div>
                        <div key={option.content} className={`hs-accordion-detail`}>
                            <div>{option.content}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// 아코디언 예시 화살표 아이콘
function ArrowIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ccc">
            <path
                d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
        </svg>
    )
}