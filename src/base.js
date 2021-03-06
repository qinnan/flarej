﻿import fj from './core';
import nj from 'nornj';
import './njConfig';
import utils from './utils/utils';
import Pagination from './components/pagination/component';
const widgets = { Pagination };

Object.assign(fj, utils, widgets);
nj.registerComponent(widgets);

export default fj;