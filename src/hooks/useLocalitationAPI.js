

const useLocalitationAPI = () => {
    const axios = require('axios');
    const params = {
      access_key: '27d24f1c9692b5df4fe39fbe5125fa61',
      query: '1600 Pennsylvania Ave NW'
    }
    
    axios.get('https://api.positionstack.com/v1/forward', {params})
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });

      const [map,setMap] = useState({})
}

export default useLocalitationAPI