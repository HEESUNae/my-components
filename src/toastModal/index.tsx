import React, {useEffect, useState} from "react";
import './style.css'

interface ToastModalProps {
    children: React.ReactNode;
    className?: string;
    open?: boolean;
    content: string;
}

/**
 * 토스트 모달 컴포넌트
 * @param content 모달 컨텐츠 내용
 * @param className CSS Style ClassName
 * @param open 모달 오픈 여부
 * @param children 모달을 온오프 시킬 수 있는 버튼
 * @constructor
 */

export function ToastModal({content, className, open=false, children}:ToastModalProps){
    const [isVisible, setIsVisible] = useState(open);

    // 토스트 모달을 3초간 보여주고 사라집니다.
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <>
            <div className={`hs-toast-modal-trigger`} onClick={()=>setIsVisible(true)}>{children}</div>
            <div className={`hs-toast-modal-container ${isVisible ? "open" : "close"}`}>
                <div className={`hs-toast-modal ${className}`}>{content}</div>
            </div>
        </>
    )
}