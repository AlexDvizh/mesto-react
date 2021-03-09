import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <template className="element-template" />
      <div className="popup popup_type_open">
        <form name="photoViewForm" className="popup__box">
          <img className="popup__image" src="#" alt="#" />
          <button type="button" className="popup__close popup__close-img" />
          <h3 className="popup__img-title" />
        </form>
      </div>
      <div className="popup popup_type_edit">
        <div className="popup__content">
          <button type="button" className="popup__close" />
          <form name="profileEditForm" className="popup__form popup__form_profile">
            <h3 className="popup__form-title">Редактировать профиль</h3>
            <input id="user-name" name="userName" className="popup__input popup__input_type_name" type="text" placeholder="Имя" required minLength={2} maxLength={40} />
            <span id="user-name-error" className="popup__error" />
            <input id="user-job" name="userJob" className="popup__input popup__input_type_job" type="text" placeholder="О себе" required minLength={2} maxLength={200} />
            <span id="user-job-error" className="popup__error" />
            <button type="submit" className="popup__form-save">Сохранить</button>
          </form>  
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__content popup__content_type_add">
          <button type="button" className="popup__close popup__close_photo" />
          <form name="photoAddForm" className="popup__form popup__form_add-place">
            <h3 className="popup__form-title">Новое место</h3>
            <input id="name-photo" name="namePhoto" className="popup__input popup__input_type_photo-name" type="text" placeholder="Название" required minLength={2} maxLength={30} />
            <span id="name-photo-error" className="popup__error" />
            <input id="link-photo" name="linkPhoto" className="popup__input popup__input_type_link-photo" type="url" placeholder="Ссылка на картинку" required />
            <span id="link-photo-error" className="popup__error" />
            <button type="submit" className="popup__form-save popup__form-save_type_add">Создать</button>
          </form>  
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__content popup__content_type_delete">
          <button type="button" className="popup__close popup__close-delete" />
          <form name="cardDelete" className="popup__form popup__form_delete">
            <h3 className="popup__form-title">Вы уверены?</h3>
            <button type="submit" className="popup__form-save popup__form-save_type_delete">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_change-avatar">
        <div className="popup__content popup__content_type_avatar">
          <button type="button" className="popup__close popup__close-avatar" />
          <form name="changeAvatar" className="popup__form popup__form_change-avatar">
            <h3 className="popup__form-title popup__form-title_avatar">Обновить аватар</h3>
            <input id="link-avatar" name="linkAvatar" className="popup__input popup__input_type_link-avatar" type="url" placeholder="Ссылка на аватар" required />
            <span id="link-avatar-error" className="popup__error" />
            <button type="submit" className="popup__form-save popup__form-save_type_avatar">Сохранить</button> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
