import React from 'react'
import {AppBar,Toolbar} from'@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import{Box}from"@mui/system"
const dummyArray=["eMemory","Brahamastra","Forest grump"]
import '@fontsource/roboto/300.css';
import { Autocomplete } from '@mui/material';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar>
     <Toolbar>
    <Box width={"20%"}>
    <MovieIcon/>
    </Box>
    <Box width={"50%"} margin={"auto"}>
    <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={dummyArray.map((option) => option.title)}
        renderInput={(params) => <TextField  variant="standard"{...params} label="Search Acroos Multiple Movies" />}
      />  
    </Box>
    <Box display={'flex'}>
        <Tabs textColor="inherit" indicatorColor="secondary" value={0} onChange={(e,val)=>{
          
        }}>
        <Tab label="Movies"/> 
        <Tab label="Admin"/>  
        <Tab label="auth"/>   
        </Tabs>
       </Box>
     </Toolbar>
    </AppBar>
  );
  
  
};

export default Header
