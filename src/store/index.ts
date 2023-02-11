import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
// import actionTypes from './actionTypes';

export default createStore({
  state,
  mutations,
  actions
})
