import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ImageReducer } from './ImageReducer';

const rootReducer = combineReducers({
  images: ImageReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;