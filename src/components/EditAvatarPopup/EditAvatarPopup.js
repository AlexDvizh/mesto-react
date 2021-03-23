import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup(props) {

  const userAvatar = React.useRef();

  const [avatarStatus, setAvatarStatus] = React.useState(''); 

  function handleSubmit(evt) {
    evt.preventDefault();
  
    props.onUpdateAvatar({
      avatar: userAvatar.current.value
    });
    setAvatarStatus('');
  } 

  return (
    <PopupWithForm 
      name='change-avatar' 
      title='Обновить аватар'
      submitButton='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="link-avatar" name="linkAvatar" className="popup__input popup__input_type_link-avatar" 
        type="url" placeholder="Ссылка на аватар" ref={userAvatar} value={avatarStatus} 
        onChange={(evt) => setAvatarStatus(evt.target.value)} required />
      <span id="link-avatar-error" className="popup__error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;