import React from "react";
import { useSelector } from "react-redux";
import Resume from "./components/Resume/Resume";
import StylingPanel from "./components/StylingPanel/StylingPanel";
//@ts-ignore
import DeviceOrientation, { Orientation } from "react-screen-orientation";

function App() {
  const { font, topBarColor } = useSelector((state: any) => state.mainReducer);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  function hexToRGB(hex: any, alpha: any) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  React.useEffect(() => {
    document.body.style.backgroundColor = hexToRGB(topBarColor, 0.1);
  }, [topBarColor]);


  return (
    <div className={`App ${font}`}>
      <DeviceOrientation lockOrientation={"landscape"}>
        <Orientation orientation="landscape" alwaysRender={false}>
          {isLoading ? (
            <div className="loading roboto">
              <h1>Free resume generator</h1>
              <div onClick={() => setIsLoading(false)}>Check it out!</div>
              <p>
                <strong>hamza@halber.io</strong>
              </p>
            </div>
          ) : (
            <>
              <Resume  />
              <StylingPanel  />
            </>
          )}
        </Orientation>
      </DeviceOrientation>
    </div>
  );
}

export default App;
