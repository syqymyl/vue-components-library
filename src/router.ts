import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/switch/SwitchDemo.vue'
import ButtonDemo from './components/button/ButtonDemo.vue'
import TabsDemo from './components/tabs/TabsDemo.vue'
import DialogDemo from './components/dialog/DialogDemo.vue'
import InputDemo from './components/input/InputDemo.vue'
import GridDemo from './components/grid/GridDemo.vue'
import LayoutDemo from './components/layout/LayoutDemo.vue'
import PopoverDemo from './components/popover/PopoverDemo.vue'
import CollapseDemo from './components/collapse/CollapseDemo.vue'
import PaginationDemo from './components/pagination/PaginationDemo.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
// 添加“介绍”“快速入手”“安装”的路由
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })

export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: 'doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'input', component: InputDemo },
        { path: 'grid', component: GridDemo },
        { path: 'layout', component: LayoutDemo },
        { path: 'popover', component: PopoverDemo },
        { path: 'collapse', component: CollapseDemo },
        { path: 'pagination', component: PaginationDemo },
      ],
    },
  ],
})
