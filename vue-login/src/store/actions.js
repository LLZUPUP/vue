import * as types from './mutation-types'
import api from '@/api'

// commit mutation  通往api设计的一个路口

export default {
  UserLogin({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout({ commit }) {
    commit(type.LOGOUT)
  },
  UserName({ commit }, data) {
    commit(types.USERNAME, data)
  }
}
