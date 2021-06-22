import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBox() {
  const [input, setInput] = useState("");

  const history = useHistory();
  const handleChange = (prop) => (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form
        value={input}
        onSubmit={() =>
          history.push({
            pathname: "/search/",
            search: `searchTerm=${input}`
          })
        }
      >
        <FormControl
          type="submit"
          style={{
            color: "#000000",
            borderRadius: "6px",
            backgroundColor: "#F5F5F5"
          }}
          fullWidth
        >
          <OutlinedInput
            type="text"
            style={{
              color: "#000000",
              borderRadius: "6px",
              backgroundColor: "#F5F5F5"
            }}
            id="standard-search"
            variant="outlined"
            value={input}
            onChange={handleChange(input)}
            placeholder="Search"
            required
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <a
                  href="https://twetch.app/search.advanced"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="primary" variant="body1">
                    Avancée
                  </Typography>
                </a>
              </InputAdornment>
            }
            aria-describedby="standard-search-helper-text"
            inputProps={{
              "aria-label": "search Term"
            }}
          />
        </FormControl>
      </form>
    </div>
  );
}
