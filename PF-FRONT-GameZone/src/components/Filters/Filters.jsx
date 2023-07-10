import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  
  const gamesFilterPlatform = useSelector(state => state.gamesPlatforms);
  const gamesFilterLanguages = useSelector(state => state.languagesGames);
  const gamesFilterCategories = useSelector(state => state.categoriesGames);
  const gamesFilterDevelopers = useSelector(state => state.developersGames);
  const gamesFilterGenres = useSelector(state => state.genresGames);

  useEffect(() => {
    dispatch(act.platformsAll());
    dispatch(act.languagesGames());
    dispatch(act.categoriesGames());
    dispatch(act.developersGames());
    dispatch(act.genresGames());
  }, [dispatch]);

  const platformFilter = gamesFilterPlatform.filter(platform => platform);
  const languagesFilter = gamesFilterLanguages.filter(languages => languages);
  const categoriesFilter = gamesFilterCategories.filter(categories => categories);
  const developersFilter = gamesFilterDevelopers.filter(developers => developers);
  const genresFilter = gamesFilterGenres.filter(genres => genres);

  return (
    <>
      <select className={style.select}>
        <option hidden>Platforms</option>
        {platformFilter.map(({ platform, id }) => (
          <option key={id} value={platform} className={style.option}>{platform}</option>
        ))}
      </select>

      <select className={style.select}>
        <option hidden>Languages</option>
        {languagesFilter.map(({ language, id }) => (
          <option key={id} value={language} className={style.option}>{language}</option>
        ))}
      </select>

      <select className={style.select}>
        <option hidden>Categories</option>
        {categoriesFilter.map(({ category, id }) => (
          <option key={id} value={category} className={style.option}>{category}</option>
        ))}
      </select>

      <select className={style.select}>
        <option hidden>Developers</option>
        {developersFilter.map(({ developer, id }) => (
          <option key={id} value={developer} className={style.option}>{developer}</option>
        ))}
      </select>

      <select className={style.select}>
        <option hidden>Genres</option>
        {genresFilter.map(({ genre, id }) => (
          <option key={id} value={genre} className={style.option}>{genre}</option>
        ))}
      </select>
    </>
  );
};

export default Filters;

