import { BellRing,Check } from "lucide-react";
import "./App.css";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="error"
        title="Warnning"
        icon={<BellRing />}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum repudiandae quod doloribus dolor ullam, autem tempora ab, deleniti impedit, numquam cumque quidem dolore. Accusamus consequatur ad minus quibusdam dicta!"
      />
      <Alert
        type="success"
        title="Success"
        icon={<Check />}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum repudiandae quod doloribus dolor ullam, autem tempora ab, deleniti impedit, numquam cumque quidem dolore. Accusamus consequatur ad minus quibusdam dicta!"
      />
      <Alert
        type="info"
        title="info"
        icon={<Check />}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum repudiandae quod doloribus dolor ullam, autem tempora ab, deleniti impedit, numquam cumque quidem dolore. Accusamus consequatur ad minus quibusdam dicta!"
      />
    </>
  );
}

export default App;
