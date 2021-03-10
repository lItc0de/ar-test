import ViewerAF from './components/ViewerAF';

const App = () => {
  let vh =
    ((document &&
      document.documentElement &&
      document.documentElement.clientHeight) ||
      window.innerHeight) * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    vh =
      ((document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
        window.innerHeight) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <div className="App">
      <ViewerAF />
    </div>
  );
};

export default App;
