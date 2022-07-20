import { useParams } from "react-router-dom";
import { ContentHome } from "./content-home/ContentHome";

const Home = () => {
  const {form} = useParams<{form:string}>();
  console.log(form);

  return (
    <div className="container">
      { form === undefined ? <ContentHome /> : <div />}
    </div>
  )
}

export default Home;