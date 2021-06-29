import { Action } from "@ngrx/store";
import { Course } from "src/app/model/course";

export const LOADING_COURSES = '[COURSE] Loading Course';
export const DELETE_COURSES = '[COURSE] Delete Course';

export class LoadingCourseAction  implements Action{
    readonly type = LOADING_COURSES;
    constructor( public payload: Course[]){}
} 
export class DeleteCourseAction  implements Action{
    readonly type = DELETE_COURSES;
    constructor(){}
} 

export type actions = LoadingCourseAction | DeleteCourseAction;