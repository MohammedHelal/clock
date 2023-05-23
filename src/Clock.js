export default function Clock({ time }) {
  let hours = time.getHours();
  let theme = "day";

  if (hours >= 0 && hours <= 6) {
    theme = "night";
  } else {
    theme = "day";
  }
  return (
    <h1 id="time" className={theme}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
