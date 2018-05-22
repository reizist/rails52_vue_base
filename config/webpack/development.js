process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.loaders.append('eslint', {
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
        failOnWarning: true
    }
})

module.exports = environment.toWebpackConfig()
