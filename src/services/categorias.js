import api from '../plugins/api'

class CategoriaService {
  async getAllCategorias() {
    const response = await api.get('/categorias/')
    return response.data
  }
  async saveCategoria(categoria) {
    const response = await api.post('/categorias/', categoria)
    return response.data
  }
  async deleteCategoria(categoria) {
    const response = await api.delete(`/categorias/${categoria.id}/`)
    return response.data
  }
}

export default new CategoriaService()