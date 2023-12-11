// StepsHeader.js
export default function StepsHeader({ steps, currentStep, onStepClick }) {
  return (
    <div className='flex justify-between items-center'>
      {steps.map((title, index) => (
        <div
          key={index}
          onClick={() => onStepClick(index + 1)}
          className='flex items-center cursor-pointer'
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white ${
              currentStep === index + 1 ? 'border-2 border-white' : 'border border-gray-300'
            }`}
          >
            {currentStep > index + 1 ? (
              <span>{index + 1}</span>
            ) : (
              <span className='opacity-0'>{index + 1}</span>
            )}
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-1 bg-gray-300 ${
                currentStep > index + 1 ? 'bg-blue-500' : ''
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}
