Link to the chapter : https://ui.dev/c/react/jsx

What is a react component ? : A function that returns a description of some UI.
It must be wrapped in a single root element, such as div, section, or even a fragment to avoid errors in JSX and add unnecessary complexity to the DOM.
It must be wrapped in parens if it spans multiple lines, or if it is a multiline expression.
Self closing elements should be used for elements that do not have children, such as <img />, <input />, etc.
class must be replaced by className in JSX, as class is a reserved keyword in JavaScript.
Attributes with dashes in their names must be converted to camelCase.
lists should be rendered using the map function, and each element should have a unique key prop to help React identify which items have changed, are added, or are removed.

Challenge : 

We have a Badge component with variables for name, handle and img that are unassigned. Your job is to assign those variables in the JSX so that the component renders correctly.

Tasks
Give the image a proper alt tag using the author's name
Make sure the badge displays the profile image correctly
Display the author's name in the badge's heading
Display the author's handle below the heading
The Result
The final UI for your solution should look like this.