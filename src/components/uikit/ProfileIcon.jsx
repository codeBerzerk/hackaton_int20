import { Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

export default function ProfileIcon(){
    const [isOpen,setOpen] = useState(false);
    return(
        <>
            <Button onClick={()=>{setOpen(true)}}>Show</Button>
            <SwipeableDrawer
            anchor={"right"}
            open={isOpen}
            onOpen={()=>{}}
            onClose={()=>{setOpen(false)}}>

            </SwipeableDrawer>
        </>
    )
}