const { injectBabelPlugin } = require('react-app-rewired')

const rootImport = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
    }
];

module.export = config => injectBabelPlugin(rootImport, config)