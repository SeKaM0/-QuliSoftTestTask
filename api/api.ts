import axios from "axios";
import { Dispatch } from "react";
import { Action, ImageAction } from "../type/type";

const API_URL =
  'https://api.unsplash.com/search/photos?query=london&client_id=ZpwmzTNL8FQPbH1izEcrKFV9Ma_B-6-gv9jNlBrnOzM';

  export const fetchImages = () => {
    return async (dispatch:Dispatch<ImageAction>) => {
      try {
        dispatch({ type: Action.ADD_IMAGES_FROM_SERVER });
        const response = await fetch(API_URL);

        const images = await response.json();
  
        dispatch({ type: Action.SUCCES_ADD_IMAGES, payload: images.results });
      } catch (e) {
        dispatch({
          type: Action.ERROR_ADD_IMAGES,
          payload: 'Can`t get data from server',
        });
      }
    };
  };
