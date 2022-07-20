import { useParams } from "react-router-dom";
import usePagesData from "../../hooks/usePagesData";
import { ContentHome } from "./components/content-home/ContentHome";
import { Steps } from "./components/steps/Steps";

const Home = () => {
  const {form} = useParams<{form:string}>();
  const {getPageForKey, totalPages} = usePagesData()
  const currentPage = getPageForKey(form || '')

  return (
    <div className="container">
      {form === undefined && <ContentHome />}
      {currentPage !== undefined && <Steps currentPage={currentPage} totalPages={totalPages} />}
    </div>
  )
}

export default Home;