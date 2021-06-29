import { Course } from 'src/app/model/course';
import * as fromCourse from './course.actions';

export interface CourseState{
   courses: Course[];
}
const  initState: CourseState ={
    courses:[]
};

export const courseReducer = ( 
    state = initState, actions:fromCourse.actions
    ):CourseState => {
        switch (actions.type) {
            case fromCourse.LOADING_COURSES:
                return {
                    ...state,
                    courses: actions.payload    
                };
            
            case fromCourse.DELETE_COURSES:
                return{
                    ...state,
                    courses:[]
                }
                
            default:
               return state
        }

}