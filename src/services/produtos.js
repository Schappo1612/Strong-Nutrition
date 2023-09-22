import api from '../plugins/api'

class ProdutoService {
  async getAllProdutos() {
    const response = await api.get('/produtos/')
    return response.data
  }
  async saveProduto(produto) {
    const response = await api.post('/produtos/', produto)
    return response.data
  }
  async deleteProduto(produto) {
    const response = await api.delete(`/produtos/${produto.id}/`)
    return response.data
  }
}

export default new ProdutoService()