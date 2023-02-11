<template>
  <div class="wrapper">
    <todo-input />
    <!-- :todoList="todoList" 通过绑定传入todoList数据  -->
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/runtime-core';
import { Store, useStore } from 'vuex';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks';


export default defineComponent({
  name: 'App',
  // 在 components 中注册组件 
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();
    // 在 onMounted 组件挂载时，调用 setTodoList();
    onMounted(() => {
      setTodoList();
    })

    return {
      // 使用 computed 响应式的传入 todoList 数据
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

