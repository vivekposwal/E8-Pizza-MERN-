import React, { useState, useEffect } from "react";
//import pizzas from "../pizzadata.js";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import { Caraousal } from "../components/Caraousal";
import { CarouselData } from "../components/CarouselData";

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzasReducers);
  const { loading, error, pizzas } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div style={{ paddingTop: "5%" }}>
        <Caraousal slides={CarouselData} />
      </div>
      <div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error="Something went wrong" />
          ) : (
            pizzas.map((pizza) => {
              return (
                <div className="col-md-4" key={pizza._id}>
                  <div>
                    <Pizza pizza={pizza} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Homescreen;
