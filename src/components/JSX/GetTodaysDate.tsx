export default function GetTodaysDate() {
  const date = new Date();
  return <p>Today is {date.toLocaleDateString()}</p>;
}
