import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="wrapper max-full min-h-screen">
          <div className="content-container mx-auto my-0 max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <Header/>
              <Main/>
              <Section/>
              <Footer/>
          </div>
      </div>
  );
}

export default App;
