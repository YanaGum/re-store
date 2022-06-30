import React from "react";
import { Consumer } from "../bookStoreService-context/bookStore-services";

const withBookStoreServices = () => (Wrapped) => {
 
    return(props)=>{
        return(
            <Consumer>
                {
                    (BookStoreServices)=>{
                        return(<Wrapped {...props} BookStoreServices ={BookStoreServices}/>)
                    }
                }
            </Consumer>
        )
    }
}

export default withBookStoreServices;