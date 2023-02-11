import { ITodo, TODO_STATUS } from "@/typings";
import { watch } from "vue";
import { Store, useStore } from "vuex";
import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_STATUS,
  SET_DOING
} from '../store/actionTypes';

export interface IUseTodo {
  // 需要把 下面setTodo的 参数<类型> value: string 填入，不然会报错
  setTodo: (value: string) => void;
  setDoing: (id: number) => void;
  setStatus: (id: number) => void;
  removeTodo: (id: number) => void;
  setTodoList: () => void;
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[];
  setLocalList: (todoList: ITodo[]) => void;
}

/**
 *   useTodo 提供工具函数
 *   setTodo 增加待做事项函数
 *    
 *
 * @return {*}  {IUseTodo}
 */
function useTodo(): IUseTodo {

  const store: Store<any> = useStore();
  const { getLocalList, setLocalList } = useLocalStorage();
  const todoList = getLocalList();

  watch(() => {
    // 第一个回调函数返回要监听的参数，把这个参数放到第二个回调函数里面使用
    // 当 store.state.list 发生变化，下面的 setLocalList(todoList);就会执行
    return store.state.list;
  }, (todoList) => {
    // 替代下面每一个函数里面的 setLocalList(store.state.list);
    setLocalList(todoList);
  })


  /**
   *  增加待做事项函数
   *
   * @param {string} value
   */
  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }

    store.dispatch(SET_TODO, todo);
    // setLocalList(store.state.list);
  }


  /**
   *
   *
   * @param {number} id
   */
  function setStatus(id: number): void {
    store.dispatch(SET_STATUS, id);
    // setLocalList(store.state.list);
  }


  /**
   *
   *
   * @param {number} id
   */
  function setDoing(id: number): void {
    store.dispatch(SET_DOING, id);
    // setLocalList(store.state.list);
  }


  /**
   *
   *
   */
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList);
  }


  /**
   *  removeTodo 删除事件函数
   *  
   * @param {number} id 需要传入当前事件的id
   */
  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id);
    // setLocalList(store.state.list);
  }

  return {
    setTodo,
    setStatus,
    setDoing,
    setTodoList,
    removeTodo,
  }
}


/**
 *
 *
 * @return {*}  {IUseLocalStorage}
 */
function useLocalStorage(): IUseLocalStorage {


  /**
   *
   *
   * @return {*}  {ITodo[]}
   */
  function getLocalList(): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]');
  }


  /**
   *
   *
   * @param {ITodo[]} todoList
   */
  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(3333, todoList)
  }

  return {
    getLocalList,
    setLocalList
  }
}

export {
  useTodo
}

function setLocalList(list: any) {
  throw new Error("Function not implemented.");
}
