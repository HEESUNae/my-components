import React, {useRef, useState} from "react";
import './style.css'

interface ModalProps {
    title?: string;
    className?: string;
    open?: boolean;
    content: React.ReactNode;
    children: React.ReactNode;
}

/**
 * Confirm 모달 컴포넌트
 * @param title 모달 헤더 내용
 * @param content 모달 컨텐츠 내용
 * @param open 모달 오픈 여부
 * @param className CSS Style ClassName
 * @param children 모달을 온오프 시킬 수 있는 버튼
 * @constructor
 */

export function ConfirmModal({title, content, open=false, className, children}: ModalProps) {
    const [isVisible, setIsVisible] = useState<boolean>(open); // 모달 오픈 여부
    const modalBox = useRef<null | HTMLDivElement>(null);

    // 백드롭, 닫기 클릭했을때만 모달을 닫고 나머지는 열기
    const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(prev => !prev);
    }

    // 모달이 항상 가운데에 위치하기 위한 CSS Style
    const modalHeightStyle = `calc(50% - ${modalBox.current?.clientHeight! / 2}px`;
    const modalWidthStyle = `calc(50% - ${modalBox.current?.clientWidth! / 2}px`;

    return (
        <>
            <div className={`hs-modal-trigger`} onClick={handleModalOpen}>{children}</div>
            <div className={`hs-modal-container ${isVisible ? 'open' : 'close'} ${className}`}>
                <div className={`hs-modal-backdrop`} onClick={handleModalOpen}></div>
                <div className={`hs-modal-box`} ref={modalBox} style={{top: modalHeightStyle, left: modalWidthStyle}}>
                    {title &&
                        <div className={`hs-modal-header`}>
                            <p>{title}</p>
                            <div className={`hs-modal-close-btn`} onClick={handleModalOpen}>
                                <ModalCloseIcon/>
                            </div>
                        </div>}
                    <div className={`hs-modal-content`}>{content}</div>
                </div>
            </div>
        </>
    )
}

// 모달 닫기 예시 아이콘
function ModalCloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666">
            <path
                d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
        </svg>
    )
}