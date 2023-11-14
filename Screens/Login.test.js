import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import { Alert } from 'react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
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

  it('displays error message on incorrect login', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(usernameInput, 'wronguser');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    const loginButton = getAllByText('Login')[1];
    fireEvent.press(loginButton);
    const errorMessage = getByText('Invalid username or password');
    expect(errorMessage).toBeTruthy();
  });

  it('displays alert on Forgot Password press', () => {
    const { getByText } = render(<Login />);
    const forgotPasswordLink = getByText('Forgot Password?');
    fireEvent.press(forgotPasswordLink);
    expect(Alert.alert).toHaveBeenCalledWith('Forgot Password', 'Redirecting to forgot password screen.');
  });
});