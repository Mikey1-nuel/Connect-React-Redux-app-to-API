import { configureStore } from "@reduxjs/toolkit";
import usersReducer  from "../store/users/usersSlice";

const store = configureStore({
	reducer: {
    user: usersReducer,
}
})

export default store;