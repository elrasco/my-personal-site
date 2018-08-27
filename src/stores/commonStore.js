import { observable, action } from 'mobx';

class CommonStore {
  @observable
  longDateFormat;

  @action
  setLongDateFormat(longDateFormat) {
    this.longDateFormat = longDateFormat;
  }
}

export default new CommonStore();
