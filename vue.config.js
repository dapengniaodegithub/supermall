// const { defineConfig } = require('@vue/cli-service')
//
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  configureWebpack: {
    resolve:{
      extensions:[],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'store':'@/store'
      }
    }
  }
}
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   resolve:{
//     extensions:['.js','.vue','.json'],
//     alias:{
//       '@': 'src',
//       'assets':'src/assets',
//       'components':'src/components',
//       'network':'src/network',
//       'router':'src/router',
//       'store':'src/store',
//       'view':'src/view'
//     }
//   }
// })
