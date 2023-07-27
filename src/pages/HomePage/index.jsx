import { useState } from "react";
import { DefaultTemplate } from "../../componens/DefaulTemplate";
import { Form } from "../../componens/Form";
import { List } from "../../componens/List";
import { v4 as uuidv4 } from "uuid";

export const HomePage = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = (formData) => {
    const newCard = { ...formData, id: uuidv4() };
    setCardList([...cardList, newCard]);
  };

  const removeCard = (removeId) => {
    const newCardList = cardList.filter((card) => card.id !== removeId);
    setCardList(newCardList);
  };
  return (
    <DefaultTemplate>
      <Form addCard={addCard} cardList={cardList} />
      <List cardList={cardList} removeCard={removeCard} />
    </DefaultTemplate>
  );
};
