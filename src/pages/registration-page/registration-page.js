/* eslint-disable no-new */
/* global document */

import '../../utilities/jquery-global';

import Header from '../../components/header/header';

const header = document.querySelector('.js-header');
new Header(header);
