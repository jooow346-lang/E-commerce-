
import axios from 'axios';
axios.get('https://fakestoreapi.com/products')
  .then(response => console.log(response.data));

 