module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  mini: {
    postcss: {
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    postcss: {
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
}
