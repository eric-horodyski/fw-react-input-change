import { IonList, IonItem, IonInput } from "@ionic/react";
import React, { useState } from "react";
import "./ExploreContainer.css";

const ExploreContainer: React.FC = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (value: string) => {
    console.log("handleInputChange", value);
    setValue(value);
  };

  return (
    <IonList>
      <IonItem>
        <IonInput
          value={value}
          onIonChange={(e) => handleInputChange(e.detail.value!)}
        />
      </IonItem>
    </IonList>
  );
};

export default ExploreContainer;
