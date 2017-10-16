import configureMockStore from 'redux-mock-store';
import { _middlewares } from '../';
import { getTransactions } from './';
import { succeedGetTransactions } from 'containers/Transactions/reducer';

const mockStore = configureMockStore(_middlewares);

describe('async transactions middleware', () => {
  it('on successful network call, dispatches succeedGetTransactions action', () => {
    const store = mockStore({ balance: [] });
    const payload = { account_name: 'inita' };
    const response = {
      transactions: [
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 1,
          memo: ' ',
          date: 'Tue Oct 03 2017 19:03:15 GMT-0500 (CDT)',
          id: '59d2aed2c8c5ac5f75bd3a719b65e75f06b4b88694655cad4cd3b540e6a3af51',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 1,
          memo: ' ',
          date: 'Tue Oct 03 2017 19:01:57 GMT-0500 (CDT)',
          id: 'd96fce7f61a583a2a8d8ac12bbaeca6b7ae7ffb6ba204aa1fb17e234c0462954',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 300000,
          memo: 'zz',
          date: 'Fri Sep 29 2017 20:50:06 GMT-0500 (CDT)',
          id:
            'a0ec89756e2b765151e59e7ee1646d1a89d7a0ec5e68bba7bffbaaf0f9ab5c68',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 10000,
          memo: 'Thanks friend!',
          date: 'Fri Sep 29 2017 20:49:42 GMT-0500 (CDT)',
          id: '98820ca11e99b45d5a146596dff0537c480fa139ab50197710127ad15ec902c7',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 10000,
          memo: 'Hello world',
          date: 'Fri Sep 29 2017 20:39:12 GMT-0500 (CDT)',
          id: '88769942b62c0a2b3d86506d168daf97928167e9e77b5db3678e176fcd55febc',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 10000,
          memo: 'Hello world',
          date: 'Fri Sep 29 2017 20:37:06 GMT-0500 (CDT)',
          id: '36c826f69ad4a5ce49454050ab739141ff63d981a394974319f47ad01c3e246e',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 10000,
          memo: 'Blockchain transfer is cool',
          date: 'Fri Sep 29 2017 20:32:18 GMT-0500 (CDT)',
          id: '3d926c1613f3dabf1a7f930dc247fbcd8323a505316f27dcba04b32b99e1eb60',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 1000,
          memo: 'Thank you',
          date: 'Fri Sep 29 2017 20:13:03 GMT-0500 (CDT)',
          id: '45dc2894aff34eda99c58858a40c389b038f7426f7a7bfb359f9cb1e21139e36',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 1000,
          memo: 'Thank you',
          date: 'Fri Sep 29 2017 20:02:15 GMT-0500 (CDT)',
          id: '3c3ff2146980d2c693dcf4b2ddaee502dd5e038188f2113b835f61596028bb1b',
        },
        {
          sender: {
            name: 'nujabes',
            icon: '',
          },
          direction: 'up',
          amount: 1000,
          memo: 'Thank you',
          date: 'Fri Sep 29 2017 19:53:57 GMT-0500 (CDT)',
          id: '11f946046ae3f32f25ccb83ce2dfc4d2856cbafcebf8316019b43808455c5681',
        },
        {
          sender: {
            name: 'howboutthat',
            icon: '',
          },
          direction: 'down',
          amount: 1,
          memo: 'efafoiyt08',
          date: 'Thu Sep 14 2017 12:02:21 GMT-0500 (CDT)',
          id: 'a7d4f5700ff888b29428b621cc1ec4f4b53c2228bebe6237c6e65253fe8b4c9d',
        },
        {
          sender: {
            name: 'howboutthat',
            icon: '',
          },
          direction: 'down',
          amount: 1,
          memo: 'efafoiyt08',
          date: 'Thu Sep 14 2017 12:02:18 GMT-0500 (CDT)',
          id: 'fc716cc56b3b5832e99d410ffffcb1edd7c9c952b5311f1f80ba5d2d18e8ffa6',
        },
      ],
    };

    const expectedActions = [succeedGetTransactions(response)];

    fetch.mockResponse(JSON.stringify(response));

    return getTransactions(payload, store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
