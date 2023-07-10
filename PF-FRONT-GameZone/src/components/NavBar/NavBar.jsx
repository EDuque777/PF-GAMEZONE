

// import React, { useState, useEffect } from "react";
// import style from "./NavBar.module.css";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import logoImage from "../../assets/LOGOGAMEZONE2.png";
// import usuario from "../../assets/usuario.png";
// import { logoutUser, getDataGoogle, logoutGoogle } from "../../redux/actions";
// import Cookies from "js-cookie";
// import Swal from "sweetalert2";

// const NavBar = () => {
//     const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
//     const [isNavbarFixed, setIsNavbarFixed] = useState(false);

//     const handleSubMenuToggle = () => {
//         setIsSubMenuOpen(!isSubMenuOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const isFixed = window.pageYOffset > 0;
//             setIsNavbarFixed(isFixed);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const history = useHistory()
//     const dispatch = useDispatch()

//     const google = useSelector((state) => state.userGoogle)

//     const [ conteo, setConteo ] = useState(0)
//     const [ conteoTwo, setConteoTwo ] = useState(0)

//     useEffect(() => {
//         if (google) {
//             console.log(google, "estos datos son del Navbar")
//             localStorage.setItem("userTwo", JSON.stringify(google));
//             setConteoTwo(1)
//         }else{
//             setConteoTwo(0)
//             console.log("no hay datos")
//         }
//     }, [google])

//     //console.log(conteoTwo, "esto es de google")

//     //console.log(conteo)

//     //console.log(Cookies.getJSON("token"))

//     const datosUser = JSON.parse(localStorage.getItem("user"));

//     const validationUser = () => {
//         if (!datosUser) {
//             setConteo(0)
//         } else if (datosUser) {
//             setConteo(1)
//             return datosUser
//         }
//     }

//     const datosUserTwo = JSON.parse(localStorage.getItem("userTwo"));

//     //console.log(datosUserTwo, "estos datos son del local")

//     const validationUserGoogle = () => {
//         //const datosUserTwo = JSON.parse(localStorage.getItem("userTwo"));
//         if (!datosUserTwo) {
//             setConteoTwo(0)
//         }else if (datosUserTwo) {
//             setConteoTwo(1)
//             return datosUserTwo
//         }
//     }

//     //console.log(datosUser)

//     useEffect(() => {
//         validationUser()
//     }, [datosUser])

//     useEffect(() => {
//         validationUserGoogle()
//     }, [datosUserTwo])

//     const removerDatos = async () => {

//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         })

//         Toast.fire({
//             icon: 'success',
//             title: 'Closed session'
//         })

//         await localStorage.removeItem("user");
//         await Cookies.remove("token")
//         await dispatch(logoutUser())

//         history.push("/")

//         console.log("datos removidos")
//     }

//     const removerDatosTres = async () => {
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         })
          
//         Toast.fire({
//             icon: 'success',
//             title: 'Closed session'
//         })

//         await localStorage.removeItem("userTwo");
//         await dispatch(logoutGoogle())

//         console.log("datos removidos de google")
//     }

//     function peticionData() {
//         dispatch(getDataGoogle())
//         console.log("peticones de datos")
//     }

//     useEffect(() => {
//         if (datosUserTwo) {
//             console.log("hay datos")
//         }else{
//             peticionData()
//         }

//     }, [])

//     return (
//         <div className={`custom-navbar ${isNavbarFixed ? style.fixedNavbar : ""}`}>
//             <Link to="/home">
//                 <img className={style.img} src={logoImage} width="300px" alt="Logo" />
//             </Link>
//             <ul className={style.NaV}>

//                 <li>
//                     <Link to="/home">Home</Link>
//                 </li>
//                 <li className={style["submenu-item"]}>
//                     <Link to="/cart" className={style["submenu-link"]}>
//                         <i className={`fa fa-shopping-cart ${style["cart_icon"]}`}></i>
//                     </Link>
//                 </li>

//                 {
//                     conteoTwo > conteo ? (
//                         conteoTwo > 0 ? (
//                             <li>
//                                 <div className={style.usuarioContainer}>
//                                     <img
//                                         src={datosUserTwo.user.profileImage}
//                                         className={style.usuario}
//                                         alt=""
//                                         title={datosUserTwo.user.name}
//                                         onClick={handleSubMenuToggle}
//                                     />
//                                     {isSubMenuOpen && (
//                                          <ul className={style.submenu}>
//                                          <li className={style["submenu_item"]}>
//                                              <Link to="#">{datosUserTwo.user.name}</Link>
//                                          </li>
//                                          <li className={style["submenu_item"]}>
//                                              <Link to="/user">Perfil</Link>
//                                          </li>
//                                          <li className={style["submenu_item"]}>
//                                              <Link to="/whishlist">Wish List</Link>
//                                          </li>
//                                          <li className={style["submenu_item"]}>
//                                              <a onClick={removerDatosTres}>Log Out</a>
//                                          </li>
//                                      </ul>
//                                     )}
//                                 </div>
//                             </li>
//                         ) : (
//                             <Link to="/form"><button className={style.button} >login</button></Link>
//                         )
//                     ) : (
//                         conteo > 0 ? (
//                             <li>
//                                 <div className={style.usuarioContainer}>
//                                     <img
//                                         src={datosUser.profileImage}
//                                         className={style.usuario}
//                                         alt={datosUser.name}
//                                         title={datosUser.name}
//                                         onClick={handleSubMenuToggle}
//                                     />
//                                     {isSubMenuOpen && (
//                                         <ul className={style.submenu}>
//                                         <li className={style["submenu_item"]}>
//                                             <Link to="#">{datosUser.user_name}</Link>
//                                         </li>
//                                         <li className={style["submenu_item"]}>
//                                             <Link to="/user">Perfil</Link>
//                                         </li>
//                                         <li className={style["submenu_item"]}>
//                                             <Link to="/whishlist">Wish List</Link>
//                                         </li>
//                                         <li className={style["submenu_item"]}>
//                                             <a onClick={removerDatos}>Log Out</a>
//                                         </li>
//                                     </ul>
//                                     )}
//                                 </div>
//                             </li>
//                         ) : (
//                             <Link to="/login"><button className={style.login_button} >login</button></Link>
//                         )
//                     )
//                 }
//             </ul>
//         </div>
//     );
// };

// export default NavBar;




import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoImage from "../../assets/LOGOGAMEZONE2.png";
// import usuario from "../../assets/usuario.png";
import { logoutUser, getDataGoogle, logoutGoogle } from "../../redux/actions";
// import Cookies from "js-cookie";
import Swal from "sweetalert2";

const NavBar = () => {

    const cart = useSelector(state => state.cart)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [carItem, setCarItem] = useState(0);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isFixed = window.pageYOffset > 0;
            setIsNavbarFixed(isFixed);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const history = useHistory()
    const dispatch = useDispatch()

    const usuario = useSelector((state) => state.user)

    const [ conteo, setConteo ] = useState(0)
    const [ conteoTwo, setConteoTwo ] = useState(0)
console.log(setConteoTwo)

    console.log(conteoTwo, "esto es de google")

    console.log(conteo)

    useEffect(() => {
        //validateData()

        if (usuario) {
            localStorage.setItem("user", JSON.stringify(usuario));
            setConteo(1)
        }else{
            setConteo(0)
        }

    }, [usuario])

    const datosUser = JSON.parse(localStorage.getItem("user"));

    console.log(datosUser, "datos del local")

    useEffect(() => {

        if (datosUser) {
            setConteo(1)
        }else{
            setConteo(0)
        }
        
    }, [datosUser])

    const removerDatos = async () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Closed session'
        })

        await localStorage.removeItem("user");
        //await Cookies.remove("token")
        await dispatch(logoutUser())
        await dispatch(logoutGoogle())

        history.push("/")

        console.log("datos removidos")
    }

    function peticionData() {
        dispatch(getDataGoogle())
        console.log("peticones de datos")
    }

    useEffect(() => {
        if (datosUser) {
            console.log("hay datos")
        }else{
            peticionData()
        }

    }, [dispatch])

    useEffect(() => {
        setCarItem(cart.length);
    }, [cart]);

    return (
        <div className={`custom-navbar ${isNavbarFixed ? style.fixedNavbar : ""}`}>
            <Link to="/home">
                <img className={style.img} src={logoImage} width="300px" alt="Logo" />
            </Link>
            <ul className={style.NaV}>
                <li className={style["submenu-item"]}>
                    <Link to="/home" className={style["submenu-link"]}>
                        <i className={`fa fa-home ${style["cart_icon"]}`}></i>
                    </Link>
                </li>
                <li className={style["submenu__item"]}>
                    <Link to="/cart" className={style["submenu_link"]}>
                        {carItem > 0 && <div className={style["cart_count"]}>{carItem}</div>}
                        <i className={`fa fa-shopping-cart ${style["cart_icon"]}`}></i>
                    </Link>
                </li>

                {conteo > 0 ? (
                    <li>
                        <div className={style.usuarioContainer}>
                            <img
                                src={datosUser.profileImage}
                                className={style.usuario}
                                alt={datosUser.name}
                                title={datosUser.name}
                                onClick={handleSubMenuToggle}
                            />
                            {isSubMenuOpen && (
                                <ul className={style.submenu}>
                                    <li className={style["submenu_item"]}>
                                        <Link to="#">{datosUser.user_name}</Link>
                                    </li>
                                    <li className={style["submenu_item"]}>
                                        <Link to="/user">Perfil</Link>
                                    </li>
                                    <li className={style["submenu_item"]}>
                                        <Link to="/whishlist">Wish List</Link>
                                    </li>
                                    <li className={style["submenu_item"]}>
                                        <a onClick={removerDatos}>Logout</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                ) : (
                    <Link to="/login">
                        <button className={style.login_button}>Login</button>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default NavBar;