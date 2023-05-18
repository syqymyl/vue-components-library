# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码:

```
import { Button, Tab, Tabs, Switch, Dialog, openDialog } from "shanzhu-ui"
import "shanzhu-ui/dist/lib/shanzhu.css"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button, Tabs, Tab, Switch, Dialog, openDialog } from "shanzhu-ui"
export default {
  components: { Button }
}
</script>
```

## 注意事项

如果你想使用组件中的示例代码，使用时请将示例代码中的这句代码删除：

```
import { * } from '../lib/index'
```
