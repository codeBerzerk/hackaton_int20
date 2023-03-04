import { Avatar, Badge, Box, Drawer, List, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfileIcon(){
    const [isOpen,setOpen] = useState(false);
    const user = useSelector(state=>state.user)
    return(
        <div className="profile__icon">
            <Typography onClick={()=>{setOpen(true)}} variant="h4" className="profile__icon--name">
                {user.name}
            </Typography>
            <Avatar className="profile__icon--avatar" onClick={()=>{setOpen(true)}} alt="User" src=""/>
            <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={()=>setOpen(false)}>
                <Box className="profile__menu">
                        <h1 className="profile__menu--name">{user.name}</h1>
                        <Link to={`/projects/${user.name}`}>
                            <div className="profile__menu--item">
                                    <span>Мої проекти</span>    
                            </div> 
                        </Link>
                        <Link to={`/cv/${user.name}`}>
                            <div className="profile__menu--item">
                                    <span>Моє резюме</span>    
                            </div> 
                        </Link>
                        <Link to="/request">
                            <div className="profile__menu--item">
                                    <span>Запити на додавання</span>    
                                    <Badge badgeContent={4} color="warning"/>
                            </div> 
                        </Link>
                </Box>
            </Drawer>
        </div>
    )
}