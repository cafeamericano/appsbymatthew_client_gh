module.exports = {
    config: {
        apiUrl: process.env.NODE_ENV == 'development' ?  'http://localhost:5000/api' : 'https://appsbymatthew-api-v5omtve52a-uc.a.run.app/api',
        loggerUrl: 'https://appsbymatthew-logs-v5omtve52a-uc.a.run.app/graphql'
    }
}