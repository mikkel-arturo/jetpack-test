const tsConfigPaths = require('tsconfig-paths')
const baseUrl = './' // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
    baseUrl,
    paths: {
        "@/*": ["src/*"]
    },
})

import { Handler, Context } from 'aws-lambda'

// ideally should be import { func2 } from '@/func2' but trace can't follow aliases??
import { func2 } from './src/func2'

export const service2: Handler = async (event: any, context: Context) => {
    return {
        result: func2()
    }
}
