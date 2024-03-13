import "./App.css";

function App() {
  const darkTheme = () => {
    document.documentElement.style.setProperty("--bg-color", "#222");
    document.documentElement.style.setProperty("--text-primary", "#fff");
    document.documentElement.style.setProperty("--text-secondary", "#ddd");
  };

  const lightTheme = () => {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--text-primary", "#000");
    document.documentElement.style.setProperty("--text-secondary", "#333");
  };

  document.getElementById("dark", darkTheme);
  document.getElementById("light", lightTheme);

  return (
    <div className="App">
      <h1 className="title">Title</h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        tenetur provident eaque ipsum unde vel quisquam minima maiores nobis aut
        inventore atque neque, sed quae at asperiores laborum. Exercitationem,
        harum?
      </p>
      <div className="btn__container">
        <button id="dark" className="btn__dark" onClick={darkTheme}>
          Dark Theme
        </button>
        <button id="light" className="btn__light" onClick={lightTheme}>
          Light Theme
        </button>
      </div>
    </div>
  );
}

export default App;
