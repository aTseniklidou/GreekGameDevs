import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'stats',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const Stats = require('./containers/StatsContainer').default;
        const reducer = require('./modules/stats').default;

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'stats', reducer });

        /*  Return getComponent   */
        cb(null, Stats);

        /* Webpack named bundle   */
      },
      'stats',
    );
  },
});
