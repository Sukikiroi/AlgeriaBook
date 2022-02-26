import React ,{useState}from "react";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
const PostSection = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  const [post, setpost] = useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePost=()=>{
      console.log(post+checked)
  }
  return (
    <div className={classes.root}>
      <div>
        {checked ? <h2>Anonym</h2> : <h2>Known</h2>}
        <Switch
          onChange={handleChange}
          defaultChecked
          size="small"
          color="secondary"
        />
      </div>

      <div>
        <TextField
          id="outlined-textarea"
          label="Multiline Post"
          placeholder="Post"
          multiline
          rows={4}
          onChange={(e)=>setpost(e.target.value)}
        />
        <Button  onClick={handlePost} variant="contained">Post</Button>
      </div>
    </div>
  );
};

export default PostSection;

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "auto",
    backgroundColor: "",
    border: "1px solid blue",
    padding: "30px",
  },
  postbutton: {
    border: "1px solid green",
    backgroundColor: "green",
  },
});
