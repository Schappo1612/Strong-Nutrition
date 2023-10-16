import api from '../plugins/api'

class LoginApi {
  async login(email, password) {
    console.log('aaa')
    try {
      const { data } = await api.post('/token/', {
        email,
        password,
      });
      console.log(data)
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}

export default new LoginApi();