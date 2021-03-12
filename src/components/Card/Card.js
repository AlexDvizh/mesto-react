import React from 'react';
import imgDelete from '../../images/delete.svg';
import imgLike from '../../images/heart.svg';

function Card({card, onCardClick}) {

  //вызываем обработчик handleCardClick из компонента Card
  function handleClick() {
    onCardClick(card)
  }

  return (
    <article className="element">
      <div className="element__photo-wrap">
        <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
        <button className="element__delete" type="button"><img src={imgDelete} alt="Иконка урны" /></button>
      </div>  
      <div className="element__desc">
        <h2 className="element__desc-title">{card.name}</h2>
        <div className="element__like">
          <button className="element__desc-like" type="button"><img src={imgLike} alt="Иконка сердца" /></button>
          <p className="element__like_counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;