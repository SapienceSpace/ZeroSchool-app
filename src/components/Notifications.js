import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import { twquery } from "../api/TwetchGraph";

const useStyles = makeStyles((theme) => ({
  /* root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  } */
}));

const notifQ = `
query getNotifiCount {
  me {
    notificationsCount
  }
}
`;

export default function Notifications(props) {
  const classes = useStyles();
  const [unreadNotifCount, setUnreadNotifCount] = useState();

  useEffect(() => {
    localStorage.tokenTwetchAuth &&
      twquery(notifQ).then((res) => {
        let count = res.me.notificationsCount;
        //console.log(count);
        if (count < 1) {
          setUnreadNotifCount();
        } else {
          setUnreadNotifCount(count);
        }
      });
  }, []);

  return (
    <div className={classes.root}>
      <Badge max={21} badgeContent={unreadNotifCount} color="primary">
        <NotificationsNoneIcon color={props.color} />
      </Badge>
    </div>
  );
}
