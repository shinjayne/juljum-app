import * as React from "react";
import {AppBar, Container, Toolbar} from "@material-ui/core";
import {PropsWithChildren, ReactChild} from "react";

interface Props {

}

const Basic: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <>
      <Container maxWidth={'sm'}>
        <AppBar position={'static'}>
          <Toolbar>
            줄서줌
          </Toolbar>
        </AppBar>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {children}
        </div>
      </Container>
    </>
  )
};

export default Basic;
