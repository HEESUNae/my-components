import React from "react";
import './style.css'

interface BadgeProps {
    variant?: string;
    children: React.ReactNode;
}

/**
 * 기본 뱃지 컴폰넌트
 * @param variant CSS Style 을 위한 variant
 * @param children 뱃지 안에 들어갈 내용
 * @constructor
 */

export function Badge({variant="fill", children}:BadgeProps){
    return (
        <div className={`hs-badge-container ${variant}`}>
            {children}
        </div>
    )
}
