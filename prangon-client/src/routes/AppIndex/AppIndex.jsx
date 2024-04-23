import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function AppIndex() {
    const navigateTo = useNavigate();

    return (
        <>
            <Box
                component="section"
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <IconButton
                    size="large"
                    aria-label="Direct Messeges"
                    color="inherit"
                    onClick={e => navigateTo("dms")}
                    sx = {{display: "flex", flexDirection: "column", flexGrow: 1}}
                >
                    <ChatIcon fontSize="large"/>
                    <Typography sx={{fontSize: "12px"}}>DMs</Typography>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="groups"
                    color="inherit"
                    onClick={e => navigateTo("groups")}
                    sx = {{display: "flex", flexDirection: "column", flexGrow: 1}}
                >
                    <GroupIcon fontSize="large"/>
                    <Typography sx={{fontSize: "12px"}}>Groups</Typography>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="sections"
                    color="inherit"
                    onClick={e => navigateTo("sections")}
                    sx = {{display: "flex", flexDirection: "column", flexGrow: 1}}
                >
                    <WorkspacesIcon fontSize="large"/>
                    <Typography sx={{fontSize: "12px"}}>Section chat</Typography>
                </IconButton>
            </Box>
        </>
    );
}
