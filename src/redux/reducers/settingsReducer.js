import axios from 'axios'

const settings = async (state = null, action) => {
    switch (action.type) {
        case 'GET_SETTINGS':
            return action.payload
        case 'UPDATE_SETTINGS':
            {
                axios.post('/api/settings/update', action.payload)
                .then((response) => {
                    console.log('got settings');
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                })
            }
        default:
            return state;
    }
};

export default settings
