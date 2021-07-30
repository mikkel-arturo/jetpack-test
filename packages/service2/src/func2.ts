import { func1 } from '@jetpack-test/service1'

export const func2 = () => {
    return func1() + ": " + "func2"
}