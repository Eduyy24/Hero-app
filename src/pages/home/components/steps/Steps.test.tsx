import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { setPagesData } from "../../../../redux/slices/generalSlice";
import { store } from "../../../../redux/store";
import {Steps} from './Steps';


describe("<Steps />", () => {

  test("<InputData> validate useForm hook with JSON config for the component", async () => {
    const validEmail = 'Eduardo@edu.com'
    const inValidEmail = 'Eduardo@edu'

    store.dispatch(setPagesData([
      {
        order: 1,
        key: 'step-1',
        fields: [
          {
            type: 'string',
            component: 'inputText',
            key: 'email',
            label: 'Correo electrómnico',
            rules: {
              required: { value: true, message: 'El campo es obligatorio' },
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo inválido' },
            }
          }
        ]
      },
    ]))

    render(
      <Provider store={store}>
        <Steps keyForm="step-1" />
      </Provider>
    );
    const inputs = screen.getAllByTestId('inputText')
    const content = screen.getByTestId('container-steps')
    const btnContinue = screen.getByText('Continuar')

    expect(content).toMatchSnapshot();
    expect(inputs.length).toEqual(1) // 1 input in de document

    fireEvent.submit(btnContinue);

    await waitFor(() => {
      // valido la aplicación de las reglas y la aparición del mensaje de error segun el JSON
      expect(screen.getByText('El campo es obligatorio')).toBeInTheDocument();
    })

    fireEvent.input(inputs[0], {target: {
      value: inValidEmail
    }})

    await waitFor(() => {
      // valido la aplicación de las reglas y la aparición del mensaje de error segun el JSON
      expect(screen.getByText('Correo inválido')).toBeInTheDocument();
    })

    fireEvent.input(inputs[0], {target: {
      value: validEmail
    }})

    fireEvent.submit(btnContinue);

    await waitFor(() => {
      // valido el correcto funcionamiento del acction al guardar en el dataSell
      const dataSell = store.getState().general.dataSell as {email: string};
      expect(dataSell?.email).toBe(validEmail)
    })

    await waitFor(() => {
      // Valido el ocultamiento del mensaje de error una vez diligenciado el campo correctamente
      expect(screen.queryByText('El campo es obligatorio')).not.toBeInTheDocument()
    })
  });

  test("<InputSelect> validate useForm hook with JSON config for the component", async () => {
    store.dispatch(setPagesData([
      {
        order: 2,
        key: 'step-2',
        fields: [
          {
            type: 'string',
            component: 'inputSelect',
            key: 'girlFriend',
            label: 'Tiene novia?',
            options: ['SI', 'NO'],
            rules: {
              required: { value: true, message: 'El campo es obligatorio' },
            }
          }
        ]
      },
    ]))

    render(
      <Provider store={store}>
        <Steps keyForm="step-2" />
      </Provider>
    );
    const inputs = screen.getAllByTestId('inputSelect')
    const content = screen.getByTestId('container-steps')
    const btnContinue = screen.getByText('Continuar')

    expect(content).toMatchSnapshot();
    expect(inputs.length).toEqual(1) // 1 input in de document

    fireEvent.submit(btnContinue);

    await waitFor(() => {
      // valido la aplicación de las reglas y la aparición del mensaje de error segun el JSON
      expect(screen.getByText('El campo es obligatorio')).toBeInTheDocument();
    })

    userEvent.selectOptions(inputs[0], 'SI');

    fireEvent.submit(btnContinue);

    await waitFor(() => {
      // valido el correcto funcionamiento del acction al guardar en el dataSell
      const dataSell = store.getState().general.dataSell as {girlFriend: string};
      expect(dataSell?.girlFriend).toBe('SI')
    })

    await waitFor(() => {
      // Valido el ocultamiento del mensaje de error una vez diligenciado el campo correctamente
      expect(screen.queryByText('El campo es obligatorio')).not.toBeInTheDocument()
    })
  })

  test("<InputFile> validate useForm hook with JSON config for the component", async () => {
    // implement
  })

  test("<InputCheckbox> validate useForm hook with JSON config for the component", async () => {
    // implement
  })
});