import classes from './ProfileMenu.module.css'
import {useLocation} from "react-router-dom";
import {ButtonBack} from "@shared/button-back/ui/ButtonBack/ButtonBack";

const MOCK_USERS = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    specialization: 'frontend',
    avatar: '',
    nickname: '@ivanfront',
    desc: 'Фронтендер, 3 года опыта, люблю React и кастомные дизайн-системы. В свободное время катаюсь на велике и путешествую.',
  },
]

export const ProfileMenu = (props) => {
  const {
    profile
  } = props

  const location = useLocation()
  const user = profile ? profile[location.pathname.at(-1) - 1] : MOCK_USERS[0]
  console.log(user)

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileBox}>
        <div className={classes.photoBox}>
          {profile && (
            <ButtonBack className={classes.buttonBack}/>
          )}
          {user.avatar ? (
            <img src={user.avatar} alt={'фото пользователя'} className={classes.photoImg} />
          ) : (
            <div className={classes.photoStub}></div>
          )}
          <div className={classes.specBox}>{user.specialization}</div>
          <div className={classes.nameSurname}>
            <span>{user.firstName}</span> <br /> <span>{user.lastName}</span>
          </div>
        </div>
      </div>
      <div className={classes.tgBox}>
        <a
          className={classes.link}
          href={`https://t.me/${user.nickname.slice(1)}`}
        >
          {user.nickname}
        </a>
      </div>
      <div className={classes.descSection}>
        <div className={classes.descLabel}>Описание:</div>
        <div className={classes.descBody}>{user.desc}</div>
      </div>
      <button className={classes.purpleBtn}>{profile ? 'Пригласить в команду' : 'Отправить заявку на перезачеты'}</button>
    </div>
  )
}