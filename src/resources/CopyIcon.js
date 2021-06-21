import { useState } from "react";
import { IconButton } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab/";
import FilterNoneIcon from "@material-ui/icons/FilterNone";

export default function CopyIcon(props) {
  const url = `https://app.sapience.space/t/${props.tx}`;
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    setCopied(true);
    document.body.removeChild(el);
  };

  const handleClose = (e) => {
    setCopied(false);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FilterNoneIcon />
      </IconButton>
      <Snackbar open={copied} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Copié dans le presse-papier</Alert>
      </Snackbar>
    </div>
  );
}
