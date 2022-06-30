import { Action, PhotoState, ImageAction } from '../type/type';

const defaultTodo:PhotoState = {
  images: [],
  loading: false,
  error: null,
};

export const ImageReducer = (
  state:PhotoState = defaultTodo,
  action:ImageAction,
):PhotoState => {
  switch (action.type) {
    case Action.ADD_IMAGES_FROM_SERVER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Action.SUCCES_ADD_IMAGES:
      return {
        ...state,
        loading: false,
        error: null,
        images: action.payload,
      };

    case Action.ERROR_ADD_IMAGES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};