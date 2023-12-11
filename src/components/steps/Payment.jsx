// Step3.js
export default function Step3({ onFormDataChange, formData }) {
  const handleInputChange = (e) => {
    // Actualiza el estado del formulario en el componente principal
    onFormDataChange({
      paymentInfo: { ...formData, [e.target.name]: e.target.value },
    })
  }

  return (
    <div>
      <h2>Método de pago</h2>
      <label>
        Tarjeta de crédito:
        <input
          type='text'
          name='creditCard'
          value={formData.creditCard || ''}
          onChange={handleInputChange}
        />
      </label>
      {/* Agrega más campos según sea necesario */}
    </div>
  )
}
