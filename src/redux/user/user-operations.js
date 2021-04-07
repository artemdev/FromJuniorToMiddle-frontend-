import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'


const baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const logIn = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post(`${baseURL}/users/login`, credentials)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(100)
    }
})

const logOut = createAsyncThunk(`/users/logout`, async (_, thunkAPI) => {

    try {
        await axios.post(`${baseURL}/users/logout`)
        token.unset()


    } catch (error) {
        return thunkAPI.rejectWithValue(100)
    }
})


const signUp = createAsyncThunk('/users/signup', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post(`${baseURL}/users/signup`, credentials)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(100)
    }
})

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get(`${baseURL}/users/current`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(100)
        }
    },
);

export {
    logIn,
    logOut,
    signUp,
    fetchCurrentUser
}