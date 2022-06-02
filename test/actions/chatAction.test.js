import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllChats } from '../../src/redux/actions/chatActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL =
'https://elites-barefoot-nomad.herokuapp.com/api/v1/chats';

beforeEach(() => {
  store.clearActions();
});
describe('CHAT ACTIONS', () => {
  it('dispatches GET_CHATS', () => {
    mock.onGet(API_URL).reply(200);
    store.dispatch(getAllChats());
    const expectedActions = [];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

//   it('dispatches MARK_ALL_AS_READ', () => {
//     mock.onPatch(API_URL + '/markallasread').reply(200);
//     store.dispatch(markedAllAsRead());
//     const expectedActions = [{ type: MARK_ALL_AS_READ }];
//     expect(store.getActions()).toEqual(expectedActions);
//   }, 50000);

//   it('dispatches MARK_ONE_AS_READ', () => {
//     mock.onPatch(API_URL + '/markoneasread').reply(200);
//     store.dispatch(markedOneAsRead());
//     const expectedActions = [{ type: MARK_ONE_AS_READ }];
//     expect(store.getActions()).toEqual(expectedActions);
//   }, 50000);

//   it('should dispatch the loadNotifications function', () => {
//     store.clearActions();
//     mock.onGet(API_URL).reply(200);
//     store.dispatch(loadNotifications());
//     store.dispatch(setNotifications(allNotifications));
//     const expectedActions = [
//       { type: SET_NOTIFICATIONS, payload: allNotifications },
//     ];
//     expect(store.getActions()).toEqual(expectedActions);
//   });

//   it('dispatches markAllAsRead function', () => {
//     mock.onPatch(API_URL + '/markallasread').reply(200);
//     store.dispatch(markAllAsRead('token'));
//     const expectedActions = [];
//     expect(store.getActions()).toEqual(expectedActions);
//   }, 50000);
//   it('dispatches markOneAsRead function', () => {
//     mock.onPatch(API_URL + '/markoneasread').reply(200);
//     store.dispatch(markOneAsRead(61, 'token'));
//     const expectedActions = [];
//     expect(store.getActions()).toEqual(expectedActions);
//   }, 50000);
});
