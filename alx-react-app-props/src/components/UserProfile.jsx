import { useContext } from 'react';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);

  console.log('UserProfile received:', userData);

  return <UserInfo />;
}

export default UserProfile;