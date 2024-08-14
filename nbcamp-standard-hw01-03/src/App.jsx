import { useState } from "react";
import Footer from "../../nbcamp-standard-hw01-02/src/components/Footer";
import Header from "../../nbcamp-standard-hw01-02/src/components/Header";
import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  const year = new Date().getFullYear();

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header>My Website</Header>
      <p>Welcome to my website!</p>
      <Counter count={count} increment={increment} />
      <Status count={count} />
      <Footer year={year} />
    </div>
  );
}

export default App;
