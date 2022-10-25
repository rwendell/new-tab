import { Footer } from "components/layout/footer/Footer";
import { Header } from "components/layout/header/Header";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default App;
