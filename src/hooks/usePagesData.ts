import { useSelector } from "react-redux";
import { GeneralState } from "../redux/slices/generalSlice";

const usePagesData = () => {
  const pagesData = useSelector((state: {general: GeneralState}) => state.general.pagesData);

  const getPageForOrder = (order: number) => pagesData.find((page) => page.order === order);

  const getPageForKey = (key: string) => pagesData.find((page) => page.key === key);

  const allFields =  pagesData.reduce((acum, page) => {
    return [...acum, ...page.fields as never];
  }, []);

  const getFieldForKey = (key: string):Field | undefined => allFields.find((field: Field) => field.key === key)

  return {
    getPageForOrder,
    getPageForKey,
    getAllPagesData: () => pagesData,
    getFieldForKey
  }
}

export default usePagesData