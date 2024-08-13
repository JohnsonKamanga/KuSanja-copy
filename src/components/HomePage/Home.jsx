import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";

function Home(){
    return(
        <div className="min-h-screen bg-[#293040] text-white">
            <NavBar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home;