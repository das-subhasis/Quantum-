import Sidebar from "./components/Sidebar";
import CourseDetails from "./components/CourseDetails";
import FAQSection from "./components/FAQSection";

import './index.css'
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Description from "./components/Description";
import CoursePurchase from "./components/CoursePurchase";
import CourseRatings from "./components/CourseRatings";
import CoursePublisher from "./components/CoursePublisher";
import CourseSuggestion from "./components/CourseSuggestion";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#151515] font-poppins">
      <Navbar />
      <div className="flex-1 flex">
        {/* Sidebar Section */}
        <div className="sticky top-0 h-full flex-shrink-0">
          <Sidebar />
        </div>
        {/* Course Section */}
        <div className="w-full flex gap-10 bg-[#F5F7F8] rounded-tl-3xl overflow-x-hidden overflow-y-scroll px-8 pt-6">
          <div className="flex flex-col gap-5 w-[70%]">
            <Post />
            <div className="mt-5">
              <Description />
            </div>
            <CourseDetails />
            <FAQSection />
          </div>
          {/* Cart and Miscellaneous */}
          <div className="w-[30%] flex flex-col gap-5">
            <CoursePurchase />
            <CourseRatings />
            <CoursePublisher />
            <CourseSuggestion />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;