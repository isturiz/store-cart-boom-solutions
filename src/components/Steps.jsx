// Steps.js
import { useState } from 'react'
import StepsHeader from './StepsHeader'
import Step1 from './steps/ProductInfo'
import Step2 from './steps/CustomerDetails'
import Step3 from './steps/Payment'

export default function Steps() {

  // Steps Header names
  const steps = [
    'Información del producto',
    'Información del cliente',
    'Método de pago ',
    'Checkout'
  ]

  // Save the current selected step
  const [step, setStep] = useState(1)

  // Save the form data for each step
  const [formData, setFormData] = useState({
    productInfo: {},
    customerInfo: {},
    paymentInfo: {},
  })

  
  const handleFormDataChange = (stepData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...stepData,
    }))
  }

  const handleStepClick = (newStep) => {
    // Update the state of the step when the header is clicked
    setStep(newStep)
  }

  const stepComponents = {
    1: (
      <Step1
        onFormDataChange={handleFormDataChange}
        formData={formData.productInfo}
      />
    ),
    2: (
      <Step2
        onFormDataChange={handleFormDataChange}
        formData={formData.customerInfo}
      />
    ),
    3: (
      <Step3
        onFormDataChange={handleFormDataChange}
        formData={formData.paymentInfo}
      />
    ),
  }

  const renderStep = () => {
    return stepComponents[step] || null
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-3xl max-w-3xl bg-red-200'>
        <div id='stepsHeader' className='bg-gray-200 mb-0'>
          <StepsHeader
            steps={steps}
            currentStep={step}
            onStepClick={handleStepClick}
          />
        </div>
        <div className='flex justify-between mt-4'>
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'
          >
            Anterior
          </button>

          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 3}
            className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'
          >
            Siguiente
          </button>
        </div>

        {renderStep()}
      </div>
    </>
  )
}
