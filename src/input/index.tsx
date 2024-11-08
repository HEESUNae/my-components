import React, {useState} from "react";
import './style.css';

interface InputProps {
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: ()=> void;
    defaultValue?: string;
    regex?: RegExp;
    errorMsg?: string;
    maxLength?: number;
}

/**
 * 기본 인풋 컴포넌트
 * @param placeholder placeholder 문구
 * @param onChange 인풋에 입력값이 변경될때마다 실행될 함수
 * @param defaultValue 인풋의 기본 value
 * @param regex 체크하고자 하는 정규식
 * @param errorMsg 정규식 에러 문구
 * @param maxLength 입력가능한 value 의 자리수
 * @param rest 그 외의 옵션들
 * @constructor
 */

export function Input({placeholder, onChange, defaultValue, regex, errorMsg, ...rest}: InputProps) {
    const [isRegexError, setIsRegexError] = useState<boolean>(false);

    // props 로 전달받은 정규식을 체크하고 onChange 함수를 실행
    const handleRegexCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        regex && setIsRegexError(!regex?.test(e.target.value));
        onChange && onChange(e);
    }

    return (
        <div className={'hs-input-container'}>
            <input type="text" placeholder={placeholder} onChange={handleRegexCheck} defaultValue={defaultValue} {...rest} />
            {isRegexError && <p className={'error-msg'}>{errorMsg ?? "올바른 형식이 아닙니다."}</p>}
        </div>
    )
}