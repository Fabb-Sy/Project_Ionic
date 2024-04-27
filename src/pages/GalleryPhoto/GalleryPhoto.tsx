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

const GalleryPhoto: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle class="ion-text-center">Galeri Saya</IonTitle>
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
          <IonFabButton color="secondary" onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default GalleryPhoto;
