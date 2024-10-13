export const todoReducer =(state=[],action={})=>{

    switch(action.type){
        case 'ABC':
            throw new Error('Action no implementado')
        default:
            return initialState
    }
}