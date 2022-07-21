import {render, screen} from '@testing-library/react';
import {ProgressBar} from './ProgressBar'

describe('<GeneralButton />', () => {
  test('Show ProgressBar correctly', () => {
    const max = 10
    const value = 9;

    render(<ProgressBar value={value} max={max} />)
    const progress = screen.getByTestId('progress');

    expect(progress).toMatchSnapshot()
    expect(progress).toHaveAttribute('max', max.toString())
    expect(progress).toHaveAttribute('value', value.toString())
    expect(progress).toBeInTheDocument()
  })
})