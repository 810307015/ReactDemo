import { createReducer } from 'Utils/reduxUtil';

const initData = {
  count: 0, // 计数器
}

const handle = {
  'TEST_ADD': (state, action) => ({ ...state, count: state.count += action.payload.data }),
}

export default createReducer(initData, handle);