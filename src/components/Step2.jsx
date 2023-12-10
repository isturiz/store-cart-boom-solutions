// Step2.js
export default function Step2({ onFormDataChange, formData }) {
  const handleInputChange = (e) => {
    // Actualiza el estado del formulario en el componente principal
    onFormDataChange({
      customerInfo: { ...formData, [e.target.name]: e.target.value },
    })
  }

  return (
    <div>
      <h2>Datos del comprador</h2>

      <label>
        Primer nombre:
        <input
          type='text'
          name='first_name'
          value={formData.first_name || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Segundo nombre:
        <input
          type='text'
          name='second_name'
          value={formData.second_name || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Primer apellido:
        <input
          type='text'
          name='first_surname'
          value={formData.first_surname || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Segundo apellido:
        <input
          type='text'
          name='second_surname'
          value={formData.second_surname || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Teléfono principal:
        <input
          type='text'
          name='phone'
          value={formData.phone || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Teléfono alternativo:
        <input
          type='text'
          name='second_phone'
          value={formData.second_phone || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Cédula:
        <input
          type='text'
          name='identification_card'
          value={formData.identification_card || ''}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email || ''}
          onChange={handleInputChange}
        />
      </label>
    </div>
  )
}
