import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store";
import { ContentHome } from "./ContentHome";

describe("<ContentHome />", () => {
  test("render", () => {
    render(
      <Provider store={store}>
        <ContentHome />
      </Provider>
    );

    const content = screen.getByTestId('container-content')
    expect(content).toMatchSnapshot();
  });
});
