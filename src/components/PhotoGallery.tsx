import {
  IonCard,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonAlert,
} from "@ionic/react";
import { trash, warning } from "ionicons/icons";
import React from "react";
import { Photo } from "../types/Photo";
import { useIonAlert } from "@ionic/react";

type Props = {
  photos: Photo[];
  deletePhoto: (fileName: string) => void;
};

const PhotoGallery: React.FC<Props> = ({ photos, deletePhoto }) => {
  const [displayAlert] = useIonAlert();

  const confirmDelete = (fileName: string) =>
    displayAlert({
      header: "Konfirmasi Penghapusan",
      message:
        "Apakah Anda yakin ingin menghapus foto ini? Tindakan ini tidak dapat dibatalkan.",
      buttons: [
        { text: "Batal", role: "cancel", cssClass: "secondary" },
        {
          text: "Hapus",
          role: "destructive",
          handler: () => {
            deletePhoto(fileName);
          },
          cssClass: "danger",
        },
      ],
      cssClass: "alertCustom",
      animated: true,
      icon: warning,
    });

  return (
    <IonGrid>
      <IonRow>
        {photos.map((photo, idx) => (
          <IonCol size="6" key={idx}>
            <IonCard>
              <IonFab vertical="bottom" horizontal="center">
                <IonFabButton
                  onClick={() => confirmDelete(photo.filePath)}
                  size="small"
                  color="light"
                >
                  <IonIcon icon={trash} color="danger"></IonIcon>
                </IonFabButton>
              </IonFab>

              <IonImg src={photo.webviewPath} />
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default PhotoGallery;
