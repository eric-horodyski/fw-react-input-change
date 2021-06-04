import { IonList, IonItem, IonInput } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./ExploreContainer.css";

const ExploreContainer: React.FC = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (val: string) => {
    console.log(`onIonChange with input: ${val}`);
    setValue("hello");
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
