<template>
  <div>
    <h3>TodoList</h3>
    <todo-item v-for="item of todoList" :key="item.id" :item="item" @removeTodo="removeTodo" @setStatus="setStatus"
      @setDoing="setDoing" />
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings'
import { defineComponent, PropType } from '@vue/runtime-core';
import TodoItem from './item.vue';

export default defineComponent(
  {
    name: 'TodoList',
    props: {
      todoList: Array as PropType<ITodo[]>
    },
    components: {
      TodoItem
    },
    setup() {
      const {
        setDoing,
        setStatus,
        removeTodo,
      }: IUseTodo = useTodo();

      return {
        setDoing,
        setStatus,
        removeTodo,
      }
    }
  }
);
</script>
<style scoped>

</style>