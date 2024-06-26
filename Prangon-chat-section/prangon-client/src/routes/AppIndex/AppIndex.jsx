import React from "react";
import { useQuery } from "@tanstack/react-query";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";

import PostCard from "../../components/PostCard";
import CreateIcon from "@mui/icons-material/Create";
import Fab from '@mui/material/Fab';

export default function AppIndex() {
    const navigateTo = useNavigate();
    const {isLoading, isError, error, data} = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            return res.json();
        }
        // onSuccess: () => {}
    })

    return (
        <>
            <Fab onClick={e => navigateTo("post")} sx={{ position: "fixed", bottom: "16px", right: "16px"}}>
                <CreateIcon fontSize="medium" />
            </Fab>
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
                    onClick={(e) => navigateTo("dms")}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <ChatIcon fontSize="large" />
                    <Typography sx={{ fontSize: "12px" }}>DMs</Typography>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="groups"
                    color="inherit"
                    onClick={(e) => navigateTo("groups")}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <GroupIcon fontSize="large" />
                    <Typography sx={{ fontSize: "12px" }}>Groups</Typography>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="sections"
                    color="inherit"
                    onClick={(e) => navigateTo("sections")}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <WorkspacesIcon fontSize="large" />
                    <Typography sx={{ fontSize: "12px" }}>
                        Section chat
                    </Typography>
                </IconButton>
            </Box>
            
            <Container sx={{ my: 2, px: 0 }} maxWidth="sm">
                <Stack direction="column" spacing={2}>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </Stack>
            </Container>
            
        </>
    );
}
