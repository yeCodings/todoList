# vue3-ts-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

####  vue components(vue组件) -> commit -> mutation -> state -> 视图更新 -> 响应式
vux工作流
  1. 组件 -> dispatch(派发) -> action
  2. dispatch -> 通过type（actionType） -> 确认某一个action
  3. action -> commit调用 -> mutation(唯一一个更改state的方法)；
  4. mutation -> 更改change -> state(状态)
  5. render方案: state -> 数据流 -> 视图
文件划分
  1、 actionTypes  action类型
  2、 actions      调用mutations的方法
  3、 mutations    更改state的方法
  4、 state        中央数据管理池
  5、 store出口        actions、mutations、state统一到仓库进行管理
#### 组件划分
  -TodoList
  1. TodoInput -> 输入的组件
  2. TodoList -> 列表组件
     -TodoItem -> 列表项
     1. 完成或未完成的选项  checkbox
     2. 删除该项          button
     3. 正在做的确认项     button 
#### vue3.0文档
    https://v3.vuejs.org/