import { Header } from "./components/Header";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col text-white items-center justify-center h-screen">
        <h1>Park your car</h1>
        <p>
          After choosing the city please choose the parking are and hit "pay
          with Wango" button.
        </p>
      </div>
    </div>
  );
};
