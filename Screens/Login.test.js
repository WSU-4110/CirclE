import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Login', () => {
  it('updates username state on text change', () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Username');
    fireEvent.changeText(usernameInput, 'admin');
    expect(usernameInput.props.value).toBe('admin');
  });

  it('updates password state on text change', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(passwordInput, 'password');
    expect(passwordInput.props.value).toBe('password');
  });

  it('navigates to home on successful login', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });
    const { getByPlaceholderText, getAllByText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(usernameInput, 'admin');
    fireEvent.changeText(passwordInput, 'password');
    const loginButton = getAllByText('Login')[1];
    fireEvent.press(loginButton);
    expect(navigate).toHaveBeenCalledWith('Home');
  });
  

  it('navigates to CreateAccount on button press', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });
    const { getByText } = render(<Login />);
    const createAccountButton = getByText("Don't have an account? Sign Up");
    fireEvent.press(createAccountButton);
    expect(navigate).toHaveBeenCalledWith('CreateAccount');
  });
});