import {NextPage} from "next";
import {useEffect, useState} from "react";
import * as React from "react";
import {TextField, Button, createStyles, Theme, Paper, Card} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Router from "next/router";
import Basic from "../layouts/Basic";
import JCard from "../components/JCard";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
);

const Index: NextPage<{ userAgent: string, children: React.ReactElement }> = ({userAgent, children}) => {

  const classes = useStyles();

  const [hello, sethello] = useState('hello');
  return (
    <Basic>
      <p>user-agent : {userAgent}</p>
      <p>{hello}</p>


      <form className={classes.container}>

      </form>
      <Area>
        <JCard>
          <TextField
            label="어디로 가실건가요?"
            type="search"
            margin="normal"
          />
          <Button onClick={onSearchClick} variant="contained" color="primary">
            줄서줘!
          </Button>
        </JCard>
      </Area>

      <Area>
        <JCard>
          <TextField
            label={'몇명이서 드시나요?'}
          />
        </JCard>
      </Area>
    </Basic>
  )

  function onSearchClick() {
    Router.push('/search-result');
  }
};
Index.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {
    userAgent,
    children: <>i am children</>
  };
};

const Area = styled.div`
  margin: 8px 0 8px 0;
`;


export default Index;
