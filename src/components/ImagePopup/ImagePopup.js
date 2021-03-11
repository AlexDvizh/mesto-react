import React from 'react';

function ImagePopup () {
  return (
    <div className="popup popup_type_open">
      <form name="photoViewForm" className="popup__box">
        <img className="popup__image" src="#" alt="#" />
        <button type="button" className="popup__close popup__close-img" />
        <h3 className="popup__img-title" />
      </form>
    </div>
  )
}

export default ImagePopup;