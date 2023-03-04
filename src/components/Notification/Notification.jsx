import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Notification({message,variant,id}) {  
  const dispatch = useDispatch();

  const deleteNotification = () => {
    dispatch({type:"THROW_NOTIFICATION",payload:id}); 
  }
  return(
    <Snackbar open={true} autoHideDuration={6000} onClose={deleteNotification}>
    <Alert onClose={deleteNotification} severity={variant} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>)
}