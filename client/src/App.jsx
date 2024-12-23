// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import About from './pages/About';
// import Profile from './pages/Profile.jsx';
// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import CreateListing from "./pages/CreateListing.jsx";
// import UpdateListing from "./pages/UpdateListing.jsx";
// import Listing from "./pages/Listing.jsx";
// import Search from "./pages/Search.jsx";
// import Footer from "./components/Footer.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/signin' element={<SignIn />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/listing/:listingId' element={<Listing />} />
//         <Route path='/search' element={<Search/>}/>
//         <Route element={<PrivateRoute/>}>
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/create-listing' element={<CreateListing />} />
//           <Route path='/updatelisting/:listingId' element={<UpdateListing />} />
//         </Route>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile.jsx';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute.jsx';
import CreateListing from "./pages/CreateListing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import Listing from "./pages/Listing.jsx";
import Search from "./pages/Search.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/listing/:listingId' element={<Listing />} />
            <Route path='/search' element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-listing' element={<CreateListing />} />
              <Route path='/updatelisting/:listingId' element={<UpdateListing />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
