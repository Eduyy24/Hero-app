import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input, Select, PhotoFile, Checkbox} from './inputs'


describe('<Inputs />', () => {
  test('<Input />, onChange resolve and return value, too validate atributes from field', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = ""
    const error = ""

    render(<Input field={field} label={label} error={error}  />)

    const input = screen.getByTestId('inputText')

    fireEvent.change(input, {target: {value: 'test'}})

    expect(input).toBeInTheDocument()
    expect(field.onChange).toHaveBeenCalled()
    expect(input.value).toBe('test')
    expect(input).toHaveAttribute('name', field.name)
  })

  test('<Input />, show error and label', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = "Nombre"
    const error = "Este es un error"

    render(<Input field={field} label={label} error={error}  />)

    const labelDOM = screen.getByText(label)
    const errorDOM = screen.getByText(error)

    expect(labelDOM).toBeInTheDocument()
    expect(errorDOM).toBeInTheDocument()
  })

  test('<Select />, onChange resolve and return value selected, too validate atributes from field', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = ""
    const error = ""
    const options = ['1', '2']

    render(<Select field={field} label={label} error={error} options={options} />)

    const input = screen.getByTestId('inputSelect')
    userEvent.selectOptions(input, '1');
    expect((screen.getByText('1')).selected).toBeTruthy();
    expect((screen.queryByText('2')).selected).toBeFalsy();
    expect(field.onChange).toHaveBeenCalled()
    expect(input.value).toBe('1')
  })

  test('<Select />, show error and label, and not selected values', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = "Nombre"
    const error = "Este es un error"
    const options = ['1', '2']


    render(<Select field={field} label={label} error={error} options={options} />)

    const labelDOM = screen.getByText(label)
    const errorDOM = screen.getByText(error)

    expect(labelDOM).toBeInTheDocument()
    expect(errorDOM).toBeInTheDocument()
    expect((screen.queryByText('1')).selected).toBeFalsy();
    expect((screen.queryByText('2')).selected).toBeFalsy();
  })

  test('<PhotoFile />, validate onChange resolve and return value correctly', async () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const file = new File(["test file"], "file.png", { type: "image/png" });

    render(<PhotoFile field={field} label="" error="" />)
    const input = screen.getByTestId('inputFile')

    userEvent.upload(input, file);
    expect(input.files[0]).toStrictEqual(file);
    expect(field.onChange).toHaveBeenCalled()
  })

  test('<PhotoFile />, show error and label', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = "Nombre"
    const error = "Este es un error"

    render(<PhotoFile field={field} label={label} error={error}  />)

    const labelDOM = screen.getByText(label)
    const errorDOM = screen.getByText(error)

    expect(labelDOM).toBeInTheDocument()
    expect(errorDOM).toBeInTheDocument()
  })

  test('<Checkbox />, validate onChange resolve and checked value correctly', async () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    render(<Checkbox field={field} label="" error="" />)
    const input = screen.getByTestId('inputCheckbox')

    fireEvent.click(input)

    expect(input.checked).toStrictEqual(true);
    expect(field.onChange).toHaveBeenCalled()
  })

  test('<Checkbox />, show error and label', () => {
    const field = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: "name",
    }
    const label = "Nombre"
    const error = "Este es un error"

    render(<Checkbox field={field} label={label} error={error}  />)

    const labelDOM = screen.getByText(label)
    const errorDOM = screen.getByText(error)

    expect(labelDOM).toBeInTheDocument()
    expect(errorDOM).toBeInTheDocument()
  })
})