// js stuff
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

// style stuff
import 'bootstrap';
import './styles/app.scss';

import Layout from './layout';

render(<Layout />, document.getElementById('app'));