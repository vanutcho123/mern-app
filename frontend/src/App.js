import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add to item" />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list"></div>
    </div>
  );
}

export default App;
