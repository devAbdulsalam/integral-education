import React from 'react';

const Score = ({ correctAnswers, totalQuestions }) => { 
  const percentage = Math.min((correctAnswers / totalQuestions) * 100, 100).toFixed(0); // Cap at 100%

  // Define a function to return SVG and text based on the score range
  const renderScoreStatus = () => {
    if (percentage < 50) {
      return {
        svgStyle: 'text-red-400 w-18 h-18',
        message: 'Very Unsatisfied ',
      };
    } else if (percentage >= 50 && percentage < 70) {
      return {
        svgStyle: 'text-gray-400 w-20 h-20',
        message: 'Neutral',
      };
    } else {
      return {
        svgStyle: 'text-green-400 w-22 h-22',
        message: 'Very Satisfied',
      };
    }
  };

  const { svgStyle, message } = renderScoreStatus();

  return (
    <section className="bg-white m-3 rounded border border-gray-300">
        <div className="text-center flex-col flex justify-center mx-auto items-center w-96 lg:w-1/3 p-3 m-3  rounded">
        <h2 className="text-4xl font-bold pb-2">{percentage}%</h2>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`${svgStyle}`}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
            </svg>            
          </div>
            <h4 className="inline text-gray-500 text-md">{message}</h4>
    </section>
  );
};

export default Score;
