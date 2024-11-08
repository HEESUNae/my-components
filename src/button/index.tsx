import React from "react";
import './style.css'

interface ButtonProps {
   type?: 'button' | 'submit';
   variant?: string;
   children: React.ReactNode;
   onClick?: ()=> void;
   disabled?: boolean;
}

/**
 * 기본 버튼 컴포넌트
 * @param type 버튼 type 지정 (기본값: button)
 * @param variant CSS Style 을 위한 variant
 * @param onClick 버튼 클릭시 실행할 함수
 * @param children 버튼 태그 안에 들어갈 내용
 * @param rest 그 외의 옵션들
 * @constructor
 */

export function Button({type="button", variant="fill", onClick, children, ...rest}:ButtonProps){
   return (
       <button type={type} className={`hs-button-${variant}`} onClick={onClick} {...rest}>{children}</button>
   )
}