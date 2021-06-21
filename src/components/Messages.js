import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { twquery } from "../api/TwetchGraph";

const useStyles = makeStyles((theme) => ({
  /* root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  } */
}));

const notifQ = `
query getMsgCount {
  me {
    unreadMessagesCount
  }
}
`;

export default function Notifications(props) {
  const classes = useStyles();
  const [unreadMsgCount, setUnreadMsgCount] = useState();

  useEffect(() => {
    localStorage.tokenTwetchAuth &&
      twquery(notifQ).then((res) => {
        let count = res.me.unreadMessagesCount;
        //console.log(count);
        if (count < 1) {
          setUnreadMsgCount();
        } else {
          setUnreadMsgCount(count);
        }
      });
  }, []);

  return (
    <div className={classes.root}>
      <Badge max={21} badgeContent={unreadMsgCount} color="primary">
        <MailOutlineIcon color={props.color} />
      </Badge>
    </div>
  );
}
