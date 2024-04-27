import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import PhotoGallery from "../../components/PhotoGallery";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";

const GalleryPhoto: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

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
              <PhotoGallery photos={photos} deletePhoto={deletePhoto} />
            </IonCardContent>
          </IonCard>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="primary" onClick={takePhoto}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  );
};

export default GalleryPhoto;
