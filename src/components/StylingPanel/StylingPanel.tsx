import * as React from "react";
//@ts-ignore
import { Frame } from "framer";
import { useForm, useWatch } from "react-hook-form";
//@ts-ignore
import { CirclePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

import "./StylingPanel.scss";

interface IStylingPanel {}

const StylingPanel: React.FunctionComponent<IStylingPanel> = (
  props: IStylingPanel
) => {
  const { isPreview } = useSelector((state: any) => state.mainReducer);

  const [isOpen, setIsOpen] = React.useState(true);
  const variants = {
    opened: {
      right: 0,
      width: 250,
    },
    closed: {
      width: 250,
      right: -250,
    },
  };

  React.useEffect(() => {
    if (isPreview) {
      setIsOpen(false);
    }
  }, [isPreview]);

  const buttonVariants = {
    opened: {
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      borderRadius: "10px",
    },
    closed: {
      height: 80,
      width: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      borderRadius: "10px",
      paddingRight: "20px",
    },
  };
  return (
    <div className="styling-panel-container">
      {/* <button onClick={() => setIsOpen(!isOpen)}>ClICK</button> */}
      <Frame
        animate={isOpen ? "opened" : "closed"}
        variants={variants}
        height={"80vh"}
        backgroundColor={"transparent"}
      >
        <div className="styling-panel-inner roboto">
          <h3>Styling panel</h3>
          <StylingForm />
          <button
            type="button"
            className="button-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Frame
              variants={buttonVariants}
              animate={isOpen ? "opened" : "closed"}
            >
              <i className="fa fa-angle-left"></i>
            </Frame>
          </button>
        </div>
      </Frame>
    </div>
  );
};

export default StylingPanel;

const StylingForm = () => {
  const dispatch = useDispatch();
  const { isPreview } = useSelector((state: any) => state.mainReducer);
  const { register, control } = useForm({
    defaultValues: {
      font: "roboto",
    },
  });

  const handleColorChange = (color: any) => {
    dispatch({
      type: "SET_TOP_BAR_COLOR",
      payload: color.hex,
    });
  };

  const fontWatch: any = useWatch({
    control,
    name: "font",
    defaultValue: "roboto",
  });

  React.useEffect(() => {
    dispatch({
      type: "SET_FONT",
      payload: fontWatch,
    });
  }, [fontWatch, dispatch]);

  const togglePreview = () => {
    dispatch({
      type: "TOGGLE_PREVIEW",
    });
  };

  return (
    <form className="styling-form">
      <div className="form-group">
        <h4 className="roboto regular">Font Family</h4>
        <div className="form-input roboto regular">
          <input
            id="roboto"
            type="radio"
            value={"roboto"}
            {...register("font")}
          />
          <label htmlFor={"roboto"}>Roboto</label>
        </div>
        <div className="form-input quicksand">
          <input
            id="quicksand"
            type="radio"
            value={"quicksand"}
            {...register("font")}
          />
          <label htmlFor={"quicksand"}>QuickSand</label>
        </div>
        <div className="form-input oswald">
          <input
            id="oswald"
            type="radio"
            value={"oswald"}
            {...register("font")}
          />
          <label htmlFor={"oswald"}>Oswald</label>
        </div>
        <div className="form-input oswald">
          <input
            id="ubuntu"
            type="radio"
            value={"ubuntu"}
            {...register("font")}
          />
          <label htmlFor={"ubuntu"}>Ubuntu</label>
        </div>
      </div>

      <div className="form-group">
        <h4 className="roboto regular">Top bar color</h4>
        <CirclePicker
          onChange={handleColorChange}
          colors={[
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#2196f3",
            "#00bcd4",
            "#009688",
            "#4caf50",
            "#cddc39",
            "#ffeb3b",
            "#ffc107",
            "#ff9800",
            "#ff5722",
            "#795548",
            "#000000",
          ]}
        />
      </div>
      <input
        className="form-action m-t-a"
        type="button"
        value={isPreview ? "Disable Preview" : "Preview"}
        onClick={togglePreview}
      />

      <input
        onClick={() => {
          window.scrollTo(0, 0);
          //@ts-ignore
          html2canvas(document.querySelector("#resume"), {
            useCORS: true,
            etterRendering: 1,
            allowTaint: true,
          }).then((canvas: any) => {
            var imgData = canvas.toDataURL("image/png");
            // var doc: any = new jspdf("p", "mm", "a4");
            // var width = doc.internal.pageSize.getWidth();
            // var height = doc.internal.pageSize.getHeight();
            // doc.addImage(imgData, "JPEG", 0, 0, width, height);
            // doc.save("sample-file.pdf");
            var imgWidth = 210;
            var pageHeight = 295;
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            var doc = new jspdf("p", "mm");
            var position = 0;

            doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.save("CV" + ".pdf");
          });
        }}
        className="form-action"
        type="button"
        value={"Save as PDF"}
      />
    </form>
  );
};
