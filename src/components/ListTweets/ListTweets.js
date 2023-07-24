import React from "react";
import Tweet from "../Tweet";
import { Grid } from "@mui/material";

//Importación de estilos
import "./ListTweets.scss";

const ListTweets = (props) => {
  const { allTweets, deleteTweet, isDarkMode } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className={`list-tweets-empty ${isDarkMode ? "dark" : ""}`}>
        <h1>No hay Tweets...</h1>
        <br />
        <br />
        <h2>Si quieres crear un tweet dale clic al botón de abajo...</h2>
      </div>
    );
  }

  return (
    <Grid
      container
      spacing={3}
      className={`list-tweets ${isDarkMode ? "dark" : ""}`}
    >
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListTweets;
