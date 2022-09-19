function App() {
  const name = {
    user: "temo",
  };
  const names = [<p>temo</p>, <p>sandro</p>];
  const func = () => {
    if (true) {
      return <h1>{names[0]}</h1>;
    }
  };
  return (
    <div onClick={() => alert("oki doki")} className="App">
      <button>click me</button>
      <h1>oki doki {name.user}</h1>
      <h1>oki doki</h1>
      {func()}
    </div>
  );
}

export default App;
