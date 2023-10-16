import api from '../plugins/api'

class LoginApi {
  async login(email, password) {
    try {
      const { data } = await api.post('/token/', {
        email,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}

export default new LoginApi();