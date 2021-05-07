import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';
import { Provider } from 'react-redux';
import RestaurantScreen from './components/RestaurantScreen';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Opinion Ate</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <RestaurantScreen />
      </Container>
    </ThemeProvider>
  </Provider>
);

export default App;
