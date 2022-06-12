module.exports = {
    lintOnSave: false,
    outputDir: "build",
    devServer: { port: 8081 },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' //'/appsbymatthew_client/' <-- if not using a custom domain
        : '/'
};
