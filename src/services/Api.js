import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';


  /**
   * Busca todos os usuários.
   * @returns {Promise<Array>} Uma promessa que resolve com um array de objetos representando os usuários.
   */
  const getAllUsers= () => {
    return axios.get(`${baseUrl}/users`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        throw error;
      });
  }

  /**
   * Busca todos os posts.
   * @returns {Promise<Array>} Uma promessa que resolve com um array de objetos representando os posts.
   */
  const getAllPosts = () => {
    return axios.get(`${baseUrl}/posts`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
        throw error;
      });
  }

  /**
   * Busca todos os comentarios.
   * @returns {Promise<Array>} Uma promessa que resolve com um array de objetos representando os comentarios.
   */
  const getAllComments = () => {
    return axios.get(`${baseUrl}/comments`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar comentarios:', error);
        throw error;
      });
  }

/**
   * Busca todos as Fotos.
   * @returns {Promise<Array>} Uma promessa que resolve com um array de objetos representando das Fotos.
*/
  const getAllPhotos = () => {
    return axios.get(`${baseUrl}/photos`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar photos:', error);
        throw error;
      });
  }


/**
   * Busca todos as Albums.
   * @returns {Promise<Array>} Uma promessa que resolve com um array de objetos representando dos Albums.
*/
const getAllAlbums = () => {
    return axios.get(`${baseUrl}/albums`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar albums:', error);
        throw error;
      });
  }

export { getAllPosts, getAllUsers, getAllComments, getAllPhotos, getAllAlbums};