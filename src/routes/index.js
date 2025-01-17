// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import VideoGamesRoute from './Database/VideoGames';
import NetworksRoute from './Database/Network';
import MediaRoute from './Database/Media';
import ToolsRoute from './Database/Tools';
import CommunicationRoute from './Communication';
import HomeRoute from './Home';
import StatsRoute from './Stats';
import InfoRoute from './Info';
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: HomeRoute(store),
  childRoutes: [
    ToolsRoute(store),
    StatsRoute(store),
    MediaRoute(store),
    VideoGamesRoute(store),
    CommunicationRoute(store),
    InfoRoute(store),
    NetworksRoute(store),
  ],
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
