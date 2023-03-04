import { Avatar, Box, Drawer, Typography } from "@mui/material";
import { useState } from "react";

export default function ProfileIcon(){
    const [isOpen,setOpen] = useState(false);
    return(
        <div className="profile__icon">
            <Typography variant="h4" className="profile__icon--name">
                User Name
            </Typography>
            <Avatar  onClick={()=>{setOpen(true)}} alt="User" src=""/>
            <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={()=>setOpen(false)}>
                <Box className="profile__menu">
                    <Typography variant="h4">
                        User Name
                    </Typography>
                </Box>
            </Drawer>
        </div>
    )
}