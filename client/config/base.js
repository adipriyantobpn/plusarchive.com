const plugins = require('./plugins')

module.exports = function (env) {
  return {
    entry: {
      app: './entries/app.js'
    },
    output: {
      path: `${__dirname}/../../web/assets`,
      publicPath: '/assets/'
    },
    resolve: {
      modules: [
        'node_modules',
        `${__dirname}/../../vendor/yiisoft/yii2/assets`
      ]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: plugins.ExtractText.extract([
            'css-loader', 'postcss-loader', 'sass-loader'
          ])
        },
        {
          test: /\.(eot|woff2?|svg|ttf)$/,
          use: 'file-loader'
        },
        {
          test: /(favicon|apple-touch-icon)\.png$/,
          use: {
            loader: 'file-loader',
            options: { name: env === 'dev' ? '[name].[ext]' : '[name]-[hash].[ext]' }
          }
        }
      ]
    }
  }
}
