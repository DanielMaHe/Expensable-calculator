import Calculator from "./Components/calculator";
import { colors } from "./assets/styles/colors";
import trolley from "./assets/images/trolley.svg";

const category = {
  name: "Groceries",
  color: colors.blue[50],
  icon: trolley,
};

function App() {
  return (
    <>
      <Calculator category={category} />
    </>
  );
}

export default App;
