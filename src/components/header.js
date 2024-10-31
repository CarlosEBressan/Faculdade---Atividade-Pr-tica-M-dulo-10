import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', transform: 'translateY(-5px)' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Gerenciamento de Projetos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
