import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import PhotoGallery from "../../components/PhotoGallery";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const GalleryPhoto: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        window.location.reload();
      }
    });
  }, [history]);

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle className="ion-text-center">Galeri Saya</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonCard>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol
                    size="6"
                    horizontal="end"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <PhotoGallery photos={photos} deletePhoto={deletePhoto} />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="primary" onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  );
};

export default GalleryPhoto;
