import React, {useState} from "react";
import './style.css'

interface RadioProps {
    name: string;
    options: string[];
}

/**
 * 기본 라디오 컴포넌트
 * @param options 라디오 옵션 배열
 * @param name 라디오 묶음을 구분하는 이름
 * @param rest 그 외의 옵션들
 * @constructor
 */

export function Radio({ options, name, ...rest }: RadioProps){
    const [selectedOption, setSelectedOption] = useState<string>(options[0]); // 체크된 라디오 옵션값

    // 선택된 라디오 옵션값으로 업데이트
    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div className={'hs-radio-container'}>
            {options?.map((label:string, idx:number)=> (
                <div key={idx}>
                    <input type='radio' id={`${name}${idx}`} name={name} value={label} onChange={handleOptionChange} defaultChecked={selectedOption === label} {...rest}/>
                    <label htmlFor={`${name}${idx}`}>
                        {label === selectedOption ? <CheckOnIcon/> : <CheckOffIcon/>}
                        {label && <p>{label}</p>}
                    </label>
                </div>
            ))}
        </div>
    )
}

// 라디오 off 예시 아이콘
function CheckOffIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
            <path
                d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    )
}
// 라디오 on 예시 아이콘
function CheckOnIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
            <path
                d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
        </svg>
    )
}
