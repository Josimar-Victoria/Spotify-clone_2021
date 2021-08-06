
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Feature/UserSlice";
import tokenReducer from "../Feature/TokenSlice"
import PlaylistReducer from "../Feature/PlayListSlice"
export default configureStore ({
    reducer: {
        user: UserReducer,
        token: tokenReducer,
        playlist: PlaylistReducer,
    }
})