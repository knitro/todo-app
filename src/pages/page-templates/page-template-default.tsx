import { IonContent, IonPage } from "@ionic/react";
import React  from "react";
import Header from "../../components/general/Header/Header";
import "./page-template.css"

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props {
    children : React.ReactNode
    headerLabel : string
    backButton? : boolean // Default is false
    isProfile ? : boolean
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const PageTemplateDefault : React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Variables
  ////////////////////////

  const children = props.children;
  const headerLabel = props.headerLabel;
  const backButton =  (props.backButton) ? props.backButton : false
  const isProfile =  (props.isProfile) ? props.isProfile : false

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IonPage className="page-template-background">
      <Header headerLabel={headerLabel} isBackButton={backButton} isProfile={isProfile}/>
        <IonContent className="page-template-transparent">
            {children}
        </IonContent>
    </IonPage>
  );
}

export default PageTemplateDefault;