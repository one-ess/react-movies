import MainLayout from "../../layout/MainLayout";
import MovieApp from "../MovieApp/MovieApp";
import { MovieContextProvider } from "../../context/context";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <MovieContextProvider>
          <MovieApp />
        </MovieContextProvider>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
