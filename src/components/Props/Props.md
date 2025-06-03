# React Props

**Link to the chapter**: [https://ui.dev/c/react/props](https://ui.dev/c/react/props)

## Overview

Props are to components what arguments are to functions - they allow you to pass data and configuration to components. You can pass any values as props, including:

- Strings
- Numbers
- Objects
- Arrays
- Functions
- JSX elements

## Example: Passing Various Prop Types

```jsx
<Profile 
  username="axelhusson"
  authenticated={true}
  logout={handleLogout}
  header={<h1>Welcome</h1>}
  footer={<p>Goodbye</p>}
  items={['apple', 'banana', 'orange']}
/>
```

## The `children` Prop

The `children` prop is a special prop that represents the content between the opening and closing tags of a component.

```jsx
function Layout(props) {
  return ( 
    <div className="layout">
      <SideBar />
      {props.children}
      <Footer />
    </div>
  );
}

// Usage
<Layout>
  <Pizza />
</Layout>
```

In this example, the `<Pizza />` component is passed as the `children` prop to the `Layout` component.

## Key Points

- Props make components reusable and configurable
- Props are read-only - components should never modify their props
- The `children` prop allows for flexible component composition
- Props enable data flow from parent to child components