import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import GalleryPhoto from './pages/GalleryPhoto/GalleryPhoto';
import Profile from './pages/Profile/Profile'; // Pastikan Anda telah membuat komponen ini
import Map from './pages/Map/Map'; // Pastikan Anda telah membuat komponen ini

/* Import icons */
import { home, images, map } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/galleryphoto">
            <GalleryPhoto />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={home} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="galleryphoto" href="/galleryphoto">
            <IonIcon icon={images} />
            <IonLabel>Gallery Photo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
