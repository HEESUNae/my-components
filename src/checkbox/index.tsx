import React, {useEffect, useId, useState} from "react";
import './style.css'

interface CheckboxProps {
    label?: string;
    checked?: boolean;
}

/**
 * 기본 체크박스 컴포넌트
 * @param label 체크박스 라벨 문구
 * @param checked 체크박스 라벨 문구
 * @param rest 그 외의 옵션들
 * @constructor
 */

export function Checkbox({label, checked, ...rest}:CheckboxProps){
    const [isChecked, setIsChecked] = useState<boolean>(!!checked); // 체크박스 디폴트 선택여부
    const id = useId(); // 아이디 값을 생성

    // 체크박스 클릭시 체크 여부를 확인하여 체크박스 아이콘을 변경
    const handleCheckIcon = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }

    return (
        <div>
            <input type="checkbox" id={id} onChange={handleCheckIcon} checked={isChecked} {...rest}/>
            <label htmlFor={id}>
                {isChecked ? <CheckOnIcon/> : <CheckOffIcon/>}
                {label && <p>{label}</p>}
            </label>
        </div>
    )
 }

 // 체크박스 off 예시 아이콘
 function CheckOffIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path
                d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    )
 }
// 체크박스 on 예시 아이콘
 function CheckOnIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path
                d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
        </svg>
    )
 }