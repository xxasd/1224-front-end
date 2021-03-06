const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#D4DDE6' },
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, 'src'),
        ["@pages"]: path.resolve(__dirname, './src/pages'),
        ["@common"]: path.resolve(__dirname, './src/common'),
        ["@components"]: path.resolve(__dirname, './src/components')
    }),
);