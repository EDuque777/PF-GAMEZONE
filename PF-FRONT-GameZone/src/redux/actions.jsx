import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_TO_CART"
export const CLEAR_CART = "CLEAR_CART"
export const CLEAR_SEARCH = "CLEAR_SEARCH"
export const GET_GAMES = "GET_GAMES"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const GET_GAMES_OFFER = "GET_GAMES_OFFER"
export const GET_GAMES_COMING_SOON = "GET_GAMES_COMING_SOON"
export const GET_GAMES_TOP_SELLERS = "GET_GAMES_TOP_SELLERS"
export const GET_GAMES_NEW_RELEASES = "GET_GAMES_NEW_RELEASES"
export const GET_BY_NAME = "GET_BY_NAME"
export const ADD_TO_WHISH_LIST = "ADD_TO_WHISH_LIST"
export const REMOVE_TO_WHISH_LIST = "REMOVE_TO_WHISH_LIST"
export const CLEAR_WHISH_LIST = "CLEAR_WHISH_LIST"
export const CREATE_USER = "CREATE_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const DATA_GOOGLE = "DATA_GOOGLE"
export const LOGOUT_USERGOOGLE = "LOGOUT_USERGOOGLE"

export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE"
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS"
export const PLATFORMS = "PLATFORMS"
export const LANGUAGES = "LANGUAGES"
export const CATEGORIES = "CATEGORIES"
export const DEVELOPERS = "DEVELOPERS"
export const GENRES = "GENRES"

export const ORDER_BY = "ORDER_BY"
export const FILTER_TYPE = "FILTER_TYPE"
export const FILTER_AGE = "FILTER_AGE"
export const FILTER_FREE = "FILTER_FREE"
export const RESET_FILTERS = "RESET_FILTERS"
export const FILTER_PLATFORMS = "FILTER_PLATFORMS"
export const FILTER_CATEGORIES = "FILTER_CATEGORIES"
export const FILTER_LANGUAGES = "FILTER_LANGUAGES"
export const FILTER_GENRES = "FILTER_GENRES"
export const FILTER_CONTROLLER = "FILTER_CONTROLLER"
export const USER_PROFILE = "USER_PROFILE"
export const CLEANDETAIL = "CLEANDETAIL";
export const EDITNAME = "EDITNAME";
export const EDITUSERNAME = "EDITUSERNAME";
export const EDITCOUNTRY = "EDITCOUNTRY";
export const EDIT_PROFILE_IMAGE = "EDIT_PROFILE_IMAGE";
export const GETUSERSTORAGE = "GETUSERSTORAGE";
export const GET_MYGAMES = "GET_MYGAMES";

export const GETGAMEREVIEW = "GETGAMEREVIEW";

export const MANDARREVIEW = "MANDARREVIEW";

export const DELETEREVIEW = "DELETEREVIEW";

export const mandarAReview = (game) => {
    //console.log(game);
    return {
        type: MANDARREVIEW,
        payload: game
    }
}








//! ARREGLAR TODAS LAS RUTAS Y REDUCER DEL RAILWAY
//? FUNCIONES DE PETICIONES
export const resetfilters = () => {
    return {
            type: "RESET_FILTERS",
        
    }
}
export const filterplatforms = (payload) => {
    return {
            
            type: "FILTER_PLATFORMS",
            payload: payload
        
    }
}
export const filterlanguages = (payload) => {
    return {
            
            type: "FILTER_LANGUAGES",
            payload: payload
        
    }
}
export const filtercontroller = (payload) => {
    return {
            
            type: "FILTER_CONTROLLER",
            payload: payload
        
    }
}
export const filtergenres = (payload) => {
    return {
            type: "FILTER_GENRES",
            payload: payload
        
    }
}
export const filtercategories = (payload) => {
    return {
            
            type: "FILTER_CATEGORIES",
            payload: payload
        
    }
}
export const filterage = (payload) => {
    return {
            
            type: "FILTER_AGE",
            payload: payload
        
    }
}
export const orderBy = (payload) => {
    return {
            
            type: "ORDER_BY",
            payload: payload
        
    }
}
export const filtertype = (payload) => {
    return {
            type: "FILTER_TYPE",
            payload: payload
    }
}
export const filterfree = (payload) => {
    return {
            type: "FILTER_FREE",
            payload: payload
    }
}
export const getGames = () => {
    
    return async function (dispatch) {
        try {
            const response = await axios.get(`allGames`)
            // console.log(response);
            const game = response.data
            dispatch({
                type: GET_GAMES,
                payload: game
            })
        } catch (error) {
            console.log(error.message);            
        }
    }
}

export const gameDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`search/${id}`)
            console.log(response);
            dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

// export const preload = () => {
//     return async (dispatch) => {
//         try {
//             await axios.get('http://localhost:3001/preload');
//             console.log("base de datos cargada")
//         } catch (error) {
//         dispatch(console.log(error));
//         }
//     };
// };

export const getByName = (name) => {
    return async function(dispatch) {
    try {
        const response = await axios.get(`nameGames?name=${name}`);

        const sortedResponse = response

        dispatch({
            type: GET_BY_NAME,
            payload: sortedResponse
        });
        } catch (error) {
            console.log(error.message);
        }
    };
};


export const clearDetail = () => {
    return function (dispatch){
        dispatch({
            type: CLEAR_DETAIL
        })
    }
}

export const clearSearch = () => {
    return function (dispatch){
        dispatch({
            type: CLEAR_SEARCH
        })
    }
}

export const getGamesOffer = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`specials`)
            //console.log(response);
            dispatch({
                type: GET_GAMES_OFFER,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getGamesComingSoon = () => {
    return async function (dispatch) {
    try {
        const response = await axios.get(`coming`);
        
        const games = response.data;

        // Eliminar objetos duplicados
        const uniqueGames = games.filter((game, index, self) => {
            return (
            index ===
            self.findIndex((g) => g.id === game.id)
            );
        });

        dispatch({
            type: GET_GAMES_COMING_SOON,
            payload: uniqueGames
        });
    } catch (error) {
        console.log(error.message);
    }
    };
};

export const getGamesTopSellers = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`sellers`)
            //console.log(response);
            dispatch({
                type: GET_GAMES_TOP_SELLERS,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getGamesNewReleases = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`releases`)
            //console.log(response);
            dispatch({
                type: GET_GAMES_NEW_RELEASES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

//? FUNCIONES DEL CARRITO
export const addCart = (game) => {
    return function(dispatch){
        dispatch({
            type: ADD_TO_CART,
            payload: game,
        })
    }
}

export const removeCart = (id) => {
    //console.log(id);
    return {
        type: REMOVE_TO_CART,
        payload: id,
    }
}

export const clearCart = ()  => {
    return  {
            type: CLEAR_CART  
    }
}

export const createOrder = (totalPrice, cartGames, dataUser) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("/createOrder", {totalPrice, cartGames, dataUser})
            if (response.status === 200) {
                dispatch({
                    type: CREATE_ORDER_SUCCESS,
                    payload: response.data
                })
                const data = response.data
                const paymentLink = data.links[1].href
                window.location.href = paymentLink
            } else {
                dispatch(createOrderFailure('Error creating order'));
            }
        } catch (error) {
            dispatch(createOrderFailure('Error creating order'));
            console.error('Error creating order:', error.message);
        }
    }
}

export const createOrderFailure = (errorMessage) => {
    return {
        type: CREATE_ORDER_FAILURE,
        payload: errorMessage
    }
}


//? FUNCIONES DE LA LISTA DE DESEADOS

export const addWhishList = (game) => {
    return function (dispatch) {
        //console.log(game);
        dispatch({
            type: ADD_TO_WHISH_LIST,
            payload: game
        })
    }
}

export const removeWhishList = (id) => {
    return function (dispatch) {
        dispatch({
            type: REMOVE_TO_WHISH_LIST,
            payload: id
        })
    }
}

//? Action de Create User

export const postCreateUser = (props) => {
    return async function (dispatch) {
        try {
           const user = await axios.post("crearCuenta",props)
           console.log(user.props)
            return dispatch({
                type : CREATE_USER,
                payload : user.props
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//? Accion de Loguear Usuario

export const postLogin = (datos) =>{
    return async function (dispatch) {
        try {
            const userTwo = await axios.post("iniciarSesion",datos)
            console.log(userTwo.data, "estos son de las actions")
            return dispatch({
                type : LOGIN_USER,
                payload : userTwo.data
            })
        } catch (error) {
            console.log(error.response.data)
            //return dispatch({
            //    type : LOGIN_USER,
            //    payload : error.response.data
            //})
        }
    }
}

//? Action de Logout Usuario

export const logoutUser = () => {
    return async function (dispatch) {
        try {
            const logout = axios.post("cerrarSesion")
            console.log(logout)
            return dispatch({
                type : LOGOUT_USER
            })
        } catch (error) {
            console.log(error)
        }

    }
}

//Action de login with Google

export const loginGoogle = () => {
    return function (dispatch) {
        try {
            const login = window.open("/auth/google", "_self")
            console.log(login)
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDataGoogle = () => {
    return async (dispatch) => {
        try {
            const dataGoogle = await axios.get("/auth/user", {
                withCredentials : true,
                headers : {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Credential' : true
                }
            })
            if (dataGoogle.status === 200) {
                console.log(dataGoogle.data, "datos desde la action")
                return dispatch({
                    type : DATA_GOOGLE,
                    payload : dataGoogle.data
                })
                //setUser(dato.data.user);
            }else {
                throw new Error("Authentication has failed!")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const logoutGoogle = () => {
    return async (dispatch) => {
        try {
            const logoutTwo = await window.open("/auth/logout", "_self")
            console.log(logoutTwo)
            return dispatch({
                type : LOGOUT_USERGOOGLE
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const clearWhishList = () => {
    return function (dispatch) {
        dispatch({
            type: CLEAR_WHISH_LIST,
        })
    }
}


export const platformsAll = () => {
    const endpoint = `platformGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: PLATFORMS,
            payload: data
        })
    }
}



export const languagesGames = () => {
    const endpoint = `languagesGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: LANGUAGES,
            payload: data
        })
    }
}

export const categoriesGames = () => {
    const endpoint = `categoriesGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: CATEGORIES,
            payload: data
        })
    }
}

export const developersGames = () => {
    const endpoint = `developersGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: DEVELOPERS,
            payload: data
        })
    }
}

export const genresGames = () => {
    const endpoint = `genresGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: GENRES,
            payload: data
        })
    }
}

export const CleanDetail = () => {
    return function(dispatch){
        dispatch({ type: CLEANDETAIL })
    }   
};

export const editName = (id, newName) => {
    const endpoint = `/users/${id}`;
    return async (dispatch) => {
      try {
        const response = await axios.put(endpoint, { name: newName });
        dispatch({
          type: EDITNAME,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const editUserName = (id, newUserName) => {
    const endpoint = `/users/${id}`;
    return async (dispatch) => {
      try {
        const response = await axios.put(endpoint, { user_name: newUserName });
        dispatch({
          type: EDITUSERNAME,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const editCountry = (id, newCountry) => {
    const endpoint = `/users/${id}`;
    return async (dispatch) => {
      try {
        const response = await axios.put(endpoint, { country: newCountry });
        dispatch({
          type: EDITCOUNTRY,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

//   export const editProfileImage = () => {
//     return async function () {
//         try {
//             const formData = new FormData();
//             formData.append('file', selectedImage);
//             const response = await axios.post('http://localhost:3001/upload', formData, {
//               headers: {
//                 'Content-Type': 'multipart/form-data',
//                 datosUser: JSON.stringify(datosUser.id),
//               },
//             });
      
//             if (response.status === 200) {
//               console.log(response.data); // URL de la imagen en Cloudinary
//             } else {
//               console.log(response.data); // Mensaje de error
//             }
//           } catch (error) {
//             console.log(error.message);
//           }
//     }
// };

export const getUserStorage = (id) => {
    const endpoint = `/profile/${id}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: GETUSERSTORAGE,
            payload: data
        })
    }
}


// export const getGameReview = (id) => {

//     const endpoint = `/reviewsDemo/${id}`;

//     return async (dispatch) => {
//         const {data} = await axios.get(endpoint);
//         return dispatch({
//             type: GETGAMEREVIEW,
//             payload: data
//         })
//     }

// }

//? ACCIONES DE MI BIBLIOTECA

export const getMyGames = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/user/games?id=${id}`);
        console.log(response);
        const games = response.data
        dispatch({
            type: GET_MYGAMES,
            payload: games.Games
        })
        //console.log(games.Games);
        } catch (error) {
            console.error(error.message);    
        }
    }

}


export const getGameReview = (game) => {
    console.log(game);
    return (dispatch) => {
        return dispatch({
            type: GETGAMEREVIEW,
            payload: game
        })
    }
}

export const getDeleteReview = (idRev) => {

    return async function (dispatch) {
        try {
            const response = await axios.delete(`/user/deleteReview/${idRev}`)
            //console.log("RESPONSEEEE",response);
            //console.log("IIIIIID",ids);
            const game = response.data
            dispatch({
                type: DELETEREVIEW,
                payload: game
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}





