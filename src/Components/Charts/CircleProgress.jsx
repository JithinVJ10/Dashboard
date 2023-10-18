import React from "react";


const CircleProgress = ({ percentage }) => {
    const strokeDasharray = `${percentage}%, 100%`;
  
    return (
        <div className="">

            <svg className="text-dark" width={200} viewBox="0 0 100 100">
                <circle
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={strokeDasharray}
                strokeLinecap="butt"
                strokeWidth="10"
                fill="none"
                />
                <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20px"
                fill="black"
                >
                {percentage}%
                </text>
            </svg>
        </div>
    );
  };
  

export default CircleProgress