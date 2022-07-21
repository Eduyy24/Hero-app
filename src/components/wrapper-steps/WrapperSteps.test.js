import {render, screen} from '@testing-library/react';
import {WrapperSteps} from './WrapperSteps'

describe('<WrapperSteps />', () => {
  test('Show children', () => {
    render(
      <WrapperSteps>
        <div><p>Test</p></div>
      </WrapperSteps>
    )
    const children = screen.getByText('Test');
    expect(children).toBeInTheDocument()
  })
})