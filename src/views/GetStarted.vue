<template>
  <article class="markdown-body">
    <h1>开始使用</h1>

    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import { Button, Tab, Tabs, Switch, Dialog, openDialog } from "shanzhu-ui"
import "shanzhu-ui/dist/lib/shanzhu.css"</code></pre>
    就可以使用我提供的组件了。

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import { Button, Tab, Tabs, Switch, Dialog, openDialog } from "shanzhu-ui"
  import "shanzhu-ui/dist/lib/shanzhu.css"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>

    <h2>注意事项</h2>
    <p>如果你想使用组件中的示例代码，使用时请将示例代码中的这句代码删除：</p>
    <pre><code>import { * } from '../lib/index'</code></pre>
  </article>
</template>
