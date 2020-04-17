import Vue from 'vue';
import Vuex from 'vuex';
import * as MUTATION_TYPES from './mutationTypes';
import * as ACTION_TYPES from './actionTypes';
import * as apiCalls from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    alert: {
      display: false,
      text: '',
      success: true,
      alertTimeoutHandle: null,
    },
  },
  mutations: {
    [MUTATION_TYPES.DISPLAY_ALERT](state, params) {
      const { success, text, display } = params;

      //Clear Timeout before setting the new timeout so new alerts
      //override the previous ones
      if (display !== undefined) state.alert.display = display;
      if (text !== undefined) state.alert.text = text;
      if (success !== undefined) state.alert.success = success;
    },

    [MUTATION_TYPES.STOP_ALERT](state) {
      state.alert.display = false;
    },

    [MUTATION_TYPES.SET_ALERT_TIMEOUT_HANDLE](state, timeoutHandle) {
      state.alert.alertTimeoutHandle = timeoutHandle;
    },
  },
  actions: {
    async [ACTION_TYPES.SYNC_COPY]({ commit }, text) {
      let alertParams;
      try {
        const data = await apiCalls.syncCopy(text);
        console.log(data);
        alertParams = {
          success: true,
          text: 'Text Synced Successfully',
          display: true,
        };
      } catch (e) {
        console.error(e);
        alertParams = {
          success: false,
          text: 'Text Failed To Sync',
          display: true,
        };
      }
      commit('DISPLAY_ALERT', alertParams);
    },
  },
});

export default store;
