import { useSelector } from "react-redux";
import { GeneralState } from "../redux/slices/generalSlice";

const usePagesData = () => {
  const pagesData = useSelector((state: {general: GeneralState}) => state.general.pagesData);

  const getPageForOrder = (order: number) => pagesData.find((page) => page.order === order);

  const getPageForKey = (key: string) => pagesData.find((page) => page.key === key);

  return {
    getPageForOrder,
    getPageForKey,
    getAllPagesData: () => pagesData
  }
}

export default usePagesData