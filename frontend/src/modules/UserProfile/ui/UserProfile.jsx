import classes from './UserProfile.module.css'
import {ProfileMenu} from "@modules/ProfileMenu/ui/ProfileMenu";
import {MOCK_USERS} from "@modules/UsersCard/ui/UsersCardList";


export const UserProfile = () => {

  return (
    <ProfileMenu profile={MOCK_USERS} />
  )
}