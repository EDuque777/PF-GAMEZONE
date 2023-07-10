// import { useEffect, useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearDetail, gameDetail } from "../../redux/actions";
// import style from "./Detail.module.css";
// import { PacmanLoader } from "react-spinners";
// import * as act from "../../redux/actions";
// import { FaStar } from "react-icons/fa";


// const Detail = (props) => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const game = useSelector((state) => state.gameDetail);
//   const isLoading = game === undefined || game === null;
//   const genres = game && game?.genres;
//   const [videoUrl, setVideoUrl] = useState("");
//   // const categoriesLimited = game && game?.categories?.slice(0, 3);
//   const id = props.match.params.id
//   let idReview
  
//   const datosUser = JSON.parse(localStorage.getItem("user"));
//   console.log("asdfghjhgfds",datosUser?.name)


  
//   useEffect(() => {
//     if (id) {
//       dispatch(gameDetail(id))
//       .then(() => {
//         const video = game?.Videos || "";
//         setVideoUrl(video);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     } else {
//       setVideoUrl("");
//     }
    
//     return () => {
//       dispatch(clearDetail());
//     };
//   }, [dispatch]);
  
//   useEffect(() => {
//     if (game) {
//       const video = game?.Videos || "ssdds";
//       setVideoUrl(video);
//     }
//   }, []);
  
  
  
//   function sanitizeText(text) {
//     if (typeof text === "string") {
//       text = text.replace(/<\/?[^>]+(>|$)/g, "");
//       text = text.replace(/\*\*/g, "");
//       return text;
//     }
//     return text;
//   }
  
//   const handleAdd = () => {
//     dispatch(act.addCart({id: bkId, image: img, name:name , price: isNaN(price) ? 0 : price}));
//   }
  
//   const handleAddWhish = () => {
//     dispatch(act.addWhishList({ id: bkId, price: isNaN(price) ? 0 : price, name:name, image: img }));
//   };
  
//   const Rating = ({ rating }) => {
//     const renderStars = () => {
//       const stars = [];
//       for (let i = 0; i < 5; i++) {
//         if (i < rating) {
//           stars.push(<FaStar key={i} color="white" />);
//         } else {
//           stars.push(<FaStar key={i} color="gray" />);
//         }
//       }
//       return stars;
//     };
  
//     return <div style={{ display: "flex" }}>{renderStars()}</div>;
//   };

//   // promedio puntuacion
//   const calculateAverageRating = (reviews) => {
//     if (!reviews || reviews.length === 0) {
//       return 0;
//     }
    
//     const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
//     const averageRating = totalRating / reviews.length;
    
//     return averageRating;
//   };

//   const calculateRatingCounts = (reviews) => {
//     const ratingCounts = {
//       1: 0,
//       2: 0,
//       3: 0,
//       4: 0,
//       5: 0,
//     };

//     if (!reviews || reviews.length === 0) {
//       return ratingCounts;
//     }

//     reviews.forEach((review) => {
//       ratingCounts[review.rating]++;
//     });

//     return ratingCounts;
//   };

//   const calculateRatingPercentages = (reviews) => {
//     const ratingCounts = calculateRatingCounts(reviews);
//     const totalReviews = reviews.length;
  
//     const ratingPercentages = {
//       1: totalReviews === 0 ? 0 : (ratingCounts[1] / totalReviews) * 100,
//       2: totalReviews === 0 ? 0 : (ratingCounts[2] / totalReviews) * 100,
//       3: totalReviews === 0 ? 0 : (ratingCounts[3] / totalReviews) * 100,
//       4: totalReviews === 0 ? 0 : (ratingCounts[4] / totalReviews) * 100,
//       5: totalReviews === 0 ? 0 : (ratingCounts[5] / totalReviews) * 100,
//     };
  
//     return ratingPercentages;
//   };

//   const handleEditReview = () => {
//     dispatch(act.getGameReview({review: reviews, rating: reviews?.rating}))
//   };

//   const handleDeleteReview = () => {
//     dispatch(act.getDeleteReview(idReview))
//     // console.log("IIIIDDDD HANDLER",idReview);
//   };
  
  
//   const reviews = game?.Reviews || [];
//   const averageRating = calculateAverageRating(game?.Reviews);
//   const ratingCounts = calculateRatingCounts(game?.Reviews);
//   const ratingPercentages = calculateRatingPercentages(reviews);

//   const price = game && (game?.price_overview)
//   const gamePrice = game && (game?.price_overview);
//   const img = game && game?.header_image;
//   const bkId = game && game?.id;
//   const name = game && game?.name

//   const handleBack = () => {
//     history.push("/home");
//   };



//   console.log("GAMEEEEEEEEEEEEEEE",game);
//   // console.log(game && game.Reviews);
//   // console.log("REVIEEEEEEEEEEEEW", game?.Reviews[0].id);
//   // console.log(game?.Reviews[0].Users[0].profileImage);



//   return (
    
//     <div className={style.info}>
//       {isLoading ? (
//         <div className={style.loading}>
//           <PacmanLoader color="blue" size={80} speedMultiplier={1} />
//         </div>
//       ) : (
//         <div className={style.container}>
//           <div className={style.container_juego}>
//             <div className={style.container_texto}>
//               <div className={style.name_margen}>
//                 <h1 className={style.name} translate="no">
//                   {sanitizeText(game.name)}
//                 </h1>
//               </div>
//               <p className={style.descripcion}>
//                 {sanitizeText(game.detailed_description)}
//               </p>
//               <div className={style.comprar}>
//                 <p className={style.texto_comprar}>
//                   {`Buy ${sanitizeText(game.name)}`}
//                 </p>
//                 <div className={style.div_comprar}>
//                 <p className={style.texto_precio}>
//                   {`Price: ${
//                     sanitizeText(game.price_overview) ||
//                     "Free"
//                   }`}
//                 </p>
//                 <p className={style.texto_boton}>

//                   <button onClick={() => handleAdd(game)} className={style.buttonadd}>
//                     Add to Cart
//                   </button>
//                   <button onClick={() => handleAddWhish(game)} className={style.buttonWish}>
//                     Add to WhishList
//                   </button>
//                 </p>
//                 </div>
                
//               </div>
//             </div>
//             <div className={style.container_imagenes}>
//             <div className={style.image}>
//               <img
//                 className={style.img}
//                 src={game?.header_image}
//                 alt="Game"
//               />
//             </div>
            
//             <div className={style.container_screenshots}>
//   {game?.Videos && (
//     <video className={style.video} controls>
//       <source src={game?.Videos[0]?.video}  />
//     </video>
//   )}
  
//   {!game?.Videos &&
  
//     game?.Images.slice(0, 4).map((image, index) => (
//       <div key={index} className={style[`container_screenshots${index + 1}`]}>
//         <img
//           className={style.img}
//           src={image.image}
//           alt={`Screenshot ${index + 1}`}
//         />
//       </div>
//     ))}
//           {game?.Videos &&
//             game?.Images.slice(0, 3).map((image, index) => (
//               <div key={index} className={style[`container_screenshots${index + 1}`]}>
//                 <img
//                   className={style.img}
//                   src={image.image}
//                   alt={`Screenshot ${index + 1}`}
//                 />
//               </div>
//             ))}
//         </div>

//           </div>
//           </div>



//           <div className={style.detail_container}>

            
//             <div className={style.detail_left}>
//               <h2>
//                 <strong>Requirements </strong>
//               </h2>
//               <p>{sanitizeText(game?.pc_requirements.minimum)}</p>
//               <p>{sanitizeText(game.pc_requirements.recommended)}</p>
//               <h2>
//                 <strong>Languages </strong>
//               </h2>
//               <p>{sanitizeText(game?.Languages.map(l => `<p>${l.language}</p>`).join(', '))}</p>

//               <h2>
//                 <strong>Minimum age </strong>
//               </h2>
//               <p>{game.required_age}</p>
//               <h2>
//                 <strong>Developers </strong>
//               </h2>
//               <p>{sanitizeText(game?.Developers.map(d => `<p>${d.developer}</p>`).join(', '))}</p>
//             </div>




//             <div className={style.detail_rigth}>
//               <h2>
//                 <strong>Categories</strong>
//               </h2>
//               {/* {categoriesLimited && categoriesLimited.map((category) => ( */}
//                 <p>{sanitizeText(game?.Categories.map(c => `<p>${c.category}</p>`).join(', '))}</p>
//               {/* ))} */}
//               <h2>
//                 <strong>Genres </strong>
//               </h2>
//               <p>{sanitizeText(game?.Genres.map(g => `<p>${g.genre}</p>`).join(', '))}</p>
//               <h2>
//                 <strong>Released date </strong>
//               </h2>
//               <p>{game.release_date}</p>
//               <h2>
//                 <strong>ID :</strong>
//               </h2>
//               <p>{game?.id}</p>
//             </div>
              
//             </div>


//             <div className={style.reviews_container}>
                
//             <div className={style.promedio}>
              
//               <div className={style.promedioInfo}>
//               <h1 className={style.promedioNumber2}>{averageRating.toFixed(1)}</h1>
             
//               <div className={style.cantidadReviews}>
//               <h7 className={style.numeroReviews}>{reviews.length}</h7>
//               <h7> total reviews</h7>
//               </div>
    
//                 <div className={style.ratingCounts}>
//                    {[5, 4, 3, 2, 1].map((rating) => (
//                 <div key={rating} className={style.ratingCount}>
//               <div className={style.starRating}>
//                 <span className={style.ratingNumber}>{rating}</span>
//                 <span className={style.star}>★</span>
//               </div>
//             <div className={style.bar}>
//             <div
//             className={style.fill}
//             style={{ width: `${ratingPercentages[rating]}%`, backgroundColor: 'white'}}
//             ></div>
//             </div>
//             <div className={style.ratingPercentage}>
//               <span>{`${ratingPercentages[rating].toFixed(0)}%`}</span>
//               </div>
//          </div>
//     ))}
//   </div>
// </div>
// </div>


//                 <div className={style.opiniones}>

//                 {game?.Reviews &&
//                 game?.Reviews.map((review, index) => (
//                   <div className={style.opinion} key={index}>

//                     <div className={style.opiniontop} >

//                       <div className={style.opiniontopleft} >
//                         <img className={style.profileImage} src={review?.Users[0].profileImage} alt={`Screenshot`} />
//                        </div>
                       
//                        <div className={style.opiniontopright} >
//                         <h3>{review?.author}</h3>
//                         <p>{review?.Users[0].name}</p>
//                         <p>{review?.date}</p>
//                         <Rating rating={review?.rating} />
//                        </div> 

//                       </div>


//                     <div className={style.opinionback} >
//                       <p>{review?.reviews}</p>
//                       <p hidden>{idReview = review?.id}</p>
//                       {review?.Users[0].name  === datosUser.name &&
//                       <div className={style.opinionbuton} >
//                       <Link to={`reviews/${review?.id}` }>
//                       <button onClick={() => handleEditReview(review?.id)}>Edit Review</button>
//                       </Link>
//                       <button onClick={() => handleDeleteReview(review?.id)}>Delete Review</button>
//                       </div>
//                       }
//                     </div>

                      
                    
//                   </div>
//                 ))}

//                 </div>
                
            
//             </div>

//           </div>
//       )}
//     </div>
//   );
// };

// export default Detail;


import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { PacmanLoader } from "react-spinners";
import * as act from "../../redux/actions";
import { FaStar } from "react-icons/fa";


const Detail = (props) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const isLoading = game === undefined || game === null;
  // const genres = game && game?.genres;
  const [videoUrl, setVideoUrl] = useState("");
  console.log(videoUrl)
  // const categoriesLimited = game && game?.categories?.slice(0, 3);
  const id = props.match.params.id
  let idReview
  console.log(idReview)
  
  const datosUser = JSON.parse(localStorage.getItem("user"));
  console.log("asdfghjhgfds",datosUser?.name)


  
  useEffect(() => {
    if (id) {
      dispatch(gameDetail(id))
      .then(() => {
        const video = game?.Videos || "";
        setVideoUrl(video);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      setVideoUrl("");
    }
    
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch]);
  
  useEffect(() => {
    if (game) {
      const video = game?.Videos || "ssdds";
      setVideoUrl(video);
    }
  }, []);
  
  
  
  function sanitizeText(text) {
    if (typeof text === "string") {
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
      text = text.replace(/\*\*/g, "");
      return text;
    }
    return text;
  }
  
  const handleAdd = () => {
    dispatch(act.addCart({id: bkId, image: img, name:name , price: isNaN(price) ? 0 : price}));
  }
  
  const handleAddWhish = () => {
    dispatch(act.addWhishList({ id: bkId, price: isNaN(price) ? 0 : price, name:name, image: img }));
  };
  
  const Rating = ({ rating }) => {
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<FaStar key={i} color="white" />);
        } else {
          stars.push(<FaStar key={i} color="gray" />);
        }
      }
      return stars;
    };
  
    return <div style={{ display: "flex" }}>{renderStars()}</div>;
  };

  // promedio puntuacion
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    
    return averageRating;
  };

  const calculateRatingCounts = (reviews) => {
    const ratingCounts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    if (!reviews || reviews.length === 0) {
      return ratingCounts;
    }

    reviews.forEach((review) => {
      ratingCounts[review.rating]++;
    });

    return ratingCounts;
  };

  const calculateRatingPercentages = (reviews) => {
    const ratingCounts = calculateRatingCounts(reviews);
    const totalReviews = reviews.length;
  
    const ratingPercentages = {
      1: totalReviews === 0 ? 0 : (ratingCounts[1] / totalReviews) * 100,
      2: totalReviews === 0 ? 0 : (ratingCounts[2] / totalReviews) * 100,
      3: totalReviews === 0 ? 0 : (ratingCounts[3] / totalReviews) * 100,
      4: totalReviews === 0 ? 0 : (ratingCounts[4] / totalReviews) * 100,
      5: totalReviews === 0 ? 0 : (ratingCounts[5] / totalReviews) * 100,
    };
  
    return ratingPercentages;
  };

  // const handleEditReview = () => {
  //   dispatch(act.getGameReview({review: reviews, rating: reviews?.rating}))
  // };

  // const handleDeleteReview = () => {
  //   dispatch(act.getDeleteReview(idReview))
  //   window.location.reload()
  //   // console.log("IIIIDDDD HANDLER",idReview);
  // };
  
  
  const reviews = game?.Reviews || [];
  const averageRating = calculateAverageRating(game?.Reviews);
  // const ratingCounts = calculateRatingCounts(game?.Reviews);
  const ratingPercentages = calculateRatingPercentages(reviews);

  const price = game && (game?.price_overview)
  // const gamePrice = game && (game?.price_overview);
  const img = game && game?.header_image;
  const bkId = game && game?.id;
  const name = game && game?.name

  // const handleBack = () => {
  //   history.push("/home");
  // };



  console.log("GAMEEEEEEEEEEEEEEE",game);
  // console.log(game && game.Reviews);
  // console.log("REVIEEEEEEEEEEEEW", game?.Reviews[0].id);
  // console.log(game?.Reviews[0].Users[0].profileImage);



  return (
    
    <div className={style.info}>
      {isLoading ? (
        <div className={style.loading}>
          <PacmanLoader color="blue" size={80} speedMultiplier={1} />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.container_juego}>
            <div className={style.container_texto}>
              <div className={style.name_margen}>
                <h1 className={style.name} translate="no">
                  {sanitizeText(game.name)}
                </h1>
              </div>
              <p className={style.descripcion}>
                {sanitizeText(game.detailed_description)}
              </p>
              <div className={style.comprar}>
                <p className={style.texto_comprar}>
                  {`Buy ${sanitizeText(game.name)}`}
                </p>
                <div className={style.div_comprar}>
                <p className={style.texto_precio}>
                  {`Price: ${
                    sanitizeText(game.price_overview) ||
                    "Free"
                  }`}
                </p>
                <p className={style.texto_boton}>

                  <button onClick={() => handleAdd(game)} className={style.buttonadd}>
                    Add to Cart
                  </button>
                  <button onClick={() => handleAddWhish(game)} className={style.buttonWish}>
                    Add to WhishList
                  </button>
                </p>
                </div>
                
              </div>
            </div>
            <div className={style.container_imagenes}>
            <div className={style.image}>
              <img
                className={style.img}
                src={game?.header_image}
                alt="Game"
              />
            </div>
            
            <div className={style.container_screenshots}>
  {game?.Videos && (
    <video className={style.video} controls>
      <source src={game?.Videos[0]?.video}  />
    </video>
  )}
  
  {!game?.Videos &&
  
    game?.Images.slice(0, 4).map((image, index) => (
      <div key={index} className={style[`container_screenshots${index + 1}`]}>
        <img
          className={style.img}
          src={image.image}
          alt={`Screenshot ${index + 1}`}
        />
      </div>
    ))}
          {game?.Videos &&
            game?.Images.slice(0, 3).map((image, index) => (
              <div key={index} className={style[`container_screenshots${index + 1}`]}>
                <img
                  className={style.img}
                  src={image.image}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
            ))}
        </div>

          </div>
          </div>



          <div className={style.detail_container}>

            
            <div className={style.detail_left}>
              <h2>
                <strong>Requirements </strong>
              </h2>
              <p>{sanitizeText(game?.pc_requirements.minimum)}</p>
              <p>{sanitizeText(game.pc_requirements.recommended)}</p>
              <h2>
                <strong>Languages </strong>
              </h2>
              <p>{sanitizeText(game?.Languages.map(l => `<p>${l.language}</p>`).join(', '))}</p>

              <h2>
                <strong>Minimum age </strong>
              </h2>
              <p>{game.required_age}</p>
              <h2>
                <strong>Developers </strong>
              </h2>
              <p>{sanitizeText(game?.Developers.map(d => `<p>${d.developer}</p>`).join(', '))}</p>
            </div>




            <div className={style.detail_rigth}>
              <h2>
                <strong>Categories</strong>
              </h2>
              {/* {categoriesLimited && categoriesLimited.map((category) => ( */}
                <p>{sanitizeText(game?.Categories.map(c => `<p>${c.category}</p>`).join(', '))}</p>
              {/* ))} */}
              <h2>
                <strong>Genres </strong>
              </h2>
              <p>{sanitizeText(game?.Genres.map(g => `<p>${g.genre}</p>`).join(', '))}</p>
              <h2>
                <strong>Released date </strong>
              </h2>
              <p>{game.release_date}</p>
              <h2>
                <strong>ID :</strong>
              </h2>
              <p>{game?.id}</p>
            </div>
              
            </div>


            <div className={style.reviews_container}>
                
            <div className={style.promedio}>
              
              <div className={style.promedioInfo}>
              <h1 className={style.promedioNumber2}>{averageRating.toFixed(1)}</h1>
             
              <div className={style.cantidadReviews}>
              <h7 className={style.numeroReviews}>{reviews.length}</h7>
              <h7> total reviews</h7>
              </div>
    
                <div className={style.ratingCounts}>
                   {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className={style.ratingCount}>
              <div className={style.starRating}>
                <span className={style.ratingNumber}>{rating}</span>
                <span className={style.star}>★</span>
              </div>
            <div className={style.bar}>
            <div
            className={style.fill}
            style={{ width: `${ratingPercentages[rating]}%`, backgroundColor: 'white'}}
            ></div>
            </div>
            <div className={style.ratingPercentage}>
              <span>{`${ratingPercentages[rating].toFixed(0)}%`}</span>
              </div>
         </div>
    ))}
  </div>
</div>
</div>


                <div className={style.opiniones}>

                {game?.Reviews &&
                game?.Reviews.map((review, index) => (
                  <div className={style.opinion} key={index}>

                    <div className={style.opiniontop} >

                      <div className={style.opiniontopleft} >
                        <img className={style.profileImage} src={review?.Users[0].profileImage} alt={`Screenshot`} />
                       </div>
                       
                       <div className={style.opiniontopright} >
                        <h3>{review?.author}</h3>
                        <p>{review?.Users[0].name}</p>
                        <p>{review?.date}</p>
                        <Rating rating={review?.rating} />
                       </div> 

                      </div>


                    <div className={style.opinionback} >
                      <p>{review?.reviews}</p>
                      <p hidden>{idReview = review?.id}</p>
                      {/* {review?.Users[0].name  === datosUser.name &&
                      <div className={style.opinionbuton} >
                      <Link to={`reviews/${review?.id}` }>
                      <button onClick={() => handleEditReview(review?.id)}>Edit Review</button>
                      </Link>
                      <button onClick={() => handleDeleteReview(review?.id)}>Delete Review</button>
                      </div>
                      } */}
                    </div>

                      
                    
                  </div>
                ))}

                </div>
                
            
            </div>

          </div>
      )}
    </div>
  );
};

export default Detail;

