import { Commit } from "vuex";
import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_STATUS,
  SET_DOING
} from "./actionTypes";
import { IState, ITodo } from '@/typings';

interface ICrx {
  commit: Commit;
  state: IState;
}

export default {
  [SET_TODO]({ commit }: ICrx, todo: ITodo): void {
    commit(SET_TODO, todo);
  },
  [SET_TODO_LIST]({ commit }: ICrx, todoList: ITodo[]) {
    commit(SET_TODO_LIST, todoList);
  },
  [REMOVE_TODO]({ commit }: ICrx, id: number): void {
    commit(REMOVE_TODO, id);
  },
  [SET_STATUS]({ commit }: ICrx, id: number): void {
    commit(SET_STATUS, id);
  },
  [SET_DOING]({ commit }: ICrx, id: number): void {
    commit(SET_DOING, id);
  },
};