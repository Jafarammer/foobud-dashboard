import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localforage from "localforage";
import { combineReducers } from "redux";
import rootReducer from "../reducer/index";

// Konfigurasi `redux-persist`
const persistConfig = {
  key: "foodBud",
  storage: localforage,
};
// Membuat persisted reducer
const reducer = combineReducers({
  foodBud: persistReducer(persistConfig, rootReducer),
});
// Konfigurasi store dengan persisted reducer
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Matikan serializableCheck jika menggunakan localforage
    }),
});
const persistor = persistStore(store);

export { store, persistor };
