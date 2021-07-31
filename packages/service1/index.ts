const tsConfigPaths = require('tsconfig-paths') //eslint-disable-line
const baseUrl = './' // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
    baseUrl,
    paths: {
        '@/*': 'src/*'
    },
})
export { func1 } from '@/func1'
