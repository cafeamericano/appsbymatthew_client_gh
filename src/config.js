module.exports = {
    config: {
        apiUrl: process.env.NODE_ENV == 'development' ?  'http://localhost:5000/api' : 'https://appsbymatthew-api-v5omtve52a-uc.a.run.app/api',
        loggerUrl: 'https://schokolade.ue.r.appspot.com/api/useraction'
    }
}