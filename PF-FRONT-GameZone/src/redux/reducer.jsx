import Swal from "sweetalert2";
import * as act from "./actions"

const initialState = {
    games: [],
    search: [],
    searchcopy: [],
    total: 0,
    counter: 0,
    cart: [],
    whishList: [],
    gameDetail: null,
    gameComingSoon: null,
    gameOffer: null,
    gamesTopSellers: null,
    gamesNewReleases: null,
    gamesFiltered: null,
    createAccount : [],
    user : null,
    // userGoogle : null,
    orderCreated: false,
    error: null,
    gamesPlatforms: [],
    languagesGames: [],
    categoriesGames: [],
    developersGames: [],
    genresGames: [],
    userStorage: null,
    gameReview: [],
    library: [],
    review: [],
    deleteReview: null,

    
};

const rootReducer=(state = initialState, action) => {
    switch(action.type) {
        //filtros combinadosconst combtype = "COMBTYPE"
        
        
        
        //filtros de busqueda

        case act.FILTER_LANGUAGES:
            const language = action.payload.toLowerCase();
            const filteredSearchsssssssss = state.search.filter(game =>
                game.supported_languages && game.supported_languages.toLowerCase().includes(language))
            return{
                ...state,
              search: filteredSearchsssssssss
            }

        case act.FILTER_GENRES:
            const genre = action.payload;
          
            const filteredSearchsssssss = state.search.filter(game =>
              game.genres && game.genres.some(categor => categor.description === genre)
            );
          
            return {
              ...state,
              search: filteredSearchsssssss
            };
          
        case act.FILTER_CATEGORIES:
            const category = action.payload;
          
            const filteredSearchssssss = state.search.filter(game =>
              game.categories && game.categories.some(categor => categor.description === category)
            );
          
            return {
              ...state,
              search: filteredSearchssssss
            };
          


        case act.FILTER_PLATFORMS:
            let filteredSearchssss;
            const platform = action.payload
            console.log(platform)
            if (platform === "windows") {
              filteredSearchssss = state.search.filter(game => game.platforms.windows === true);
            } else if(platform === "linux"){
              filteredSearchssss = state.search.filter(game => game.platforms.linux === true);
            } else if(platform === "mac"){
                filteredSearchssss = state.search.filter(game => game.platforms.mac === true);
            }
            return {
              ...state,
              search: filteredSearchssss
            };



            case act.FILTER_FREE:
                let filteredSearchsssss;
                if (action.payload === "false") {
                  filteredSearchsssss = state.search.filter(game => game.is_free === true && game.release_date.coming_soon !== true);
                } else {
                  filteredSearchsssss = state.search.filter(game => game.is_free === false && game.release_date.coming_soon !== true);
                }
                return {
                  ...state,
                  search: filteredSearchsssss
                };
              

        case act.FILTER_TYPE:
            const typess = action.payload;
            const typesearchss = state.search.filter(game => game.type === typess);

            return {
                ...state,
                search: typesearchss
            };

            case act.FILTER_AGE:
                const types = action.payload;
                const typesearchs = state.search.filter(game => game.required_age === types);
    
                return {
                    ...state,
                    search: typesearchs
                };

            case act.FILTER_CONTROLLER:
                const CONTROLLER = action.payload;
                const typesearc = state.search.filter(game => game.controller_support === CONTROLLER);
    
                return {
                    ...state,
                    search: typesearc
                };
            

        case act.ORDER_BY:
            const orderBy = action.payload;
            let sortedSearch = [...state.search];
          
            if (orderBy === "des") {
              sortedSearch.sort((a, b) => {
                if (!a.release_date.coming_soon && !b.release_date.coming_soon) {
                  if (a.is_free && b.is_free) {
                    return a.price_overview?.final - b.price_overview?.final;
                  } else if (a.is_free && !b.is_free) {
                    return -1;
                  } else if (!a.is_free && b.is_free) {
                    return 1;
                  } else {
                    return a.price_overview?.final - b.price_overview?.final;
                  }
                } else if (!a.release_date.coming_soon && b.release_date.coming_soon) {
                  return -1;
                } else if (a.release_date.coming_soon && !b.release_date.coming_soon) {
                  return 1;
                } else {
                  return 0;
                }
              });
            } else if (orderBy === "asc") {
              sortedSearch.sort((a, b) => {
                if (!a.release_date.coming_soon && !b.release_date.coming_soon) {
                  if (a.is_free && b.is_free) {
                    return a.price_overview?.final - b.price_overview?.final;
                  } else if (a.is_free && !b.is_free) {
                    return 1;
                  } else if (!a.is_free && b.is_free) {
                    return -1;
                  } else {
                    return b.price_overview?.final - a.price_overview?.final;
                  }
                } else if (!a.release_date.coming_soon && b.release_date.coming_soon) {
                  return -1;
                } else if (a.release_date.coming_soon && !b.release_date.coming_soon) {
                  return 1;
                } else {
                  return 0;
                }
              });
            }
          
            const filteredSearch = sortedSearch.filter(game => !game.release_date.coming_soon);
          
            return {
              ...state,
              search: filteredSearch
            };
          
            case act.RESET_FILTERS:
                return {
                    ...state,
                    search: state.searchcopy
                    
                }
            
            case act.GET_BY_NAME:
                return {
                    ...state,
                    search: action.payload,
                    searchcopy: action.payload
                }

//? CASOS DE PETICIONES

        case act.GET_GAMES:
            return {
                ...state,
                games: action.payload
            }
        

        case act.GET_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }

        case act.CLEAR_DETAIL:
            return {
                ...state,
                gameDetail: null
            }
        case act.CLEAR_SEARCH:
            return {
                ...state,
                search: []
            }

        case act.GET_GAMES_OFFER:
            return {
                ...state,
                gameOffer: action.payload
            }

        case act.GET_GAMES_COMING_SOON:
            return {
                ...state,
                gameComingSoon: action.payload
            }
        
        case act.GET_GAMES_NEW_RELEASES:
            return {
                ...state,
                gamesNewReleases: action.payload
            }

        case act.GET_GAMES_TOP_SELLERS:
            return {
                ...state,
                gamesTopSellers: action.payload
            }

//?CASOS DEL CARRITO
        case act.ADD_TO_CART:
            const addGame = action.payload
            const existingGame = state.cart.find(game => game.id === addGame.id)
            if (existingGame) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'the game is already in the cart',
                    showConfirmButton: false,
                    timer: 2000
                })
                return state; 
            }
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Game added successfully",
                showConfirmButton: false,
                timer: 2000
            }) 
            const updateCart = [...state.cart, addGame]
            const updatePrice = state.total + (addGame.price === 'free' ? 0 : addGame.price);
            return {
                ...state,
                cart: updateCart,
                total: updatePrice
            }

        case act.REMOVE_TO_CART:
            const removeGameId = action.payload
            const updateGameRemoveCart = state.cart.filter((game) => game.id !== removeGameId)
            const gameRemoved = state.cart.find(game => game.id === removeGameId)
            const updateTotalPrice = state.total - gameRemoved.price;
            return {
                ...state,
                cart: updateGameRemoveCart,
                total: updateTotalPrice
            }

        case act.CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }

        case act.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderCreated: true,
                error: null
            }

        case act.CREATE_ORDER_FAILURE:
            return {
                ...state,
                orderCreated: false,
                error: action.payload
            }
        
//? CASOS DE LA LISTA DE DESEADOS
        case act.ADD_TO_WHISH_LIST:
            const addList = action.payload
            const gameInWhishList = state.whishList.find(game => game.id === addList.id);
            if (gameInWhishList) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'the game is already in the list',
                showConfirmButton: false,
                timer: 2000
            });
            return state;
            }   
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Game added successfully",
                showConfirmButton: false,
                timer: 2000
            })
            return {
                ...state,
                whishList: [...state.whishList, addList],
                counter: ++ state.counter,
            }

        case act.REMOVE_TO_WHISH_LIST:
            return{
                ...state,
                whishList: state.whishList.filter( game => game.id !== action.payload),
                counter: -- state.counter,
            }

        case act.CLEAR_WHISH_LIST:
            return {
                ...state,
                whishList: [],
                counter: 0
            }
// CASOS DEL USUARIO 
        case act.CREATE_USER: 
            return {
                ...state,
                createAccount : action.payload
            }
        case act.LOGIN_USER:
            return {
                ...state,
                user : action.payload
            }
        case act.DATA_GOOGLE:
            //console.log(userGoogle)
            return {
                ...state,
                user : action.payload
            }

        case act.LOGOUT_USER:{
            return{
                ...state,
                user : null
            }
        }

        case act.LOGOUT_USERGOOGLE:
            return {
                ...state,
                user : null
            }

        case act.PLATFORMS:
            return {
                ...state,
                gamesPlatforms: action.payload
            }

        case act.LANGUAGES:
            return {
                ...state,
                languagesGames: action.payload
            }

        case act.CATEGORIES:
            return {
                ...state,
                categoriesGames: action.payload
            }

        case act.DEVELOPERS:
            return {
                ...state,
                developersGames: action.payload
            }

        case act.GENRES:
            return {
                ...state,
                genresGames: action.payload
            }


        case act.CLEANDETAIL:
            return {
                ...state,
                user: null,
            };

            case act.EDITNAME:
                return {
                  ...state,
                  user: {
                    ...state.user,
                    name: action.payload.name,
                  },
                };

            case act.EDITUSERNAME:
                return {
                    ...state,
                    user: {
                    ...state.user,
                    user_name: action.payload.user_name,
                      },
                    };

            case act.EDITCOUNTRY:
                return {
                    ...state,
                    user: {
                    ...state.user,
                    country: action.payload.country,
                        },
                    };
            //  case act.EDITPROFILEIMAGE:
            //     return {
            //         ...state,
            //         user: {
            //         ...state.user,
            //         profileImage: action.payload.profileImage,
            //           },
            //         };

            case act.GETUSERSTORAGE:
                return {
                    ...state,
                    userStorage: action.payload
            }

            case act.GETGAMEREVIEW:
            
            return {
                ...state,
                review: action.payload
            }
            
//? CASOS DE LA BIBLIOTECA

            case act.GET_MYGAMES:
                return {
                    ...state,
                    library: action.payload
                }

                case act.MANDARREVIEW:

            const game = action.payload
            console.log(game);
            return {
                ...state,
                review: game
            }

        case act.DELETEREVIEW:
            //console.log(action.payload);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review removed successfuly",
                showConfirmButton: false,
                timer: 2000
            })
            return {
                ...state,
                deleteReview: action.payload
            }

            
        default:
            return {...state};
    }
};

export default rootReducer;