# 🎮 Avatar Dress-Up Game (React + TypeScript + Tailwind)

A customizable avatar dress-up web application where users can create their own character by selecting different hairstyles, body types, shoes, accessories, and backgrounds.

This project was built using **React, TypeScript, and Tailwind CSS** to demonstrate modern frontend development practices such as component-based architecture, state management, and UI layering.

---

# 📸 Preview

<img width="1536" height="1024" alt="ChatGPT Image Mar 10, 2026, 04_02_11 PM" src="https://github.com/user-attachments/assets/0d742192-927a-48f1-9deb-4dea9eedde7e" />

Features include:

* Character customization
* Category-based item selection
* Layered avatar rendering
* Reset functionality
* Background scenes

---

# 🚀 Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite / Create React App**
* **Component-based architecture**

---

# 📁 Project Structure

```
src
 ├ components
 │   ├ Avatar.tsx
 │   └ ItemGrid.tsx
 │
 ├ App.tsx
 └ main.tsx

public
 └ assets
    ├ body
    ├ clothes
    ├ hair
    ├ shoes
    ├ accessories
    └ background
```

---

# 🧠 How It Works

The avatar is built using **layered images** stacked using CSS positioning.

Avatar layers:

```
Background
   ↓
Body
   ↓
Clothes
   ↓
Shoes
   ↓
Hair
   ↓
Accessories
```

Each layer is dynamically updated using **React state**.

Example:

```tsx
const [hair, setHair] = useState("hair1.png");
```

When the user clicks an item in the clothing grid, the state updates and the avatar re-renders instantly.

---

# 🎨 Features

### Avatar Customization

Users can change:

* Hair styles
* Body types
* Shoes
* Accessories
* Background scenes

### Item Selection Grid

Items are displayed in a responsive grid and can be selected with a click.

### Reset Character

Reset the avatar to default items.

---

# 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/avatar-dressup-game.git
```

Navigate to the project folder:

```bash
cd avatar-dressup-game
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🌟 Future Improvements

Planned features include:

* 🎲 Random outfit generator
* 💾 Export avatar as PNG
* 🎨 Color picker for clothing
* 📱 Mobile responsive layout
* 🖱 Drag & drop clothing system
* 🎭 More character customization options

---

# 📚 Learning Goals

This project was built to practice:

* React component design
* TypeScript type safety
* Tailwind CSS layout systems
* Managing UI state in React
* Building interactive user interfaces

---

# 👨‍💻 Author

Created by **Thembelihle Maluka**
Aspiring Full-Stack Developer

