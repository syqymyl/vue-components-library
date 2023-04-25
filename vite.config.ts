// @ts-nocheck

import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export default {
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      // parsed：含有demo标签组件——Switch1.demo.vue
      const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
      // title：标题对象——<demo>常规使用</demo>
      const title = parsed.children[0].content
      // main：源代码对象
      const main = file.split(parsed.loc.source).join('').trim()
      // 把标题和源代码转成字符串并导出
      return `export default function (Component) {
          Component.__sourceCode = ${JSON.stringify(main)}
          Component.__sourceCodeTitle = ${JSON.stringify(title)}
        }`.trim()
    },
  },
}
