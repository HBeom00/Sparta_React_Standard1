import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Header>My Website</Header>
      <Content />
      <Footer year={year} />
    </div>
  );
}

export default App;
