import {createRef} from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function refresh() {
  var item = {};
  const state = navigationRef.current.getRootState();
  if (state && state?.routes?.length > 0) {
    item = state?.routes[state?.routes?.length - 1];
    navigationRef.current?.dispatch(
      StackActions.replace(item.name, item.params),
    );
  } else {
    navigationRef.current?.navigate('DiscoverScreen');
  }
}

export function goBack() {
  navigationRef.current?.goBack();
}
