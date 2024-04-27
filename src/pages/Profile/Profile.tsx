import React from "react";
import {
  IonContent,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonImg,
  IonText,
  IonIcon,
  IonPage,
} from "@ionic/react";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent>
          <IonToolbar color="primary" style={{ marginBottom: "20px" }}>
            <IonTitle className="ion-text-center">Profil Saya</IonTitle>
          </IonToolbar>
          <IonCard
            div="card"
            style={{
              maxWidth: "500px",
              marginBottom: "10px",
              borderRadius: "15px",
              margin: "auto",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <IonCardContent style={{ padding: "20px" }}>
              <IonAvatar
                style={{
                  margin: "auto",
                  width: "200px",
                  height: "200px",
                  marginBottom: "10px",
                }}
              >
                <IonImg
                  src="../../../public/gambar/SUNNY.jpg" // select ur path image
                  style={{ width: "100%", height: "100%" }}
                />
              </IonAvatar>
              <IonText
                className="ion-text-center"
                style={{ marginBottom: "20px" }}
              >
                <h1 style={{ fontWeight: "bold" }}>Fadhli Shabri Irawan</h1>
                <p style={{ fontSize: "16px", textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum condimentum diam ligula, eu gravida metus ultrices
                  et. Nulla venenatis tempor velit, et sagittis odio faucibus
                  ut. Nam lobortis iaculis ultrices. Integer posuere fermentum
                  urna, eu facilisis ligula pretium tincidunt. Nulla elementum
                  quam vitae risus blandit vestibulum. Sed rhoncus lorem ac
                  massa feugiat rhoncus id consequat ex. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </p>
              </IonText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: 10,
                  marginTop: "10px",
                }}
              >
                <a href="#" target="_blank">
                  <IonIcon
                    icon={logoFacebook}
                    style={{ margin: 5, fontSize: "25px" }}
                  />
                </a>
                <a href="#" target="_blank">
                  <IonIcon
                    icon={logoInstagram}
                    style={{ margin: 5, fontSize: "25px" }}
                  />
                </a>
                <a href="#" target="_blank">
                  <IonIcon
                    icon={logoTwitter}
                    style={{ margin: 5, fontSize: "25px" }}
                  />
                </a>
              </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
