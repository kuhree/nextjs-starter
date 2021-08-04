import React from 'react';
import { fireEvent, render, waitFor } from '../../utils/setup-tests';
import { ThemeTypes } from './theme';
import { useTheme } from './theme.context';

const WithThemeProvider = () => {
  const { theme, changeTheme, toggleLightAndDarkThemes, paginateThemes } =
    useTheme();

  return (
    <div>
      <span>{JSON.stringify(theme, null, 2)}</span>
      <button onClick={() => changeTheme(ThemeTypes.LIGHT)}>
        change theme
      </button>
      <button onClick={() => changeTheme(paginateThemes().next)}>
        paginate theme
      </button>
      <button onClick={() => toggleLightAndDarkThemes()}>toggle theme</button>
    </div>
  );
};

describe('feat: theme -> useTheme()', () => {
  it('renders the correct theme and can change by name', async () => {
    const { getByText } = render(<WithThemeProvider />);

    const changeThemeButton = getByText(/change theme/gi);
    const isLightTheme = () => !!getByText(/"name": "light"/gi);
    const isDarkTheme = () => !!getByText(/"name": "dark"/gi);

    expect(changeThemeButton).toBeTruthy();
    expect(isDarkTheme()).toBeTruthy();

    fireEvent.click(changeThemeButton);

    await waitFor(() => getByText(/"name": "light"/gi), { timeout: 3000 });

    expect(isLightTheme()).toBeTruthy();
  });

  it('renders the correct theme and can paginate', async () => {
    const { getByText } = render(<WithThemeProvider />);

    const paginateThemeButton = getByText(/paginate theme/gi);
    const isLightTheme = () => !!getByText(/"name": "light"/gi);
    const isDarkTheme = () => !!getByText(/"name": "dark"/gi);

    expect(paginateThemeButton).toBeTruthy();
    expect(isDarkTheme()).toBeTruthy();

    fireEvent.click(paginateThemeButton);

    await waitFor(() => getByText(/"name": "light"/gi), { timeout: 3000 });

    expect(isLightTheme()).toBeTruthy();
  });

  it('renders the correct theme and can toggle between light and dark', async () => {
    const { getByText } = render(<WithThemeProvider />);

    const paginateThemeButton = getByText(/toggle theme/gi);
    const isLightTheme = () => !!getByText(/"name": "light"/gi);
    const isDarkTheme = () => !!getByText(/"name": "dark"/gi);

    expect(paginateThemeButton).toBeTruthy();
    expect(isDarkTheme()).toBeTruthy();

    fireEvent.click(paginateThemeButton);

    await waitFor(() => getByText(/"name": "light"/gi), { timeout: 3000 });

    expect(isLightTheme()).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { container } = render(<WithThemeProvider />);

    expect(container).toMatchSnapshot();
  });
});
