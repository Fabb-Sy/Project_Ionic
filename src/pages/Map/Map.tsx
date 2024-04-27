import React, { useEffect, useState } from "react";
import { IonContent, IonToolbar, IonTitle, IonPage, IonCard, IonCardContent } from "@ionic/react";
import { Geolocation } from '@capacitor/geolocation';

const Map: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    let isCancelled = false; // flag untuk memeriksa status unmount

    const checkGPS = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        if (!isCancelled) { // hanya set posisi jika komponen belum unmount
          setPosition({
            latitude: coordinates.coords.latitude,
            longitude: coordinates.coords.longitude
          });
        }
      } catch (e) {
        console.error('Error getting location', e);
      }
    };

    checkGPS();

    return () => {
      isCancelled = true; // set flag ketika komponen akan unmount
    };
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Peta</IonTitle>
        </IonToolbar>
        <IonCard>
          <IonCardContent>
            <div>Latitude: {position.latitude}</div>
            <div>Longitude: {position.longitude}</div>
            <iframe
              title="map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${position.longitude-0.005},${position.latitude-0.005},${position.longitude+0.005},${position.latitude+0.005}&layer=mapnik&marker=${position.latitude},${position.longitude}`}
            ></iframe>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Map;
