import './style.css';
import {useState} from "react";

type AccordionOptionType = {menu: string; content: string}

interface AccordionProps {
    options: AccordionOptionType[];
}

/**
 * 기본 아코디언 컴포넌트
 * @param options 메뉴와 컨텐츠 배열
 * @constructor
 */

//todo: 아코디언 화살표 이미지 넣기 (셀렉트 참고)
export function Accordion({options}:AccordionProps){
    const [selectedTab, setSelectedTab] = useState<number | null>(0); // 0번째 아코디언 활성화

    // 아코디언 열고 닫기
    const handleContentOpen = (selectTab: number) => {
        // 선택한 아코디언이 열려있다면 null, 아니라면 열어줌
        setSelectedTab(selectedTab === selectTab ? null :selectTab)
    }

    return (
        <div className={`hs-accordion-container`}>
            <ul>
                {options.map((option:AccordionOptionType, idx:number) => (
                    <div key={option.menu}>
                        <li className={`hs-accordion-menu`} onClick={()=>handleContentOpen(idx)}>{option.menu}</li>
                        <li key={option.content} className={`hs-accordion-content ${selectedTab === idx && "open"}`}>{option.content}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}