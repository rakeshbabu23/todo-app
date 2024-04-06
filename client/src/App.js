import Mainscreen from "./components/Mainscreen";
import Mulsidebar from "./components/Mulsidebar";
import Sidebar from "./components/Sidebar";
import Subsidebar from "./components/Subsidebar";
import Topbar from "./components/Topbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import TwoPlusTwo from "./components/TwoPlusTwo";
import ThreePlusThree from "./components/ThreePlusThree";
import OnePlusOne from "./components/OnePlusOne";
import TwoPlusThree from "./components/TwoPlusThree";
import DecimalAdd from "./components/DecimalAdd";
import TwoMinusTwo from "./components/subtraction/TwoMinusTwo";
import ThreeMinusThree from "./components/subtraction/ThreeMinusThree";
import TwoMinusOne from "./components/subtraction/TwoMinusOne";
import ThreeMinusTwo from "./components/subtraction/ThreeMinusTwo";
import DecimalSub from "./components/subtraction/DecimalSub";
import TwoIntoTwo from "./components/multiplication/TwoIntoTwo";
import OneIntoThree from "./components/multiplication/OneIntoThree";
import TwoIntoOne from "./components/multiplication/TwoIntoOne";
import ThreeIntoTwo from "./components/multiplication/ThreeIntoTwo";
import OneIntoOne from "./components/multiplication/OneIntoOne";
import OneToThirty from "./components/multiplication/OneToThirty";
import SquareAndCubes from "./components/multiplication/SquareAndCubes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainscreen />}>
        <Route path="addition" element={<Sidebar />}>
          <Route path="two-plus-two" element={<TwoPlusTwo />} />
          <Route path="three-plus-three" element={<ThreePlusThree />} />
          <Route path="one-plus-one" element={<OnePlusOne />} />
          <Route path="two-plus-three" element={<TwoPlusThree />} />
          <Route path="decimal-addition" element={<DecimalAdd />} />
        </Route>
        <Route path="subtraction" element={<Subsidebar />}>
          <Route path="two-minus-two" element={<TwoMinusTwo />} />
          <Route path="three-minus-three" element={<ThreeMinusThree />} />
          <Route path="two-minus-one" element={<TwoMinusOne />} />
          <Route path="three-minus-two" element={<ThreeMinusTwo />} />
          <Route path="decimal-subtraction" element={<DecimalSub />} />
        </Route>
        <Route path="multiplication" element={<Mulsidebar />}>
          <Route path="two-into-two" element={<TwoIntoTwo />} />
          <Route path="one-into-three" element={<OneIntoThree />} />
          <Route path="two-into-one" element={<TwoIntoOne />} />
          <Route path="two-into-three" element={<ThreeIntoTwo />} />
          <Route path="one-into-one" element={<OneIntoOne />} />
          <Route path="one-to-thirty" element={<OneToThirty />} />
          <Route path="squares" element={<SquareAndCubes />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
