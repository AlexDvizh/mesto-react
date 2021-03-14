import React from 'react';

function ImagePopup(props) {
  let isOpen = Boolean(props.card)

  // let popupVisibleClass;

  // card ? popupVisibleClass='popup_opened' : popupVisibleClass='';

  return (
    <div className={`popup popup_type_open ${props.isOpen ? 'popup_opened' : ''}`}>
      <form name="photoViewForm" className="popup__box">
        <img className="popup__image" src={isOpen ? props.card.link : "#"} alt={props.card.name} />
        <button type="button" className="popup__close popup__close-img" onClick={props.onClose} />
        <h3 className="popup__img-title">{props.card.name}</h3>
      </form>
    </div>
  )
}

export default ImagePopup;