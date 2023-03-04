import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { onInputHandler } from "../auth/authHandlers"

export const ResumeDialog = ({open,close,data,updateData}) => {
    return <Dialog open={open} onClose={()=>close()}>
    <DialogTitle>Enter link to image</DialogTitle>
    <DialogContent>
      <TextField
        required
        autoFocus
        margin="dense"
        name="img"
        value={data.img}
        label="link"
        fullWidth
        onInput={(event)=>{onInputHandler(event,updateData)}}
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>close()}>Subscribe</Button>
    </DialogActions>
  </Dialog>
}