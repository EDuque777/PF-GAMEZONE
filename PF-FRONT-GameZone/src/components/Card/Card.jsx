import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as act from '../../redux/actions';
import style from './Card.module.css';
import { useHistory } from 'react-router-dom';

const Card = (props) => {
  let { id ,price, name, image, appid } = props;

  price = parseFloat(isNaN(price) ? 0 : price) ?? 0;


  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isShoppCartRoute = location.pathname === "/cart";
  const isWhishListRoute = location.pathname === "/whishlist";
  // const wholePart = Math.floor(price / 100);
  // const partDecimal = (price % 100).toString().padStart(2, '0');
  // const formattedNumber = parseFloat(`${wholePart}.${partDecimal}`);

  const handleAdd = () => {
      dispatch(act.addCart({ id, price: price, name, image }));
  };

  const handleAddWhish = () => {
      dispatch(act.addWhishList({ id, price: price, name, image }));
  };

  const handleRemove = () => {
    dispatch(act.removeCart(id || appid));
  };

  const handelRemoveWhishList = () => {
    dispatch(act.removeWhishList(id || appid));
  };

  const handleClick = (appid, id) => {
    history.push(`/detail/${appid || id}`);
  };

  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const maxTitleLength = 35;
      const title = titleElement.innerText;
      if (title.length > maxTitleLength) {
        titleElement.innerText = title.slice(0, maxTitleLength) + '...';
      }
    }
  }, []);

  //console.log(appid);

  return (
    <li className={style.box} key={id || appid}>
      <div className={style.imagecontainer} onClick={() => { handleClick(id || appid) }}>
        <img className={style.image} src={image} alt={name}></img>
        <h1 ref={titleRef} className={style.name}>{name}</h1>
      </div>
      <h3 className={style.price}>{price !== undefined && price !== 0 ? `$ ${price}` : 'Free'}</h3>
      {!isShoppCartRoute && !isWhishListRoute && (
        <div>
          <button className={style.button} onClick={() => { handleAddWhish() }}>Add to WhishList</button>
          <button className={style.buttonadd} onClick={() => { handleAdd() }}>Add to cart</button>
        </div>
      )}
      {isWhishListRoute && (
        <div>
          <button className={style.buttonadd} onClick={() => { handleAdd() }}>Add to cart</button>
          <button className={style.botonBorrar} onClick={() => { handelRemoveWhishList() }}>Take out</button>
        </div>
      )}
      {isShoppCartRoute && (
        <button className={style.botonBorrar} onClick={() => { handleRemove() }}>Take out</button>
      )}
    </li>
  );
};

export default Card;