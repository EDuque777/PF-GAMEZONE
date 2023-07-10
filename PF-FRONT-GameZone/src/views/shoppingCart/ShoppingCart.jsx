import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import Card from "../../components/Card/Card"
import styles from "./ShoppingCart.module.css"


//* las cards que vengan del home...
//! revisar la convergencia
const ShoppingCart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.total)
    //console.log(cart);
    // const wholePart = Math.floor(totalPrice / 100);
    // const partDecimal = (totalPrice % 100).toString().padStart(2, '0');
    // const formattedTotalPrice = parseFloat(`${wholePart}.${partDecimal}`);
    const dataUser = JSON.parse(localStorage.getItem("user"));
    //console.log(dataUser);

    const handleRemove = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              dispatch(act.clearCart())
            }
          })
    }

    const handleBuy = async () => {
        try {
            //! mandar tanto juegos como el precio total
            dispatch(act.createOrder(totalPrice, cart, dataUser))
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
        <div >
            <br />
            <h2 className={styles.titleCarrito} >Shopping Cart</h2>
            <br />
            {cart.length === 0 ? (
                <div className={styles.container}>
                    <div className={styles.juegosContainer}>
                        <div className={styles.cajitaItems}>
                            <div className={styles.emptyCart}> 
                                <p> There are no games in the cart... </p>
                            </div>
                        </div>
                    </div>
                <div className={styles.cajitaResumen}>
                    <div className={styles.cajitaTotal}>
                        <h4 className={styles.titleCarrito}>TOTAL: $ {totalPrice} </h4>
                    </div>
                    <div className={styles.botones}> 
                        <button className={styles.botonBorrar} onClick={() => {handleRemove()}}>{/* poner icono para borrar todo del carrito */}Delete</button>
                        <button className={styles.botonComprar} onClick={() => {handleBuy()}}>Buy</button>
                    </div>
                </div>
            </div>
            ) : (
            <div className={styles.container}>
                <div className={styles.juegosContainer}>
                    <div className={styles.cajitaItems}>
                        {cart.map(game => {
                            return (
                                <li className={styles.li} >  
                                <Card
                                key={game.id} 
                                id={game.id}
                                name={game.name} 
                                image={game.image || game.capsule_image}
                                price={game.price_overview?.final || game.price || game.final_price }
                                />
                                </li>
                            )})
                        }
                    </div>
                </div>
                <div className={styles.cajitaResumen}>
                    <div className={styles.cajitaTotal}>
                        <h4 className={styles.titleCarrito}>TOTAL: ${totalPrice}</h4>
                    </div>
                    <div className={styles.botones}>
                        <button className={styles.botonBorrar} onClick={() => {handleRemove()}}>{/* poner icono para borrar todo del carrito */}Delete</button>
                        <button className={styles.botonComprar} onClick={() => {handleBuy()}}>Buy</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShoppingCart;