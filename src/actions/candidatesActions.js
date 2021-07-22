import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  SAVE_PRODUCT,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_ACTION_PRODUCT,
  EDIT_ACTION_PRODUCT_SUCCESS,
  EDIT_ACTION_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";
import Swal from "sweetalert2";

import Axios from "../config/axios";

export function createNewCandidateAction(candidate) {
  return (dispatch) => {
    dispatch(newCandidate());

    Axios.post("/candidates", candidate)
      .then((res) => {
        console.log(res);
        dispatch(addNewCandidateSuccess(candidate));
      })
      .catch((error) => {
        console.log(error);
        dispatch(addNewCandidateError());
      });
  };
}

export const newCandidate = () => ({
  type: ADD_PRODUCT,
});

export const addNewCandidateSuccess = (candidate) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: candidate,
});

export const addNewCandidateError = (error) => ({
  type: ADD_PRODUCT_ERROR,
});

export function getCandidatesAction() {
  return (dispatch) => {
    dispatch(getCandidatesStart());

    Axios.get("/candidates")
      .then((resp) => {
        dispatch(saveCandidateSuccess(resp.data));
      })
      .catch((error) => {
        dispatch(saveCandidateError());
      });
  };
}

export const getCandidatesStart = () => ({
  type: SAVE_PRODUCT,
});

export const saveCandidateSuccess = (candidates) => ({
  type: SAVE_PRODUCT_SUCCESS,
  payload: candidates,
});

export const saveCandidateError = () => ({
  type: SAVE_PRODUCT_ERROR,
});

export function deleteCandidateAction(id) {
  return (dispatch) => {
    dispatch(getCandidateDelete());

    Axios.delete(`/candidates/${id}`)
      .then((resp) => {
        dispatch(deleteCandidateSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteCandidateError());
      });
  };
}

export const getCandidateDelete = () => ({
  type: DELETE_PRODUCT,
});

export const deleteCandidateSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteCandidateError = () => ({
  type: DELETE_PRODUCT_ERROR,
});

export function getCandidateAction(id) {
  return (dispatch) => {
    dispatch(getEditCandidatesAction());

    Axios.get(`/candidates/${id}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch(candidateEditSuccess(resp.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(candidateEditError());
      });
  };
}

export const getEditCandidatesAction = (id) => ({
  type: EDIT_ACTION_PRODUCT,
});

export const candidateEditSuccess = (candidate) => ({
  type: EDIT_ACTION_PRODUCT_SUCCESS,
  payload: candidate,
});

export const candidateEditError = () => ({
  type: EDIT_ACTION_PRODUCT_ERROR,
});

export function editCandidateAction(candidate) {
  return (dispatch) => {
    dispatch(startEditCandidate());

    Axios.put(`/candidates/${candidate.id}`, candidate)
      .then((resp) => {
        dispatch(editCandidateActionSuccess(resp.data));
        Swal.fire("Saved", "Successfully Updated", "success");
      })
      .catch((error) => {
        dispatch(editCandidateActionError());
      });
  };
}

export const startEditCandidate = () => ({
  type: EDIT_PRODUCT,
});

export const editCandidateActionSuccess = (candidate) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: candidate,
});

export const editCandidateActionError = () => ({
  type: EDIT_PRODUCT_ERROR,
});
