import { Service, wrapService } from 'service-redux';

class TestService extends Service {

  constructor(props) {
    super(props);
  }

  add = (data) => {
    this.data.count = Number(data.count) + Number(this.data.count);
    this.data$.next(this.data);
  }
}

const initData = {
  count: 0,
  test1: 'Hello',
  test2: 'World'
};

export default wrapService(TestService, initData)();