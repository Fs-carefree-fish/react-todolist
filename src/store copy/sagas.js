import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionsType'
import axios from 'axios'
import { InitAction } from './actionsCreator'

//建议为 generater 写法
function* getInitList() {
  try {
    const res = yield axios.get('api/toodlist')
    const action = InitAction(res.data)
    yield put(action)
  } catch (error) {
    alert(error)
  }
}

//使用 redux-saga 不仅仅reducer可以捕抓到 action saga也可以
function* todoSagas() {
  //takeEvery 可以捕抓任意类型 action
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;