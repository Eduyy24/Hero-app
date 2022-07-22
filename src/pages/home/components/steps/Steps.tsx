import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import { WrapperSteps } from "../../../../components/wrapper-steps/WrapperSteps";
import logoHero from "../../../../assets/superhero.png";
import styles from "./Steps.module.css";
import { FunctionComponent, useState } from "react";
import Components from "../../../../components/Components";
import { GeneralButton } from "../../../../components/general-button/GeneralButton";
import { NAME_BUTTON_STEPS } from "../../../../utils/strings";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  GeneralState,
  setDataSell,
} from "../../../../redux/slices/generalSlice";
import { useNavigate } from "react-router-dom";
import usePagesData from "../../../../hooks/usePagesData";
import { Modal } from "../../../../components/modal/Modal";

type Props = {
  keyForm: string;
};

export const Steps: FunctionComponent<Props> = ({ keyForm }) => {
  const { getPageForKey, getAllPagesData, getPageForOrder } = usePagesData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)


  const allPages = getAllPagesData();
  const currentPage = getPageForKey(keyForm || "");
  const nextPath = getPageForOrder((currentPage?.order || 0) + 1)?.key;

  const fieldsKey = allPages.reduce((acum, page) => {
    const keys = page.fields.map((field) => field.key) as never[];
    return [...acum, ...keys];
  }, []);

  const dataSet = useSelector(
    (state: { general: GeneralState }) => state.general.dataSell
  );

  const defaultValues = fieldsKey?.reduce((acum, value) => {
    return { ...acum, [value]: dataSet[value] ?? "" };
  }, {});

  const form = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    dispatch(setDataSell(data));
    navigate(`/${nextPath ?? "resume"}`);
  };

  const onCloseModal = () => setOpenModal(false)

  const onClickOpenModal = () => setOpenModal(true)

  return (
    <WrapperSteps>
      <div data-testid='container-steps'>
        <div className={styles.containerResumeBtn}>
          <p onClick={onClickOpenModal} className={styles.resumeBtn}>Resumen</p>
        </div>
        <img className={styles.logo} src={logoHero} alt="logo hero" />
        <ProgressBar
          value={currentPage?.order || 0}
          max={allPages.length || 0}
        />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentPage?.fields.map((field) =>
            Components(field, form)
          )}
          <div className={styles.containerButton}>
            <GeneralButton name={NAME_BUTTON_STEPS} />
          </div>
        </form>
        <Modal onCloseModal={onCloseModal} open={openModal}>
          <p>Este es un Resumen</p>
        </Modal>
      </div>
    </WrapperSteps>
  );
};
