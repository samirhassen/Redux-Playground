import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Bo"
}

export const StudentHelper = createSlice({
    name: "student",
    initialState,
    reducers: {
        updateStudentName(state, action) { 
            state.value = action.payload;
        }
    }
})

export const {updateStudentName} = StudentHelper.actions;
export const selectStudentName = (state) => state.student.value;

export default StudentHelper.reducer;