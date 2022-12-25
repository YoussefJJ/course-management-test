import { CourseManagState } from "../reducers/courseManagReducer"
import { Course } from "../types/Course"
import { User } from "../types/Users"

export const initFunc = (initialState: CourseManagState) => {
    const jsonString = localStorage.getItem('users') || null
    const data: CourseManagState = jsonString ? JSON.parse(jsonString) : initialState
    return data
}

export type Validable = Omit<Course, "id"> | User | Pick<User, "nickname" | "password">

export const validateForm = (data: Validable) => {
    return !Object.values(data).some((value) => !value)
}

export const validateDate = (date1: string, date2: string) => {
    const date1Obj = new Date(date1)
    const date2Obj = new Date(date2)
    return date1Obj < date2Obj
}

// export const formatDate(datetime: string): string => {
//     const [date, time] = datetime.split(' ')
//     return `${date}T${time}`;
// }
