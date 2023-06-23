import "./index.css";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our rivews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
