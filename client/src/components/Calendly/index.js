import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
    return (
        <div className="App">
            <InlineWidget url="https://calendly.com/barber-shop-bros" />
        </div>
    );
};

export default App;