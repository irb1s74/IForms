import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const initialState: UserSchema = {}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    }
});

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice

