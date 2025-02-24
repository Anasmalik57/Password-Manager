# VaultX - Password Manager

## Overview

VaultX is a simple password manager built with **React** and **Tailwind CSS**. It allows users to store website credentials securely using **localStorage**. The project includes a **Navbar** and a **Password Manager (Manager)** component.

## Features

- Add and store website credentials (site URL, username, password)
- Toggle password visibility
- Save data persistently using localStorage
- Responsive UI with Tailwind CSS

## Technologies Used

- React.js
- Tailwind CSS
- Local Storage
- Icons from external sources (lordicon, custom images)

## Installation

### Clone the repository:

```sh
git clone https://github.com/Anasmalik57/vaultx.git
```

### Navigate to the project directory:

```sh
cd vaultx
```

### Install dependencies:

```sh
npm install
```

### Start the development server:

```sh
npm start
```

## Project Structure

```
/src
 ├── components
 │   ├── Navbar.js
 │   ├── Manager.js
 ├── icons
 │   ├── eye.png
 │   ├── eyecross.png
 │   ├── github.svg
 ├── App.js
 ├── index.js
 ├── styles.css
```

## Components

### Navbar

- Displays the **VaultX** logo.
- Includes navigation links (**Home, About, Career, Contact**).
- GitHub icon linking to the project repository.

### Manager (Password Manager)

- Input fields to store **website URL, username, and password**.
- **Show/Hide password** feature using an eye icon.
- Stores and retrieves credentials from **localStorage**.
- Displays saved credentials in a table format.

## Usage

1. Enter **Website URL, Username, and Password**.
2. Click the **Add Password** button to save the credentials.
3. The saved passwords will be displayed in the table below.
4. Click the eye icon to toggle password visibility.
5. Refreshing the page will retain the passwords as they are stored in localStorage.

## Future Enhancements

- Add password encryption for better security.
- Implement **edit** and **delete** options for stored passwords.
- Integrate authentication for multi-user support.

## License

This project is open-source and available under the **MIT License**.

## Author

**Mohd Anas** - [GitHub Profile](https://github.com/Anasmalik57/Password-Manager)

---

Feel free to modify and enhance VaultX as needed! 🚀