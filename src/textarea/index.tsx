import React, {useState} from "react";
import './style.css';


interface TextareaProps {
    placeholder?: string;
    maxLength?: number;
}

/**
 * 기본 텍스트아리아 컴포넌트
 * @param placeholder placeholder 문구
 * @param maxLength 최대 입력 가능한 텍스트 길이
 * @param rest 그 외의 옵션들
 * @constructor
 */

export function Textarea({placeholder, maxLength, ...rest}: TextareaProps){
    const [valueLength, setValueLength] = useState<number>(0); // 입력된 글자 길이

    // 입력된 텍스트의 길이를 업데이트
    const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueLength(e.target.value.length)
    }

    return(
        <div className={`hs-textarea-container`}>
            <textarea placeholder={placeholder} onChange={handleTextareaChange} maxLength={maxLength} {...rest}/>
            {maxLength && <p className={'text-leng-count'}>{valueLength}/{maxLength}</p>}
        </div>
    )
}