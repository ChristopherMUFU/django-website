import { useEffect, useState } from "react";
import Carte from "../components/Carte";
import Card from "../components/Carte/card";
import "./commander.css";
import { sendrequest } from "../middlewares/request";
import { IconButton } from "@material-ui/core";

const Commander = () => {
  const [active, setActive] = useState(5); // id du premier element de la liste
  const [activeCarte, setActiveCarte] = useState(false);
  const [datas, setDatas] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [dishesDisplayed, setDishesDisplay] = useState(false);  

  // Booleans that will only allow the component to render when the requests have returned the datas
  const [isDataLoading, setDataLoading] = useState(false);
  const [isCategoryLoading, setCategoryLoading] = useState(false);
  const [isTest, setTest] = useState(false);
  // activeCarte && (window.document.body.style.overflow = "hidden")

  activeCarte
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");

  const fetchData = async () => {
    sendrequest("get", "restaurant/produit/", setDatas, setDataLoading);
    sendrequest(
      "get",
      "restaurant/categorie/",
      setMenuCategories,
      setCategoryLoading
    );
  };

  useEffect(() => {
    fetchData();
  }, [active]);

  const selectDishesPerCategory = () => {

      const selectedDishes = datas
        // We filter the data :
        .filter((data) => {
          return (
            data.categorie === active
          )
        })
        //Once filtered, we can go through the selection to display them
        .map((data) => {
          return <Card key={data.id} {...data} />;
        });
      return selectedDishes;
  };

  return (
    <div className='commander'>
     
      <div className='commander__container'>    
        {isCategoryLoading && (
          <Carte
            active={active}
            setActive={setActive}
            activeCarte={activeCarte}
            setActiveCarte={setActiveCarte}
            categories={menuCategories}
            setDishesDisplay={setDishesDisplay}
          />
        )}    

        {isDataLoading && (
          <>
            <div className='commander__container__cards'>
              {selectDishesPerCategory()}
            </div>

            <div
              className={"commander__carte " + (activeCarte ? "white" : null)}>
              <IconButton onClick={() => setActiveCarte(() => !activeCarte)}>
                <i
                  className={
                    "fas fa-arrow-" + (activeCarte ? "left" : "right")
                  }></i>
              </IconButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Commander;
