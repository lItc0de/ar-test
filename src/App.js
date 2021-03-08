import ViewerAR from './components/ViewerAr';

const App = () => {
  let vh =
    ((document &&
      document.documentElement &&
      document.documentElement.clientHeight) ||
      window.innerHeight) * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    vh =
      ((document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
        window.innerHeight) * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <div className="App">
      <ViewerAR />
    </div>
  );
}

export default App;
