import api from '../plugins/api'

class FornecedorService {
  async getAllFornecedores() {
    const response = await api.get('/fornecedores/')
    return response.data
  }
  async saveFornecedor(fornecedor) {
    const response = await api.post('/fornecedores/', fornecedor)
    return response.data
  }
  async deleteFornecedor(fornecedor) {
    const response = await api.delete(`/fornecedores/${fornecedor.id}/`)
    return response.data
  }
}

export default new FornecedorService()