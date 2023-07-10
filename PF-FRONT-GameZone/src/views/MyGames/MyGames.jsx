// import React, { useEffect } from 'react'
// import style from "./MyGames.module.css"
// import * as act from "../../redux/actions"
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const MyGames = () => {

//     //!revisar ruta al detail
//     const games = useSelector(state => state.library);
//     console.log(games);
//     const dataUser = JSON.parse(localStorage.getItem("user"));
//     const id = dataUser.id;
//     const dispatch = useDispatch()
    
//     useEffect(() => {
//         dispatch(act.getMyGames(id))
//     }, [id])

//     const handleSend = (game) => {
//         dispatch(act.mandarAReview(game))
//     }

//     return (
//         <div className={style.container}>
//         <h2 className={style.title}>My Games:</h2>
//         <div className={style.cardContainer}>
//           {games && games.map((game) => (
//                 <div className={style.card} key={game.id}>
//                     <img className={style.image} src={game.header_image} alt={game.name} />
//                     <h4 className={style.titleName}>{game.name}</h4>
//                     <Link to={"/review"}>
//                         <button className={style.button} onClick={() => handleSend(game)}>Create Review</button>
//                     </Link>
//                 </div>
//           ))}
//         </div>
//         <div className={style.cardPreview}>
//             <h1>AAAA</h1> 
//         </div>
//       </div>
//     );
//   }

// export default MyGames

import React, { useEffect } from 'react'
import style from "./MyGames.module.css"
import * as act from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyGames = () => {

    //!revisar ruta al detail
    const games = useSelector(state => state.library);
    const allGames = useSelector(state => state.games);
    //console.log(allGames);
    console.log(games);
    const dataUser = JSON.parse(localStorage.getItem("user"));
    const ids = dataUser.id;

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(act.getGames())
        dispatch(act.getMyGames(ids))
    }, [dispatch, ids])

    const handleSend = (game) => {
        dispatch(act.mandarAReview(game))
    }

    const handleEdit = (id) => {
      const gameFilter = allGames.find(game => game.id === id)
      if (gameFilter) {
        console.log(gameFilter);
        const review = gameFilter.Reviews[0]?.reviews
        const rating = gameFilter.Reviews[0]?.rating
        const id = gameFilter.Reviews[0]?.id
        console.log({review, rating, id});
        dispatch(act.getGameReview({review, rating, id}))
      }
    }

    const handleDelete = (id) => {
      const gameFilter = allGames.find(game => game.id === id)
      if (gameFilter) {
        const idRev = gameFilter.Reviews[0]?.id
        console.log(idRev);
        dispatch(act.getDeleteReview(idRev))
      }
    }
    
    //! agregar la ruta al detail
    return (
        <div className={style.container}>
        <div className={style.cardContainer}>
          
          {games && games.map((game) => 
          (
            <div className={style.card} key={game.id}>
              <Link to={`detail/${game.id}`}>
              <img className={style.image} src={game.header_image} alt={game.name} />
              </Link>
              <h4 className={style.titleName}>{game.name}</h4>
              <p className={style.titleName}>{game.release_date}</p>
              <div className={style.buttons}>
                <Link to={"/review"}>
                    <button className={style.button} onClick={() => handleSend(game)}>New Review</button>
                </Link>
                <Link to={`/detail/reviews/${game.id}`}>
                    <button className={style.button} onClick={() => {handleEdit(game.id, game.name)}}>Edit Review</button>
                </Link>
                <button className={style.buttonBorrar} onClick={() => handleDelete(game.id)}>x</button>
              </div>
            </div>
          ))}
        </div>
        <div className={style}>
            
        </div>
      </div>
    );
  }

export default MyGames