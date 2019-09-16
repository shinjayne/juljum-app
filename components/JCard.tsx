import {PropsWithChildren} from "react";
import {Card} from "@material-ui/core";
import * as React from "react";

interface Props {

}

const JCard: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <>
      <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding:8}}>
        {children}
      </Card>
    </>
  )
};


export default JCard;
