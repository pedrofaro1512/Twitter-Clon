import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

//Importación de componentes
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";
import { TWEETS_STORAGE } from "./Utils/constants";

const StyledSnackbar = styled(Snackbar)(({ theme, type }) => ({
  backgroundColor:
    type === "success" ? theme.palette.success.main : theme.palette.error.main,
}));

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
    type: "success",
  });
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  useEffect(() => {
    if (toastProps.open) {
      const timer = setTimeout(() => {
        setToastProps({ ...toastProps, open: false });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toastProps]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets([...allTweets]);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setToastProps({
      open: true,
      text: "Tweet eliminado exitosamente!",
      type: "success",
    });
    setReloadTweets(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <StyledSnackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        onClose={() => setToastProps({ ...toastProps, open: false })}
        message={<span id="message-id">{toastProps.text}</span>}
        type={toastProps.type}
      />
    </Container>
  );
}

export default App;
