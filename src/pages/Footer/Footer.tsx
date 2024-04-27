import React from "react";
import {
  IonFooter,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import { person, images, globe } from "ionicons/icons";
import Profile from "../Profile/Profile";
import GalleryPhoto from "../GalleryPhoto/GalleryPhoto";
import Map from "../Map/Map";

const Footer: React.FC = () => {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/photogallery" component={GalleryPhoto} />
            <Route exact path="/map" component={Map} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profil</IonLabel>
            </IonTabButton>

            <IonTabButton tab="photogallery" href="/photogallery">
              <IonIcon icon={images} />
              <IonLabel>Galeri Foto</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href="/map">
              <IonIcon icon={globe} />
              <IonLabel>Peta</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default Footer;
