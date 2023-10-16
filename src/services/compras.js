import api from '../plugins/api'

class CompraService {
  async getAllCompras() {
    const response = await api.get('/compras/')
    return response.data
  }
  async saveCompra(compra) {
    const response = await api.post('/compras/', compra)
    return response.data
  }
  async deleteCompra(compra) {
    const response = await api.delete(`/compras/${compra.id}/`)
    return response.data
  }
}

export default new CompraService()