import classes from './ProfileMenu.module.css'

const MOCK_USERS = [
  {
    id: 1,
    name: 'Иван',
    surname: 'Иванов',
    specialization: 'frontend',
    photo: '',
    telegram: '@ivanfront',
    desc: 'Фронтендер, 3 года опыта, люблю React и кастомные дизайн-системы. В свободное время катаюсь на велике и путешествую.',
  },
]

export const ProfileMenu = () => {
  const user = MOCK_USERS[0]

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileBox}>
        <div className={classes.photoBox}>
          {user.photo ? (
            <img src={user.photo} alt={'фото пользователя'} className={classes.photoImg} />
          ) : (
            <div className={classes.photoStub}></div>
          )}
          <div className={classes.specBox}>{user.specialization}</div>
          <div className={classes.nameSurname}>
            <span>{user.name}</span> <br /> <span>{user.surname}</span>
          </div>
        </div>
      </div>
      <div className={classes.tgBox}>
        {user.telegram}
      </div>
      <div className={classes.descSection}>
        <div className={classes.descLabel}>Описание:</div>
        <div className={classes.descBody}>{user.desc}</div>
      </div>
      <button className={classes.purpleBtn}>Отправить заявку на перезачеты</button>
    </div>
  )
}