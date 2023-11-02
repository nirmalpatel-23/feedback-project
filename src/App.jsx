import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/Feedbacklist";
import Feedbackstats from "./components/Feedbackstats";
import Feedbackform from "./components/Feedbackform";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./Pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Feedbackform />
                  <Feedbackstats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
