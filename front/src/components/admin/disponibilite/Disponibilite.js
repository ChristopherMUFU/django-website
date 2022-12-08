import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableBox from "../../table/Table";
import {URL, sendrequest} from "../../../middlewares/request";

const proprietes = ["Nom", "Disponibilité"];

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "6rem",
    marginBottom: "2rem",
    color: "rgb(86 85 85)",
  },
});

const Disponibilite = () => {
  const styles = useStyles();
  const [product, setProduct] = useState(undefined);
  const [isproductLoading, setProductLoading] = useState(false);

  const get_product = async () => {
    sendrequest(
      "get",
      "restaurant/produit/",
      setProduct,
      setProductLoading
    );
  };

  const updateDisponibilite = async (id, disponibilite) => {
    await axios.put(URL + "restaurant/disponibilitePlats/", {
        id,
        disponibilite,
    });
  };

  useEffect(() => {
    get_product();

  }, []);

  return (
    <div >
      {isproductLoading && (
      <TableBox
        proprietes={proprietes}
        donnees={product}
        action={updateDisponibilite}
      />
      )}
    </div>
  );
};
export default Disponibilite;
