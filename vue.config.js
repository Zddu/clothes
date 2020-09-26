module.exports = {
    productionSourceMap: false,
    publicPath:"./",
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
  }