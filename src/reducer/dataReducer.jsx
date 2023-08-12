export const dataReducer = (state, {type, payload})=>{

    switch(type){

        case "changeDepartment":
            
            const newProduct = state.products.filter((product)=> product.department === payload)
            return {
                ...state, data:[...newProduct]
            }

        case "AllProducts":
            return{
                ...state, data:[...state.products]
            }

        case "lowStock":
            const newProducts = state.products.filter((product)=> product.stock <= 10);
            return {
                ...state, data:[...newProducts]
            }
       

        default:
            return state;

    }
}