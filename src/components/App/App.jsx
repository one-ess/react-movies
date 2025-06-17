import MainLayout from "../../layout/MainLayout";
import MovieApp from "../MovieApp/MovieApp";
import { MovieContextProvider } from "../../context/context";

const App = () => {
  return (
    <MainLayout>
      <MovieContextProvider>
        <MovieApp />
      </MovieContextProvider>
    </MainLayout>
  );
};

export default App;
