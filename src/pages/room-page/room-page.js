/* eslint-disable no-new */
/* global document */

import '../../utilities/jquery-global';

import Header from '../../components/header/header';
import ButtonLike from '../../components/button/button';

const header = document.querySelector('.js-header');
new Header(header);

const likeButtons = document.querySelectorAll('.js-button');
likeButtons.forEach((button) => new ButtonLike(button));
