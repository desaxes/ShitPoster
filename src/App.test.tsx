import { getByText, render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/redux-store';
import { initialStateType } from './redux/subs-reducer';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  // const linkElement = getByText('/learn react/i');
  // expect(linkElement).toBeInTheDocument();
});
// test('profile-test', () => {
//   const state: initialStateType = {
//     subsData: [
//       {
//         name: 'qq',
//         id: 202,
//         uniqueUrlName: null,
//         photos: {
//           small: 'ss',
//           large: 'ss'
//         },
//         status: 'tt',
//         followed: true
//       }
//     ],
//     pageSize: 8,
//     totalCount: 0,
//     pageNumber: 1,
//     isFetching: false,
//     subscribeProgress: []
//   }
//   expect('success')
// })