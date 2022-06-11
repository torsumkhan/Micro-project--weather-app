function App() {
  const api = {
    key: "e780e668eed14efab1c8655e61adb70c",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  return (
    <div className="app">
      <main>
        <div className="search">
          <input type="text" className="search-bar" placeholder="search" />
        </div>
      </main>
    </div>
  );
}

export default App;
