
export interface Photo {
  id: string;
  user: User;
  links: {
    download: string;
  };
}

interface User {
  first_name: string;
}

export interface PhotoState {
  images: Photo[],
  loading: boolean,
  error: null | string,
}

interface SuccesAddTodoFromServer {
    type: Action.SUCCES_ADD_IMAGES;
    payload: Photo[]
  }
  
  interface AddTodosFromServer {
    type: Action.ADD_IMAGES_FROM_SERVER;
  }
  
  interface ErrorAddTodoFromServer {
    type: Action.ERROR_ADD_IMAGES;
    payload: string;
  }

  export type ImageAction = AddTodosFromServer
  | SuccesAddTodoFromServer
  | ErrorAddTodoFromServer
 

export enum Action {
    ADD_IMAGES_FROM_SERVER = 'ADD_TODOS_FROM_SERVER',
    SUCCES_ADD_IMAGES = 'SUCCES_ADD_TODO',
    ERROR_ADD_IMAGES = 'ERROR_ADD_TODO',
  }