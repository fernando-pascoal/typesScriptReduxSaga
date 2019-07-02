import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "../repositories/actions";

export function* load() {
  try {
    const response = yield call(api.get, "users/fernando-pascoal/repos");
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
