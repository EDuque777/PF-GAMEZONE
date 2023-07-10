import React from 'react'
import styles from "./WhishList.module.css"
// import NavBar from '../../components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'

const WhishList = () => {

  const list = useSelector(state => state.whishList)
  const counter = useSelector(state => state.counter)
  //console.log(list);
  //console.log(counter);

  return (
    <div>
      <br />
      <h2 className={styles.titleCarrito}>WhishList</h2>
      <div className={styles.titleCarrito}>{counter}</div>
      <br />
        {list.length === 0 ? (
          <div className={styles.container}>
            <div className={styles.juegosContainer}>
                <div className={styles.cajitaItems}>
                    <div className={styles.emptyCart}> 
                        <p> You haven't added a game to the list yet... </p>
                        
                    </div>
                </div>
            </div>
          </div>
        ) : (
        <div className={styles.container}>
          <div className={styles.juegosContainer}>
            <div className={styles.cajitaItems}>
              {list.map(game => {
                return (
                  <li className={styles.li} key={game.id}>
                    <Card
                      id={game.id}
                      name={game.name} 
                      image={game.image}
                      price={game.price}
                    />
                  </li>
                )
              })}
            </div>
          </div>
        </div>
       )}
  </div>
)}

export default WhishList