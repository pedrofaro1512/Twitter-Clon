import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";

import "./SendTweet.scss";

const SendTweet = () => {
  return (
    <div className="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default SendTweet;
