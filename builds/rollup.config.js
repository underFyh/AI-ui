import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
import vue  from 'rollup-plugin-vue'

// 获取package.json 找到名字 以@z-ui 开头的
const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@ai-ui'));
export default inputs.map(name => {
    const packageName = name.split('@ai-ui')[1] // button icon
    return {
        input: path.resolve(__dirname, `../packages/${packageName}/index.ts`),
        output: {
            format: 'es',
            file: `lib/${packageName}/index.js`,
        },
        plugins: [
            nodeResolve(),
            vue({
                target: 'browser'
            }),
            typescript({
                tsconfigOverride: {
                    // 打包单个组件的时候不生成ts声明文件
                    compilerOptions: {
                        declaration: false,
                    },
                    exclude: [
                        'node_modules'
                    ],
                }
            })
        ],
        external(id) { // 对vue本身 和 自己写的包 都排除掉不打包
            return /^vue/.test(id) ||  /^@ai-ui/.test(id)
        },
    }
})