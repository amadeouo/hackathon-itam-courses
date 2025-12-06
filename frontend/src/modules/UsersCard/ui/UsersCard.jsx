import { memo } from 'react'
import classes from './UsersCard.module.css'

export const UsersCard = memo(({ user }) => {
  const { firstName, lastName, avatar, specialization } = user

  return (
    <div className={classes.card}>

      <div className={classes.avatarWrapper}>
        {avatar ? (
          <div>
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className={classes.avatar}
            />
            {specialization && (
              <p className={classes.specialization}>
                {specialization}
              </p>
            )}
          </div>
        ) : (
          <div className={classes.avatarPlaceholder}>
            {specialization && (
              <p className={classes.specialization}>
                {specialization}
              </p>
            )}
          </div>
        )}
      </div>
      
      <div className={classes.content}>
        <h3 className={classes.name}>
          {firstName} {lastName}
        </h3>
      </div>
    </div>
  )
})
