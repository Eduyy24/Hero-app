import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setDataSell, setPagesData } from "../../../../redux/slices/generalSlice";
import { store } from "../../../../redux/store";
import {Resume} from './Resume';


describe("<ContentHome />", () => {
  test("Render component, and render number row correctly", () => {
    store.dispatch(setPagesData([
      {
        order: 1,
        key: 'step-1',
        fields: [
          {
            type: 'string',
            component: 'inputText',
            key: 'name',
            label: 'Nombre y apellidos',
            rules: {
              required: { value: true, message: 'El campo es obligatorio' },
            }
          }
        ]
      },
    ]))
    store.dispatch(setDataSell({
      name: 'Eduardo Pinedo'
    }))

    render(
      <Provider store={store}>
        <Resume />
      </Provider>
    );

    const content = screen.getByTestId('container-resume')
    expect(content).toMatchSnapshot();
    expect(screen.getByText('Nombre y apellidos:')).toBeInTheDocument()
    expect(screen.getByText('Eduardo Pinedo')).toBeInTheDocument()
    expect(screen.getAllByTestId('list-resume').length).toEqual(1)
  });
});