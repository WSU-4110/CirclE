import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import CreateAccount from './CreateAccount';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('CreateAccount', () => {
  it('updates username state on text change', () => {
    const { getByPlaceholderText } = render(<CreateAccount />);
    const usernameInput = getByPlaceholderText('Username');
    fireEvent.changeText(usernameInput, 'testuser');
    expect(usernameInput.props.value).toBe('testuser');
  });

  it('updates email state on text change', () => {
    const { getByPlaceholderText } = render(<CreateAccount />);
    const emailInput = getByPlaceholderText('Email');
    fireEvent.changeText(emailInput, 'testuser@example.com');
    expect(emailInput.props.value).toBe('testuser@example.com');
  });

  it('updates password state on text change', () => {
    const { getByPlaceholderText } = render(<CreateAccount />);
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('navigates to home on account creation', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });
    const { getAllByText } = render(<CreateAccount />);
    const createAccountButton = getAllByText('Create Account')[1];
    fireEvent.press(createAccountButton);
    expect(navigate).toHaveBeenCalledWith('Home');
  });
});