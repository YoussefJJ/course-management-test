import React, { createContext, useReducer } from "react";
import usersReducer, { Actions } from "../reducers/courseManagReducer";
import { Course } from "../types/Course";
import { User } from "../types/Users";
import { initFunc } from "../util/utils";

interface AppCtx {
    currentUser: User | null;
    users: User[];
    courses: Course[];
    register: (data: User) => void;
    login: (credentials: {
        nickname: string;
        password: string;
    }) => void;
    logout: () => void;
    editProfile: (data: User) => void;
    addCourse: (course: Course) => void;
    removeCourse: (course: Course) => void;
    editCourse: (course: Course) => void;
    error: string | null;
}

export const AppContext = createContext<AppCtx>({
    currentUser: null,
    users: [],
    courses: [],
    register: (data: User) => {},
    login: (credentials: {
        nickname: string;
        password: string;
    }) => {},
    logout: () => {},
    editProfile: (data: User) => {},
    addCourse: (course: Course) => {},
    removeCourse: (course: Course) => {},
    editCourse: (course: Course) => {},
    error: null
});

export const Provider = (props: {
    children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(usersReducer, {users: [], user: null, error: null, courses: []}, initFunc);

  const value: AppCtx = {
    currentUser: state.user,
    users: state.users,
    courses: state.courses,
    register: (data: User) => {
      dispatch({ type: Actions.REGISTER, payload: data });
    },
    login: (credentials: {
        nickname: string;
        password: string;
    }) => {
      try {
        dispatch({ type: Actions.LOGIN, payload: credentials });
      }
      catch (error) {
        console.log(error);
      }
    },
    logout: () => {
      dispatch({ type: Actions.LOGOUT });
    },
    editProfile: (data: User) => {
      dispatch({ type: Actions.EDIT_PROFILE, payload: data });
    },
    addCourse: (course: Course) => {
      dispatch({ type: Actions.ADD_COURSE, payload: course });
    },
    removeCourse: (course: Course) => {
      dispatch({ type: Actions.DELETE_COURSE, payload: course });
    },
    editCourse: (course: Course) => {
      dispatch({ type: Actions.EDIT_COURSE, payload: course });
    },
    error: state.error
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};