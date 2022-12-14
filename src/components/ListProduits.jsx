import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ListProduits() {
  const { id } = useParams();
  const [produits, setProduits] = useState([]);
  const [p, setP] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://dummyjson.com/carts/${id}`);
      return res.data;
    };

    getData().then((prod) => {
      setProduits(prod.products);
      setP(prod);
    });
  }, [id]);
  console.log(produits);
  let stock1 = 0;
  let stock2 = 0;

  let content = "";
  if (produits)
    content = (
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>quantity</th>
          <th>total</th>
          <th>discountPercentage</th>
          <th>discountedPrice</th>
        </tr>
        {produits.map((item) => {
          return (
            <>
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.discountPercentage}</td>
              </tr>
            </>
          );
        })}
        <tr>
          <td colSpan={6}>
            Total : {p.total} - totalQuantity : {p.totalQuantity}- nombre de
            Produits : {produits.length}
          </td>
        </tr>
      </table>
    );
  else content = "Wait...";

  return content;
}
