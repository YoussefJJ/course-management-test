import { Course } from "../types/Course";
import { User } from "../types/Users";

export enum Actions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTER = 'REGISTER',
    EDIT_PROFILE = 'EDIT_PROFILE',
    ADD_COURSE = 'ADD_COURSE',
    DELETE_COURSE = 'DELETE_COURSE',
    EDIT_COURSE = 'EDIT_COURSE',
}

interface LoginAction {
    type: Actions.LOGIN;
    payload: {
        nickname: string;
        password: string;
    };
}

interface LogoutAction {
    type: Actions.LOGOUT;
}

interface RegisterAction {
    type: Actions.REGISTER;
    payload: User;
}

interface AddCourseAction {
    type: Actions.ADD_COURSE;
    payload: Course;
}

interface DeleteCourseAction {
    type: Actions.DELETE_COURSE;
    payload: Course;
}

interface EditCourseAction {
    type: Actions.EDIT_COURSE;
    payload: Course;
}

interface EditProfileAction {
    type: Actions.EDIT_PROFILE;
    payload: User;
}

export type UsersAction = LoginAction | LogoutAction | RegisterAction | AddCourseAction | DeleteCourseAction | EditCourseAction | EditProfileAction;

export interface CourseManagState {
    user: User | null;
    users: User[];
    error: string | null;
    courses: Course[];
}

const initialState: CourseManagState = {
    user: null,
    users: [],
    error: null,
    courses: [],
};

export default function courseManagReducer(state = initialState, action: UsersAction): CourseManagState {
    switch (action.type) {
        case Actions.LOGIN:
            const foundUser = state.users.find(user => user.nickname === action.payload.nickname && user.password === action.payload.password);
            if (!foundUser) {
                return {
                    ...state,
                    error: 'Invalid nickname or password',
                };
            }
            localStorage.setItem('users', JSON.stringify({
                ...state,
                user: foundUser,
                error: null,
            }));
            return {
                ...state,
                user: {
                    ...foundUser,
                    nickname: foundUser.nickname,
                    password: foundUser.password,
                },
                error: null,
            };
        case Actions.LOGOUT:
            localStorage.setItem('users', JSON.stringify({
                ...state,
                user: null,
                error: null,
            }));
            return {
                ...state,
                user: null,
                error: null,
            };
        case Actions.REGISTER:
            localStorage.setItem('users', JSON.stringify({
                users: [...state.users, action.payload],
                user: action.payload,
                courses: state.courses,
                error: null,
            }));
            return {
                ...state,
                users: [...state.users, action.payload],
                user: {
                    ...action.payload,
                },
                error: null,
            };
        case Actions.EDIT_PROFILE:
            localStorage.setItem('users', JSON.stringify({
                users: state.users.map(user => user.nickname === action.payload.nickname ? action.payload : user),
                user: action.payload,
                courses: state.courses,
                error: null,
            }));
            return {
                ...state,
                users: state.users.map(user => user.nickname === action.payload.nickname ? action.payload : user),
                user: {
                    ...action.payload,
                },
                error: null,
            };
        case Actions.ADD_COURSE:
            localStorage.setItem('users', JSON.stringify({
                ...state,
                courses: [...state.courses, action.payload],
            }));
            return {
                ...state,
                courses: [...state.courses, action.payload],
            };
        case Actions.DELETE_COURSE:
            localStorage.setItem('users', JSON.stringify({
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload.id),
            }));
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload.id),
            };
        case Actions.EDIT_COURSE:
            localStorage.setItem('users', JSON.stringify({
                ...state,
                courses: state.courses.map(course => course.id === action.payload.id ? action.payload : course),
            }));
            return {
                ...state,
                courses: state.courses.map(course => course.id === action.payload.id ? action.payload : course),
            };
        default:
            return state;
    }
}