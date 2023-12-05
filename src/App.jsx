import "./App.css";
import Header from "./components/Header";
import ProjectItem from "./components/ProjectItem";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main
      className="sm:p-6 md:p-12 lg:p-16 gap-3 xl:p-20 md:grid"
      style={{ gridTemplateColumns: ".25fr .75fr" }}
    >
      <Header />
      {/*Projects list*/}
      <div
        className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-2"
        style={{ alignItems: "center", justifyItems: "center" }}
      >
        {data.map((elem, index) => {
          return <ProjectItem key={index} number={elem} />;
        })}
      </div>
    </main>
  );
}

export default App;
