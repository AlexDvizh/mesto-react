import React from 'react';

function ImagePopup({card, onClose}) {
  let popupVisibleClass;

  card ? popupVisibleClass='popup_opened' : popupVisibleClass='';

  return (
    <div className={`popup popup_type_open ${popupVisibleClass}`}>
      <form name="photoViewForm" className="popup__box">
        <img className="popup__image" src={card.link} alt={card.name} />
        <button type="button" className="popup__close popup__close-img" onClick={onClose} />
        <h3 className="popup__img-title">{card.name}</h3>
      </form>
    </div>
  )
}

export default ImagePopup;