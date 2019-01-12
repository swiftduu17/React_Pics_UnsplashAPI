import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 2cf05f97bdba83b912e9e6c1cc73aea574bde2f2a2f0d2da48391abaeefdb653'
  }

});
