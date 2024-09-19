// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import thumbnail_1 from "../assets/images/thumbnail_1.jpg"
import thumbnail_2 from "../assets/images/thumbnail_2.jpeg"

export interface Course {
  id: number;
  courseName: string;
  coursePic: string;
  rating: number;
  courseInstructor: string;
}

export const initialState = {
  courses: [
    {
      id: 1,
      courseName: 'Advanced React and Redux',
      instructorImage: thumbnail_1,
      instructorName: 'John Doe',
      description: 'React, Redux, Hooks, Context',
      rating: 4.8,
    },
    {
      id: 2,
      courseName: 'Mastering Data Science',
      instructorImage: thumbnail_2,
      instructorName: 'Jane Smith',
      description: 'Python, Data, ML, AI',
      rating: 4.7,
    },
  ],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload); // Add a new course
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      ); // Remove a course by ID
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.courses[index] = action.payload; // Update an existing course
      }
    },
  },
});

export const { addCourse, removeCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
