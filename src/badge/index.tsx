import React from "react";
import './style.css'

interface BadgeProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * 기본 뱃지 컴폰넌트
 * @param className CSS Style className
 * @param children 뱃지 안에 들어갈 내용
 * @constructor
 */

export function Badge({className, children}:BadgeProps){
    return (
        <div className={`hs-badge-container ${className}`}>
            {children}
        </div>
    )
}
