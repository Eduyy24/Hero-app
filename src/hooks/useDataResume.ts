import { useSelector } from "react-redux";
import { GeneralState } from "../redux/slices/generalSlice";
import { formatMoney } from "../utils/utils";
import usePagesData from "./usePagesData";

type DataProcess = {
  key: string;
  value: string;
};

const useDataResume = () => {
  const dataSell = useSelector(
    (state: { general: GeneralState }) => state.general.dataSell
  );
  const { getFieldForKey } = usePagesData();
  const dataResume = Object.entries(dataSell);

  const processData = () => {
    const dataArr: DataProcess[] = [];
    for (const data of dataResume) {
      const field = getFieldForKey(data[0]);
      if (field) {
        let value = "";

        if (field.type === "string") {
          value = data[1] as string;
          dataArr.push({
            key: field.label,
            value,
          });
        }

        if (field.type === "money") {
          if(data[1] as string) {
            value = formatMoney(data[1] as string);
          }
          dataArr.push({
            key: field.label,
            value,
          });
        }

        if (field.type === "bool") {
          value = (data[1] as boolean) ? "SI" : "NO";
          dataArr.push({
            key: field.label,
            value,
          });
        }
      }
    }
    return dataArr;
  };

  return {
    processData
  }
}

export default useDataResume