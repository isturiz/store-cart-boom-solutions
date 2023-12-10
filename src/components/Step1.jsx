// Step1.js
export default function Step1({ onFormDataChange, formData }) {
  const handleInputChange = (e) => {
    // Actualiza el estado del formulario en el componente principal
    onFormDataChange({
      productInfo: { ...formData, [e.target.name]: e.target.value },
    })
  }

  return (
    <div>
      <h2>Información del producto seleccionado</h2>
      <label>
        Precio:
        <input
          type='text'
          name='price'
          value={formData.price || ''}
          onChange={handleInputChange}
        />
      </label>
    </div>
  )
}
