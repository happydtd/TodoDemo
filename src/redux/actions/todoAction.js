import {ADD_TODO, DELETE_TODO, UPDATE_CHECKBOX, DELETE_SELECTED, SHOWDETAIL} from '../constant'

export const addTodoAction = todoObj =>({type:ADD_TODO, data:todoObj})
export const deleteTodoAction = todoObj =>({type:DELETE_TODO, data:todoObj})
export const updateCheckboxAction = todoObj =>({type:UPDATE_CHECKBOX, data:todoObj})
export const deleteSelectedAction = () =>({type:DELETE_SELECTED})
export const showDetailAction = todoObj =>({type:SHOWDETAIL, data:todoObj})