

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.css";
import * as act from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../components/Pagination/Pagination";

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act.languagesGames());
  }, [dispatch]);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(8);
  console.log(setResultsPerPage)
  const search = useSelector((state) => state.search);
  const gamesFilterLanguages = useSelector(state => state.languagesGames);



  const types =  search 
  ? [...new Set(search.map((game) => game.type))]
  : [];

  const categories = search
  ? search.map((game) => game.categories?.map((category) => category.description))
      .flat()
  : [];

  const filteredcategories = categories
  ? [...new Set(categories.filter((description) => description))]
  : [];

  const Genres = search
  ? search.map((game) => game.genres?.map((category) => category.description))
      .flat()
  : [];
  const filteredgenres = Genres
  ? [...new Set(Genres.filter((description) => description))]
  : [];

  const resetfilters = ()=>{
    setCurrentPage(1);
    handleclean();
    dispatch(act.resetfilters());
  }

  const filterprice = (e)=>{
    setCurrentPage(1);
    dispatch(act.orderBy(e.target.value));
  }
  
  const filterage = (e)=>{
    setCurrentPage(1);
    dispatch(act.filterage(e.target.value));
  }
const filtertype = (e)=>{
  setCurrentPage(1);
  dispatch(act.filtertype(e.target.value));
}


  const filterfree = (e)=>{
    setCurrentPage(1);
    dispatch(act.filterfree(e.target.value));
  }


  const filterplatforms = (e)=>{
    setCurrentPage(1);
    dispatch(act.filterplatforms(e.target.value));
  }

  const filtercategories = (e)=>{
    setCurrentPage(1);
    dispatch(act.filtercategories(e.target.value));
  }

  const filtergenres = (e)=>{
    setCurrentPage(1);
    dispatch(act.filtergenres(e.target.value));
  }
  const filterlanguages = (e)=>{
    setCurrentPage(1);
    dispatch(act.filterlanguages(e.target.value));
  }

  const filtercontroller = (e)=>{
    setCurrentPage(1);
    dispatch(act.filtercontroller(e.target.value));
  } 




  const [loading, setLoading] = useState(false);
  const maxPageButtons = 3;

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      setLoading(true);
      dispatch(act.getByName(name)).then(() => {
        handleclean();
        setCurrentPage(1);
        setLoading(false);
      });
    }
  };
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = search ? search.slice(indexOfFirstResult, indexOfLastResult) : [];
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  


  
  console.log(search)

  const handleclean = () =>{
    document.getElementById("Type").value = "none";
    document.getElementById("Required age").value = "none";
    document.getElementById("Is free").value = "none";
    document.getElementById("Price").value = "none";
    document.getElementById("Platforms").value = "none";
    document.getElementById("Categories").value = "none";
    document.getElementById("Genres").value = "none";
    document.getElementById("Controller").value = "none";
    document.getElementById("Languages").value = "none";
}

  return (
    <div>
      <div className={style.searchbar}>
        <div className={style.searchcontainer}>
          <input
            className={style.search}
            placeholder="search..."
            type="text"
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}

          />
          <FontAwesomeIcon
            className={style.buttonsearch}
            onClick={handleButton}
            icon={faSearchengin}
            size="xl"
          />
        </div>
      </div>
      <div className={style.searchyfilters}>
        <div className={style.results}>
          {loading ? (
            <div className={style.loadingContainer}>
              <div className={style.loading}></div>
            </div>
          ) : (
            <>
              {currentResults.length > 0 ? (
                <>
                  <CardsContainer className={style.CardsContainer} gameComingSoon={currentResults} />
                  <Pagination
                    resultsPerPage={resultsPerPage}
                    totalResults={search ? search.length : 0}
                    currentPage={currentPage}
                    paginate={paginate}
                    maxPageButtons={maxPageButtons}
                  />
                </>
              ) : (
                
                  <div className={style.loadingContainer}>
                    <p className={style.notfound}>Game not found.</p>
                  </div>
                
              )}
            </>
          )}
        </div>
        <div className={style.filters}>
          <div>
            <button className={style.reset}onClick={()=>resetfilters()}>Reset Filters</button>
          </div>
          <div className={style.option}>
                  <h3>Price:</h3>
                  <select id="Price"  defaultValue="none" onChange={e => filterprice(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      <option value="asc" >ascendant</option>
                      <option value="des" >descendant</option>
                  </select>
          </div>
          <div className={style.option}>
                  <h3>Type:</h3>
                  <select id="Type" defaultValue="none" onChange={e => filtertype(e)}>
                  <option disabled={true} value="none" >select an option</option>
                              {types ? types.map((type, key)=>{
                                return(
                                  <option value={type} key={key}>{type}</option>
                                )
                              }): "lool"}
                          )
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Required age:</h3>
                  <select id="Required age" defaultValue="none"  onChange={e => filterage(e)}>
                  <option disabled={true} value="none" >select an option</option>
                              <option value="18" >+18</option>
                          
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Is free:</h3>
                  <select id="Is free" defaultValue="none"  onChange={e => filterfree(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      <option value="false" >true</option>
                      <option value="true" >false</option>
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Platforms:</h3>
                  <select id="Platforms" defaultValue="none"  onChange={e => filterplatforms(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      <option value="windows" >windows</option>
                      <option value="mac" >mac</option>
                      <option value="linux" >linux</option>
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Categories:</h3>
                  <select id="Categories" defaultValue="none"  onChange={e => filtercategories(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      {filteredcategories.map((temp, key) =>{
                          return (
                              <option value={temp} key={key}>{temp}</option>
                          )
                      })}
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Genres:</h3>
                  <select id="Genres" defaultValue="none"  onChange={e => filtergenres(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      {filteredgenres.map((temp, key) =>{
                          return (
                              <option value={temp} key={key}>{temp}</option>
                          )
                      })}
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Languages:</h3>
                  <select id="Languages" defaultValue="none"  onChange={e => filterlanguages(e)}>
                  <option disabled={true} value="none" >select an option</option>
                      {gamesFilterLanguages.map((temp, key) =>{
                          return (
                              <option value={temp.language} key={key}>{temp.language}</option>
                          )
                      })}
                  </select>
              </div>
              <div className={style.option}>
                  <h3>Controller support:</h3>
                  <select id="Controller" defaultValue="none"  onChange={e => filtercontroller(e)}>
                  <option disabled={true} value="none" >select an option</option>
                  <option value="full" >full</option>
                  </select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;






