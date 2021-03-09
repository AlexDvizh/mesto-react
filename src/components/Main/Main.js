import React from 'react';
import imgEditButton from '../../images/pen.svg';
import imgAddButton from '../../images/plus.svg';

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img className="profile__avatar" alt="Фото Аватара"/>
          <div 
            onClick={handleEditAvatarClick} 
            aria-label="Редактировать аватар" 
            className="profile__avatar-button" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button 
            onClick={handleEditProfileClick}
            aria-label="Редактировать" 
            type="button" 
            className="profile__edit-button">
            <img src={imgEditButton} alt="Иконка ручки" />
          </button> 
          <p className="profile__subtitle">Исследователь океана</p> 
        </div>
        <button 
          onClick={handleAddPlaceClick}
          aria-label="Добавить фото" 
          title="+" type="button" 
          className="profile__add-button">
          <img src={imgAddButton} alt="Иконка плюса" />
        </button>
      </section>
      <section className="elements">
      </section>
    </main>
  )
}

function handleEditAvatarClick() {
  document.querySelector('.popup_type_change-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add').classList.add('popup_opened');
}

export default Main;