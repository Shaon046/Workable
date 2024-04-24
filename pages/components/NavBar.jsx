import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import pricing from "../pricing";
export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,

        // position:"sticky",top:0 ,boxShadow:"none" ,zIndex:999
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "#00756a", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

   <Link href={"/"}><Button style={{color:"white"}}>Home</Button></Link>       
<Link href={"/pricing"}><Button style={{color:"white"}}>Pricing</Button></Link>

     <Link href={"/customers"}> <Button style={{color:"white"}}>Customer</Button></Link>     
         
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
