import {fireEvent, render, screen} from '@testing-library/react';
import {Input} from './inputs'

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
})