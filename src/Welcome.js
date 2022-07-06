import Contentbox from "./Contentbox";

import "./styles.css";

const Welcome = () => {
  return (
    <Contentbox color="green">
      <header style={{ padding: `10px`, backgroundColor: `#ccc` }}>
        <h1>I am a heading 1</h1>
      </header>

      <div style={{ padding: `10px`, backgroundColor: `#ccc` }}>
        <h4>I am a heading 2</h4>
      </div>
    </Contentbox>
  );
};

export default Welcome;
