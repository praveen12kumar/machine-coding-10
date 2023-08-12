import { createContext, useReducer } from "react";
import {inventoryData } from "../db";
import {dataReducer} from "../reducer/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({children})=>{

    const initialState = {
        products: inventoryData,
        data: inventoryData,
        search:"",
        departments:["all-department","Kitchen", "Clothing", "Toys"]
    }

    const [state, dispatch] = useReducer(dataReducer, initialState);


    return(
        <DataContext.Provider value={{
            products: state.products,
            search: state.search,
            DataDispatch : dispatch,
            departments: state.departments,
            data: state.data,
        }}>
            {children}
        </DataContext.Provider>
    )
}