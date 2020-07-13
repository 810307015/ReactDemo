const wrapService = (Service, initData = {}) => {
  const service = new Service(initData);
  return () => {
    return service;
  }
}

export {
  wrapService
};