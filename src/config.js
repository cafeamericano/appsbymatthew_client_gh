module.exports = {
    config: {
        apiUrl: process.env.NODE_ENV == 'development' ?  'http://localhost:5001/api' : 'https://appsbymatthew-api-nbfecgrwuq-uc.a.run.app/api'
    }
}