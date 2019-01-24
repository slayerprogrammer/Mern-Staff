module.exports = {
    entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            }
          ],
        }
      ]
    }
  };