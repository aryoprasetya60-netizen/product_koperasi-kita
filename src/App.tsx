import { useEffect, useState } from "react";
import "./App.css";
import TraineeCard from "./components/card/TraineeCard";
import withLoading from "./hoc/WithLoading";
import LoginCard from "./components/card/LoginCard";
import WithAuth from "./hoc/WithAuth";
import Button from "./components/button/Button";
import WithBorder from "./hoc/WithBorder";
import useLoading from "./hooks/useLoading";
import LampsOn from "./assets/lampson.png";
import LampsOff from "./assets/lampsoff.png";
import UseLamp from "./hooks/UseLamp";
import Counter from "./components/pages/Counter";
import TodoList from "./components/pages/TodoList";

function App() {
  const [loading, setLoading] = useState(true);
  const TraineeCardWithLoading = withLoading(TraineeCard);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LoginCardWithLoading = WithAuth(LoginCard);
  const LoginCardWithBorder = WithBorder(LoginCard);

  const isLoading = useLoading(5000);

  // const { isOn, changeLamp } = UseLamp();

  return (
    <section>
      <div className="flex flex-col items-center gap-8 p-5">
        <Counter />

        <hr className="w-full" />

        <TodoList />
      </div>
    </section>
  );
}

export default App;
