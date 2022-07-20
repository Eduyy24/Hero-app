import { useParams } from "react-router-dom";
import { ContentHome } from "./components/content-home/ContentHome";
import { Steps } from "./components/steps/Steps";

const Home = () => {
  const {form} = useParams<{form:string}>();
  return (
    <div className="container">
      {form === undefined && <ContentHome />}
      {form !== undefined && <Steps keyForm={form}/>}
    </div>
  )
}

export default Home;