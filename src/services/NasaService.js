const { default: axios } = require('axios')
const { AppState } = require('../AppState')
const { Potd } = require('../model/Potd')

class NasaService {
  async findPotd() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=xIhPKR5Sa6S5IddufWa0ioBeaLnhUJBngyab7WQo')
    AppState.potd = new Potd(res.data)
  }
}

export const nasaService = new NasaService()
