import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Home</Button>
        </a>
        <div>
          <a href="/login" style={{ textDecoration: 'none', color: 'white', margin: 5 }}>
            <Button color="inherit">Login</Button>
          </a>
          <a href="/signup" style={{ textDecoration: 'none', color: 'white', margin: 5 }}>
            <Button color="inherit">Signup</Button>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;