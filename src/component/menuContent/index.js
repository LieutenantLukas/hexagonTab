import { data } from '../data';
import { debugSetting } from './debugSetting';
import { appName } from '../appName';
import { layoutSetting } from './layoutSetting';
import { bookmarkSetting } from './bookmarkSetting';
import { toolbarSetting } from './toolbarSetting';
import { themeSetting } from './themeSetting';
import { dataSetting } from './dataSetting';
import { supportSetting } from './supportSetting';
import { coffeeSetting } from './coffeeSetting';
import { appSetting } from './appSetting';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

export const MenuContent = function({
  activeNavData = {},
  container = false
} = {}) {

  this.element = {
    content: (name) => {
      return node('div|id:menu-content-item-' + this.makeId(name) + ',class:menu-content-item');
    },
    header: (name) => {
      return node('div|class:menu-item-header', [
        node('h1:' + name + '|class:menu-item-header-text')
      ]);
    },
    form: ({ indent = false } = {}) => {

      const formElement = node('div|class:menu-item-form');

      if (indent) {
        formElement.classList.add('menu-item-form-indent');
      };

      return formElement;
    }
  };

  this.content = () => {

    if (activeNavData.sub && activeNavData.sub.length > 0) {

      activeNavData.sub.forEach((item, i) => {

        const menuContentItem = this.element.content(item);

        menuContentItem.appendChild(this.element.header(item));

        const formElement = this.element.form({ indent: true });

        switch (this.makeId(activeNavData.name)) {

          case 'layout':
            layoutSetting[this.makeId(item)](formElement);
            break;

          case 'bookmark':
            bookmarkSetting[this.makeId(item)](formElement);
            break;

          case 'toolbar':
            toolbarSetting[this.makeId(item)](formElement);
            break;

          case 'theme':
            themeSetting[this.makeId(item)](formElement);
            break;

          case 'data':
            dataSetting[this.makeId(item)](formElement);
            break;

          case 'debug':
            debugSetting[this.makeId(item)](formElement);
            break;

        };

        menuContentItem.appendChild(formElement);

        container.appendChild(menuContentItem);

      });

      switch (this.makeId(activeNavData.name)) {

        case 'theme':
          themeSetting.disable();
          break;

      };

    } else {

      const menuContentItem = this.element.content(activeNavData.name);

      let formElement;

      switch (this.makeId(activeNavData.name)) {

        case 'support':

          menuContentItem.appendChild(this.element.header(activeNavData.name));

          formElement = this.element.form({ indent: true });

          supportSetting[this.makeId(activeNavData.name)](formElement);

          break;

        case 'coffee':

          menuContentItem.appendChild(this.element.header(activeNavData.name));

          formElement = this.element.form({ indent: true });

          coffeeSetting[this.makeId(activeNavData.name)](formElement);

          break;

        case this.makeId(appName):

          formElement = this.element.form();

          appSetting[this.makeId(activeNavData.name)](formElement);

          break;

      };

      menuContentItem.appendChild(formElement);

      container.appendChild(menuContentItem);

    };

  };

  this.makeId = (name) => {
    return name.split(' ')[0].toLowerCase();
  };

};
