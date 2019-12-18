import '../../utilities/jquery-global';

import '../../utilities/polyfills';

import Header from '../../components/header/header';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));
