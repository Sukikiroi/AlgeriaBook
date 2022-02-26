import React ,{useState}from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { display } from "@mui/system";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid white",
  borderRadius: "6px",
  boxShadow: 24,
  display: "block",
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(true);
  const [post, setpost] = useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePost=()=>{
      console.log(post+checked)
  }
  return (
    <div>
      <Button onClick={handleOpen}>Create post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={header}>
              Create post  {checked ? "Anonym" : "Known"}
         
        <Switch
          onChange={handleChange}
          defaultChecked
          size="small"
          color="secondary"
        />
        </div>
          <div style={main}>
          <TextField style={postfiled}
          id="outlined-textarea"
          label="Multiline Post"
          placeholder="Post"
          multiline
          rows={4}
          value={post}
          onChange={(e)=>setpost(e.target.value)}
        />
          </div>
          <div style={bottom}>
            <button style={postbutton}  onClick={handlePost} >Post</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const main = {
  height: "200px",
  width: "100%",
  display:'flex',
  justifyContent:'center',
  alingItems:'center',
  backgroundColor: " ",
};

const header = {
  height: "20px",
  width: "100%",
  backgroundColor: " ",
  display: "flex",
  justifyContent: "space-between",
  alingItems: "center",
};

const bottom = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
};

const postbutton = {
  height: "30px",
  width: "100%",
  cursor: "pointer",
};

const postfiled={
marginTop:"30px",
width:'100%',
height:'100%'
}