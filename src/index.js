import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as stores from './stores';

import { Provider } from 'mobx-react';

import { LocaleProvider } from 'antd';

import it_IT from 'antd/lib/locale-provider/it_IT';
import en_US from 'antd/lib/locale-provider/en_US';

import 'moment/locale/it';
import moment from 'moment';

const [language] = (navigator.language || navigator.userLanguage || 'en').split('-');

let locale = en_US;
moment.locale('en');
stores.translationsStore.setLocale('en');

if (language === 'it') {
  locale = it_IT;
  moment.locale('it');
}

const m = moment();

stores['commonStore'].setLongDateFormat(m._locale._longDateFormat);

ReactDOM.render(
  <LocaleProvider locale={locale}>
    <Provider {...stores}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);
registerServiceWorker();
