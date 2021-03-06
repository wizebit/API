import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  digestInfo: {
    bcNodes: [],
    raftNodes: [],
    storageNodes: [],
    spacelfet: 0,
    totalNodes: 0,
    suspicious: 0
  },
  error: null,
  loading: false
};

const getDigestStart = state => (updateObject(state, {
  loading: true
}));

const getDigestSuccess = (state, action) => (updateObject(state, {
  digestInfo: {
    ...action.digestInfo,
    timestamp: new Date()
  },
  loading: false
}));

const getDigestFail = (state, action) => (updateObject(state, {
  error: action.error,
  loading: false
}));

const reducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.GET_DIGEST_START: return getDigestStart(state, action);
      case actionTypes.GET_DIGEST_SUCCESS: return getDigestSuccess(state, action);
      case actionTypes.GET_DIGEST_FAIL: return getDigestFail(state, action);
      default: return state;
    }
  }

  return state;
};

export default reducer;
