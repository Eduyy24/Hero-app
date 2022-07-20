import { useParams } from "react-router-dom";
import { ContentHome } from "./components/content-home/ContentHome";
import { Resume } from "./components/resume/resume";
import { Steps } from "./components/steps/Steps";

const Home = () => {
  const {form} = useParams<{form:string}>();
  return (
    <div className="container">
      {form === undefined && <ContentHome />}
      {(form !== undefined && form !== 'resume') && <Steps keyForm={form}/>}
      {form === 'resume' && <Resume />}
    </div>
  )
}

export default Home;