import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';

function App() {
  //хук открытия поп-апа профиля
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false); 
  //хук открытия поп-апа добавления новой карточки
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  //хук открытия поп-апа аватара
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  //хук открытия поп-апа большого фото
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name='edit'
        title='Редактировать профиль'
        submitButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="user-name" name="userName" className="popup__input popup__input_type_name" type="text" placeholder="Имя" required minLength={2} maxLength={40} />
        <span id="user-name-error" className="popup__error" />
        <input id="user-job" name="userJob" className="popup__input popup__input_type_job" type="text" placeholder="О себе" required minLength={2} maxLength={200} />
        <span id="user-job-error" className="popup__error" />
      </PopupWithForm>
      <PopupWithForm 
        name='add' 
        title='Новое место'
        submitButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="name-photo" name="namePhoto" className="popup__input popup__input_type_photo-name" type="text" placeholder="Название" required minLength={2} maxLength={30} />
        <span id="name-photo-error" className="popup__error" />
        <input id="link-photo" name="linkPhoto" className="popup__input popup__input_type_link-photo" type="url" placeholder="Ссылка на картинку" required />
        <span id="link-photo-error" className="popup__error" />
      </PopupWithForm>
      <PopupWithForm 
        name='delete-card' 
        title='Вы уверены?'
        submitButton='Да'
      />
      <PopupWithForm 
        name='change-avatar' 
        title='Обновить аватар'
        submitButton='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="link-avatar" name="linkAvatar" className="popup__input popup__input_type_link-avatar" type="url" placeholder="Ссылка на аватар" required />
        <span id="link-avatar-error" className="popup__error" />
      </PopupWithForm>
      <ImagePopup
        isOpen={selectedCard}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
