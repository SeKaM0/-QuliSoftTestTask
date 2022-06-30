import { Action, Photo } from '../type/type';

export const getImagesFromServer = (payload:Photo[]) => ({
  type: Action.ADD_IMAGES_FROM_SERVER,
  payload,
});