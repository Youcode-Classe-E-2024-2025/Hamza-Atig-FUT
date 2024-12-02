# FUT Team Builder

**FUT Team Builder** is an interactive web application designed for building your **FIFA Ultimate Team (FUT)**. It allows users to create their team, add players, select tactical formations (e.g., 4-4-2, 4-3-3), and manage the players' positions dynamically. The app also calculates team chemistry based on player links and stores data in the browser for future use.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation Guide](#installation-guide)
- [User Stories](#user-stories)
- [Performance Criteria](#performance-criteria)
- [Contributors](#contributors)

---

## Project Overview

The **FUT Team Builder** app allows users to:

- Add, position, and modify players based on tactical formations.
- View team chemistry based on player compatibility.
- Store and retrieve team data using **localStorage** for future sessions.

### Key Features

| Feature                            | Description                                                                                      | Status            |
|------------------------------------|--------------------------------------------------------------------------------------------------|-------------------|
| **Dynamic Player Addition**        | Add players with details like name, position, rating, and statistics.                             | ✅ Complete       |
| **Tactical Formation Positioning** | Players are automatically positioned based on the selected formation (e.g., 4-4-2, 4-3-3).         | ✅ Complete       |
| **Chemistry Calculation**          | Calculates the chemistry of the team based on player links (same club, league, nationality).      | ✅ Complete       |
| **Form Validation**                | Validates all player information input to ensure data integrity.                                  | ✅ Complete       |
| **localStorage Integration**       | Save team and player data using **localStorage** for persistent data across sessions.            | ✅ Complete       |
| **Drag & Drop**                    | Allows players to be rearranged within the formation using a drag-and-drop interface.            | ❌ Not Implemented|
| **Responsive Design**              | The interface adapts to various screen sizes (desktop, tablet, mobile).                           | ✅ Complete       |

---

## Technologies Used

- **HTML**: Markup language for structuring the content.
- **CSS**: Styling with **Tailwind CSS** or **Bootstrap** for responsive design.
- **JavaScript**: Vanilla JS for DOM manipulation, form validation, and dynamic interactions.
- **localStorage**: For saving the user's team and formation between sessions.

---

## Installation Guide

To get started with **FUT Team Builder**, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Youcode-Classe-E-2024-2025/Hamza-Atig-FUT.git
