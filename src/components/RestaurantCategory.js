// import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import CategoryList from "./CategoryList";

const RestaurantCategory = (categoryList, showItems,setShowIndex) => {
  const { itemCards, title } = categoryList?.card?.card;


  const handleClick = () =>{
    // setShowIndex();
  }
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={handleClick}>
            <span style={{ fontWeight: "bolder" }}>
              {title} ({itemCards.length})
            </span>
          </Accordion.Header>
          {showItems && <CategoryList itemCards={itemCards} />}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RestaurantCategory;
