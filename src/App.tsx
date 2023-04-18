import "./App.css";

import './sections/section.styles.scss';

import ScrollTextIntoView from "./sections/ScrollIntoView/ScrollIntoView";
import ScrollAcross from "./sections/ScrollAcross/ScrollAcross";
import ScrollZoomOut from "./sections/ScrollZoomOut/ScrollZoomOut";
import ScrollItemsAcross from "./sections/ScrollItemsAcross/ScrollItemsAcross";
import ScrollStaysInPlace from "./sections/ScrollStaysInPlace/ScrollStaysInPlace";
import ScrollExpandsOverSection from "./sections/ScrollExpandsOverSection/ScrollExpandsOverSection";
import EndSection from "./sections/EndSection/EndSection";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";

const imageLink = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzI1ODI2NjU2MzQ1OTRiZTZiMTMyNTNkNGQ3MzFlMDM5NzA1ZWRjNSZjdD1z/gkG4qiqwAPHRhAeKvm/giphy.gif"

function App() {
  return (
    <div className="App">
      <ScrollProgressBar />
      <ScrollTextIntoView text={"hello"} />
      <ScrollAcross
        text={"hey"}
        imageUrl={imageLink}
      />
      <ScrollZoomOut text={"zoom"} />
      <ScrollItemsAcross text={"items moving across"}/>
      <ScrollStaysInPlace text={"stay in place"} />
      <ScrollExpandsOverSection text={"scroll to expand"} />
      <EndSection text={"the end"} />
    </div>
  );
}

export default App;
