import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basket/basketSlice";
import eventsReducer from "./features/event/eventSlice";
import dataPickerReducer from "./features/datepickeralert/datapickeralertSlice";
import searchReducer from "./features/search/searchSlice";
import categoryReducer from "./features/category/categorySlice";
const store = configureStore({
  reducer: {
    basket: basketReducer,
    events: eventsReducer,
    dataPicker: dataPickerReducer,
    search: searchReducer,
    category: categoryReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
