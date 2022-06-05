import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import setCurrentUser from '../../redux/user/user.actions';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../firebase/firebase.utils';

const useUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
};

export default useUser;
