import { actions } from './constants';

export const addContact = contact => {
  return {
    type: actions.addContact,
    payload: contact,
  };
};

export const removeContact = name => {
  return {
    type: actions.removeContact,
    payload: name,
  };
};

export const changeFilter = value => {
  return {
    type: actions.changeFilter,
    payload: value,
  };
};
