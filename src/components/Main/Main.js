import React from 'react';
import imgEditButton from '../../images/pen.svg';
import imgAddButton from '../../images/plus.svg';
import api from '../../utils/api.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    api
      .getUserInfoFromServer()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img className="profile__avatar" alt="Фото Аватара" src={userAvatar}/>
          <div 
            onClick={props.onEditAvatar} 
            aria-label="Редактировать аватар"
            className="profile__avatar-button" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button 
            onClick={props.onEditProfile}
            aria-label="Редактировать" 
            type="button" 
            className="profile__edit-button">
            <img src={imgEditButton} alt="Иконка ручки" />
          </button> 
          <p className="profile__subtitle">{userDescription}</p> 
        </div>
        <button 
          onClick={props.onAddPlace}
          aria-label="Добавить фото" 
          title="+" type="button" 
          className="profile__add-button">
          <img src={imgAddButton} alt="Иконка плюса" />
        </button>
      </section>
      <section className="elements">
        <article className="element">
          <div className="element__photo-wrap">
            <img className="element__photo" src="./images/karachaevsk.png" alt="Фотография Байкала" />
            <button className="element__delete" type="button"><img src="<%=require('./images/delete.svg')%>" alt="Иконка урны" /></button>
          </div>  
          <div className="element__desc">
            <h2 className="element__desc-title">Карачаевск</h2>
            <div className="element__like">
              <button className="element__desc-like" type="button"><img src="<%=require('./images/heart.svg')%>" alt="Иконка сердца" /></button>
              <p className="element__like_counter">0</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

// function handleEditAvatarClick() {
//   document.querySelector('.popup_type_change-avatar').classList.add('popup_opened');
// }

// function handleEditProfileClick() {
//   document.querySelector('.popup_type_edit').classList.add('popup_opened');
// }

// function handleAddPlaceClick() {
//   document.querySelector('.popup_type_add').classList.add('popup_opened');
// }

export default Main;