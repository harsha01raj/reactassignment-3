import React from "react";
import "./styles.css";
import { Avatar, Button } from "./component";

const user = {
  name: "Harsha raj",
  imageUrl:
    "https://cdn.vox-cdn.com/thumbor/Dtl0EGQ3bYjAVBNuqxp2ZvAXVng=/0x0:1920x1200/920x613/filters:focal(810x375:1116x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg"
};

const App = () => {
  return (
    <div className="App">
      <Avatar user={user} rounded={true} hideName={true} />
      <Avatar user={user} rounded={false} hideName={true} />
      <Avatar user={user} rounded={true} hideName={false} />
      <Avatar user={user} rounded={false} hideName={false} />

      <Button text="Click Me" />
    </div>
  );
};

export default App;
