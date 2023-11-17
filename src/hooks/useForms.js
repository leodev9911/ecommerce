export function useForms (setFormData) {
  const handleChange = (event) => {
    const { value, name } = event.target

    setFormData(prev => {
      return {
        ...prev,
        [name]: {
          value1: value,
          error: false,
          errorMessage: ''
        }
      }
    })
  }

  return { handleChange }
}
