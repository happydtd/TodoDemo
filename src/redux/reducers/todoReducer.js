import {ADD_TODO, DELETE_TODO, UPDATE_CHECKBOX , DELETE_SELECTED, SHOWDETAIL} from '../constant'

//const initState = [{id:'001', description:'test description1', category:'css', content:'test content1', delete:false}]
const initState = []
export default function todoReducer(preState = initState, action){
    const {type, data} = action
    switch(type){
        case ADD_TODO:
            return [...preState,data]
        case DELETE_TODO:
            return preState.filter(i=>i.id!== data)
        case UPDATE_CHECKBOX:
            let newState = [...preState].map(i=>i.id === data ? {...i, delete :!i.delete }: i)
            return newState
        case DELETE_SELECTED:
            return preState.filter(i=>i.delete === false)
        case SHOWDETAIL:
            return preState.filter(i=>i.id === data)
        default:
            return preState
    }
}