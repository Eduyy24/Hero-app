import {render, fireEvent, screen} from '@testing-library/react';
import {GeneralButton} from './GeneralButton'
describe('<GeneralButton />', () => {
  test('onClick called', () => {
    const name = 'Aceptar'
    const onClick = jest.fn()

    render(<GeneralButton name={name} onClick={onClick} />)
    const btn = screen.getByText(name)

    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })
})