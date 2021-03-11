import React from 'react';
import imgEditButton from '../../images/pen.svg';
import imgAddButton from '../../images/plus.svg';
import api from '../../utils/api.js';
import Card from '../Card/Card.js';

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

    api
      .getCards()
      .then((data) => {
        setCards(data)
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
        {
          cards.map((card) => (
            <Card 
              key={card._id}
              item={card}
            />
          ))
        }
      </section>
    </main>
  )
}

export default Main;