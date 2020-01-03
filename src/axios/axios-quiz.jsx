import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-a3873.firebaseio.com'
})