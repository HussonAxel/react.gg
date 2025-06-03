# Handling events

**Link to the chapter**: [https://ui.dev/c/react/events](https://ui.dev/c/react/events)


When a user interacts with a React component, such as clicking a button or typing in an input field, an event is triggered. React provides a way to handle these events using event handlers.
It's current to encapsulate the event handling logic within the component itself, allowing for a more modular and reusable code structure.
It's current and a good practice to name the function *handle* + the name of the event, for example, `handleClick`, `handleChange`, etc.

You should always pass your functions as references and not invocations
```jsx
<button onClick={handleClick}>Click me</button>
```
If you invoke the function directly, it will execute immediately instead of waiting for the event to occur:
```jsx
<button onClick={handleClick()}>Click me</button>
```

You can use the (event) parameter to access information about the event, such as the target element or the type of event:
```jsx
function handleClick(event) {
  console.log('Button clicked:', event.target);
}
```