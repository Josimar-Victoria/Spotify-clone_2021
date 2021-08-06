import { createSlice } from "@reduxjs/toolkit";


export const playListSlice = createSlice({
    name: "playlist",
    initialState:  {
        playlist: null,
    },
    reducers: {
        SET_PLAYLIST: (state, action) => {
            state.playlist = action.payload
        }
    }
})

export const {SET_PLAYLIST} = playListSlice.actions;
export const selectPlaylist = state => state.playlist.playlist;
export default playListSlice.reducer