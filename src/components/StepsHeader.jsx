// StepsHeader.js
export default function StepsHeader({ steps, currentStep, onStepClick }) {
  return (
    <div className='flex justify-between mb-4'>
      {steps.map((title, index) => (
        <div
          key={index}
          onClick={() => onStepClick(index + 1)} // Llama a la función onStepClick con el número de paso
          className={`cursor-pointer p-2 border transition duration-300 ease-in-out ${
            currentStep === index + 1 ? 'bg-blue-500 text-white transform' : ''
          }`}
        >
          {title}
        </div>
      ))}
    </div>
  )
}
