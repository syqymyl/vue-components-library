# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码:

```javascript
import {
  Tab,
  Tabs,
  Switch,
  Button,
  Dialog,
  openDialog,
  Input,
  Layout,
  Sider,
  Header,
  Content,
  Footer,
  Row,
  Col,
  Collapse,
  CollapseItem,
  Pagination,
} from 'shanzhu-ui'
import 'shanzhu-ui/dist/lib/shanzhu.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <button>按钮</button>
  </div>
</template>
<script>
  import {
    Tab,
    Tabs,
    Switch,
    Button,
    Dialog,
    openDialog,
    Input,
    Layout,
    Sider,
    Header,
    Content,
    Footer,
    Row,
    Col,
    Collapse,
    CollapseItem,
    Pagination,
  } from 'shanzhu-ui'
  export default {
    components: { Button },
  }
</script>
```

## 注意事项

如果你想使用组件中的示例代码，使用时请将示例代码中的这句代码删除：

```javascript
import { * } from '../../lib/index'
```

<br/>
<br/>

上一节：[安装](#/doc/install)
