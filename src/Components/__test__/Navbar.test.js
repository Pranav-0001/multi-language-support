import { render ,screen} from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'; 


jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: jest.fn() }),
  }));

test("height should be 3.5rem", () => {
    render(
        <BrowserRouter> <Navbar /></BrowserRouter>
   
    );
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveStyle(`height: 3.5rem`);
})  