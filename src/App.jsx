import "./App.scss";

import { Main } from "./Components/Main/Main";
import { Grid } from "./Components/Grid/Grid";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

// all my routes
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <Navbar />
        <Main>
          <AppRoutes />
        </Main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
