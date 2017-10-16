import * as React from "react";
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from 'util/configureStore';
import User from './';

describe('<UserContainer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const staticContext = {};
    const store = configureStore({
      login: {
        user: {
          display_name: 'inita',
          image_url: '',
        },
      },
    });

    ReactDOM.render(
      <StaticRouter location="/" context={staticContext}>
        <Provider store={store}>
          <User />
        </Provider>
      </StaticRouter>,
      div,
    );
  });
})

