import { useParams } from "react-router-dom";
import usePagesData from "../../hooks/usePagesData";
import { ContentHome } from "./components/content-home/ContentHome";
import { Steps } from "./components/steps/Steps";

const Home = () => {
  const {form} = useParams<{form:string}>();
  const {getPageForKey} = usePagesData()
  const currentPage = getPageForKey(form || '')
  console.log(currentPage);

  return (
    <div className="container">
      {form === undefined && <ContentHome />}
      {currentPage !== undefined && <Steps />}
    </div>
  )
}

export default Home;