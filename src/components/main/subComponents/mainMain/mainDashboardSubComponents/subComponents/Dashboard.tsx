import React from "react";

const Dashboard: React.FC = () => {
  const firstDiagramDashArray = 45 * Math.PI * 2;
  const firstDiagramDashOffSet =
    firstDiagramDashArray - (firstDiagramDashArray * 32) / 100;
  const secondDiagramDashArray = 36 * Math.PI * 2;
  const secondDiagramDashOffSet =
    secondDiagramDashArray - (secondDiagramDashArray * 20) / 100;
  const thirdDiagramDashArray = 27 * Math.PI * 2;
  const thirdDiagramDashOffSet =
    thirdDiagramDashArray - (thirdDiagramDashArray * 13) / 100;
  const fourthDiagramDashArray = 18 * Math.PI * 2;
  const fourthDiagramDashOffSet =
    fourthDiagramDashArray - (fourthDiagramDashArray * 3) / 100;
  const fifthDiagramDashArray = 9 * Math.PI * 2;
  const fifthDiagramDashOffSet =
    fifthDiagramDashArray - (fifthDiagramDashArray * 2) / 100;
  return (
    <div className="w-full h-full relative">
      <svg className="w-50% h-70% absolute bottom-[10%]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="8"
          fill="none"
          stroke="rgba(156, 1, 1, 0.863)"
          strokeDasharray={firstDiagramDashArray}
          strokeDashoffset={firstDiagramDashOffSet}
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          strokeWidth="8"
          fill="none"
          stroke="rgba(234, 113, 14, 0.863)"
          strokeDasharray={secondDiagramDashArray}
          strokeDashoffset={secondDiagramDashOffSet}
        />
        <circle
          cx="50"
          cy="50"
          r="27"
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="27"
          strokeWidth="8"
          fill="none"
          stroke="rgba(156, 146, 1, 0.863)"
          strokeDasharray={thirdDiagramDashArray}
          strokeDashoffset={thirdDiagramDashOffSet}
        />
        <circle
          cx="50"
          cy="50"
          r="18"
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="18"
          strokeWidth="8"
          fill="none"
          stroke="rgba(13, 97, 2, 0.863)"
          strokeDasharray={fourthDiagramDashArray}
          strokeDashoffset={fourthDiagramDashOffSet}
        />
        <circle
          cx="50"
          cy="50"
          r="9"
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="9"
          strokeWidth="8"
          fill="none"
          stroke="rgba(5, 182, 84, 0.863)"
          strokeDasharray={fifthDiagramDashArray}
          strokeDashoffset={fifthDiagramDashOffSet}
        />
      </svg>
    </div>
  );
};

export default Dashboard;
