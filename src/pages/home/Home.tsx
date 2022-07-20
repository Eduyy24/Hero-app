import { GeneralButton } from "../../components/general-button/GeneralButton";
import { WrapperButton } from "./WrapperButton/WrapperButton";

const Home = () => {
  return (
    <div className="container">
      <WrapperButton>
        <GeneralButton name="Comprar" />
      </WrapperButton>
    </div>
  )
}

export default Home;