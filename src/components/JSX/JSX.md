# React Components and JSX

**Link to the chapter**: [https://ui.dev/c/react/jsx](https://ui.dev/c/react/jsx)

## What is a React Component?

A **React component** is a function that returns a description of some UI. It serves as a reusable building block for creating user interfaces.

## Key JSX Rules and Best Practices

### 1. Single Root Element
- Components must be wrapped in a single root element (e.g., `<div>`, `<section>`, or React Fragment `<>`)
- This prevents JSX parsing errors and avoids unnecessary DOM complexity

### 2. Multi-line JSX
- Wrap multi-line JSX expressions in parentheses for proper formatting:
```jsx
return (
  <div>
    <h1>Hello World</h1>
    <p>This is a multi-line component</p>
  </div>
);
```

### 3. Self-Closing Elements
- Use self-closing syntax for elements without children:
```jsx
<img src="image.jpg" alt="Description" />
<input type="text" />
<br />
```

### 4. Attribute Naming Conventions
- Replace `class` with `className` (since `class` is a JavaScript reserved keyword)
- Convert dash-separated attributes to camelCase:
  - `data-id` → `dataId`
  - `aria-label` → `ariaLabel`
  - `tab-index` → `tabIndex`

### 5. Rendering Lists
- Use the `map()` function to render arrays
- Each list item must have a unique `key` prop to help React track changes:
```jsx
const items = ['apple', 'banana', 'orange'];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```
**Reference**: [React JSX Guide](https://ui.dev/c/react/jsx)