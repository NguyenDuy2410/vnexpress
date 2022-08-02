import "./App.css";
import Header from "./components/header/Header";
import TopPost from "./components/top_post/TopPost";
import Footer from "./components/footer/Footer";
import Infographic from "./components/infographic/Infographic";
import SectionPost from "./components/section_post/SectionPost";
import Podcasts from "./components/podcasts/Podcasts";
import SectionContainer from "./components/section_container/SectionContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <TopPost />
                <SectionPost />
                <Podcasts />
                <SectionContainer />
                <Infographic />
            </div>
            <Footer />
        </div>
    );
}

export default App;
