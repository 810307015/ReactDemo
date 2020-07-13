import { Subject } from 'rxjs';
import { wrapService } from 'Utils/service';

class TestService {
  constructor(initData = {}) {
    this.data = initData;
  }

  data$ = new Subject();

  subscribe = (callback) => {
    this.subscription = this.data$.subscribe(callback);
    this.data$.next(this.data);

    return () => {
      this.subscription.unsubscribe();
    }
  }

  add = (data) => {
    this.data.count = Number(data.count) + Number(this.data.count);
    this.data$.next(this.data);
  }

  set = (data) => {
    this.data = { ...this.data, ...data };
    this.data$.next(this.data);
  }
}

const initData = {
  count: 0,
  test1: 'Hello',
  test2: 'World'
};

export default wrapService(TestService, initData)();