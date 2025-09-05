# Props Drilling, State Lifting, and Context API in React JS

## 📌 What is Props Drilling?

**Props drilling** is the process of passing data (props) from a parent component down to deeply nested child components through intermediate components that may not use the data themselves.  

👉 While it works, it can make the code harder to maintain as the component tree grows deeper.

---

## 📌 What is State Lifting?

**State lifting** (or *lifting state up*) is a React pattern where shared state is moved up to the closest common ancestor of components that need to access or modify it.  

👉 The ancestor manages the state and passes it down via props, keeping components in sync.

---

## ⚡ Example: Counter App with Props Drilling & State Lifting

```jsx
import React, { useState } from 'react';

function Grandparent() {
  const [count, setCount] = useState(0);

  return <Parent count={count} setCount={setCount} />;
}

function Parent({ count, setCount }) {
  // This component just passes props down (props drilling)
  return (
    <div>
      <ChildUpdater count={count} setCount={setCount} />
      <ChildDisplay count={count} />
    </div>
  );
}

function ChildUpdater({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}

function ChildDisplay({ count }) {
  return <h1>Count: {count}</h1>;
}

export default Grandparent;

##  context api
In React, Context is a feature that allows you to share data (such as state, functions, or any values) across the component tree without having to pass props manually through every level. It solves the problem of "prop drilling," where props are passed down through many intermediary components that do not necessarily need the data themselves.

How Context Works:
You create a context object using React.createContext().

The context object provides two components:

Provider: Wraps the part of your component tree where you want the context values to be available. It accepts a value prop which holds the data to share.

Consumer: Any descendant component can use this to access the context value. In modern React, the useContext hook is more commonly used instead of Consumer.

When the value in the Provider changes, all subscribed components using the context automatically re-render with the updated data.

Why Use Context?
To avoid passing props through many layers (prop drilling).

To share global data like user authentication, UI themes, or language preferences.

To make data access simpler and the code easier to maintain.





# 📖 React Router Hooks: `useLocation` & `useParams`

This guide explains how to use two important React Router hooks: **`useLocation`** and **`useParams`**.

---

## 🔹 1. `useLocation`

The `useLocation` hook gives access to the **current location object** of your app.  
It is useful for:
- Checking the current URL path
- Reading query parameters (`?id=123`)
- Accessing hash fragments (`#section`)
- Working with route state

### ✅ Example:
```jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function ShowLocation() {
  const location = useLocation();

  return (
    <div>
      <h2>📍 Current Location</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search Params: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ShowLocation />} />
      </Routes>
    </BrowserRouter>
  );
}
