
const defaultState = {
    menuItems: [], 
    allOrders:[],
    user_id: 1, 
    cart: [], 
    favorites: [],
    user_info: [], 
    removed: false, 
    total: "" 
}

function reducer (state=defaultState, action) {
    switch (action.type) {
        case "LOGIN": 
            return {...state,
                 user_id: action.payload}

        case "LOGOUT": 
            return {...state, user_id: 1}

        case "GET_USER_INFO":         
            return {...state, user_info: action.payload}

        case "ADD_TO_CART":
                let addedItem = state.menuItems.find(item => item.id === action.payload)

                let existingItem= state.cart.find(item=> item.id === action.payload)
                
                if (!existingItem)  {
                    
                    addedItem.quantity = 1;
                    return {
                        ...state, cart: [...state.cart, addedItem]
                    }
                } else { 
                    
                    existingItem.quantity += 1 
                    return {
                        ...state, 
                        cart: [...state.cart]
                    }
                }
                break;
                
        case "REMOVE_FROM_CART":    
        let itemToRemove= state.cart.find(item=> item.id === action.payload)
                if(itemToRemove.quantity === 1 ) {
                    return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
                } else {
                    itemToRemove.quantity -= 1 
                    
                    return{...state,  
                        cart: [...state.cart]}
                }

        case "SET_MENU_ARRAY":    
        
                return {...state, menuItems: action.payload}


        case "ADD_TO_FAVORITES":     
                return {...state, favorites: action.payload !== undefined ? action.payload: [] }


        case "SET_TOTAL":     
                debugger
                return {...state, total: action.payload }


        default:
            return state 
            
    }
} 


export default reducer 