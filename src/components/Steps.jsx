// Steps.js
import { useState } from 'react'
import StepsHeader from './StepsHeader'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Steps() {
  const steps = [
    'Información del producto',
    'Información del cliente',
    'Método de pago',
  ]

  const [step, setStep] = useState(1)
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
    // Actualiza el estado del paso al hacer clic en el encabezado
    setStep(newStep)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            onFormDataChange={handleFormDataChange}
            formData={formData.productInfo}
          />
        )
      case 2:
        return (
          <Step2
            onFormDataChange={handleFormDataChange}
            formData={formData.customerInfo}
          />
        )
      case 3:
        return (
          <Step3
            onFormDataChange={handleFormDataChange}
            formData={formData.paymentInfo}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className='max-w-lg mx-auto mt-8 p-4 bg-gray-200 rounded'>
      <StepsHeader
        steps={steps}
        currentStep={step}
        onStepClick={handleStepClick}
      />

      {renderStep()}

      <div className='flex justify-between mt-4'>
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Anterior
        </button>
        <button
          onClick={() => setStep(step + 1)}
          disabled={step === 3}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
