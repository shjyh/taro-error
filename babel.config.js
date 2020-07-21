// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md

module.exports = function(api){
  api.cache(true);

  return {
    presets: [
      ['taro', {
        framework: 'react',
        ts: true
      }]
    ]
  }
}
