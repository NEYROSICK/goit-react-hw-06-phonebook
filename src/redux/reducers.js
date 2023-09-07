import { combineReducers } from 'redux';
import { actions } from './constants';

const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
// const initialContacts = [
//   {
//     id: 'id-1',
//     url: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Stepan Giga',
//     number: '(067) 944-51-64',
//   },
//   {
//     id: 'id-2',
//     url: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Veselyi Harakternyk',
//     number: '(098) 321-33-22',
//   },
//   {
//     id: 'id-3',
//     url: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Blyskucha Piatka',
//     number: '(095) 554-85-76',
//   },
//   {
//     id: 'id-4',
//     url: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Zolotyi Obodok',
//     number: '(063) 732-51-43',
//   },
//   {
//     id: 'id-5',
//     url: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//     name: 'Dwayne Johnson',
//     number: '(760) 756-75-68',
//   },
// ];

const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case actions.addContact:
      return [action.payload, ...state];
    case actions.removeContact:
      return state.filter(contact => contact.name !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  if (action.type === actions.changeFilter) {
    return action.payload;
  }
  return state;
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
