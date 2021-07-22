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

const initialState = {
  candidates: [],
  error: null,
  loading: false,
  candidate: {},
};

export default function candidatesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        candidates: [...state.candidates, action.payload],
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        loading: true,
        candidate: {},
      };
    case SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        loading: false,
        error: false,
        candidate: {},
      };
    case SAVE_PRODUCT_ERROR:
      return {
        ...state,
        candidates: [],
        loading: false,
        error: true,
        candidate: {},
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        error: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        candidates: state.candidates.filter(
          (candidate) => candidate.id !== action.payload
        ),
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
      };
    case EDIT_ACTION_PRODUCT:
      return {
        ...state,
        error: null,
      };
    case EDIT_ACTION_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        candidate: action.payload,
      };
    case EDIT_ACTION_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        error: null,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        candidates: state.candidates.map((candidate) =>
          candidate.id === action.payload.id
            ? (candidate = action.payload)
            : candidate
        ),
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
