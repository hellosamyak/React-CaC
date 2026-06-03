# React-CaC

## Interview question

### What is the output of this code?

```javascript
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  const increaseValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div className="controls">
      <button onClick={increaseValue}>Increase</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default App;
```

Short answer: the counter becomes `6` (a single increment), not 9.

Explanation: React may batch state updates inside the same event handler. Each call to `setCounter(counter + 1)` captures the same `counter` value (the current render's value), so the four calls produce the same new value and the state ends up incremented once. To apply multiple sequential updates that depend on the previous state, use the functional updater form.

## Follow-up: how to increment repeatedly

Use the functional updater to ensure each update receives the latest state:

```javascript
const [counter, setCounter] = useState(5);

const increaseValue = () => {
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
};
```

Now the four calls are applied sequentially using the latest value, so the counter becomes `9` (5 + 4).

Notes:

- Using the functional updater (`setCounter(prev => prev + 1)`) is the reliable way to update state based on the previous value.
- In React 18 and later, automatic batching is broader (it can batch updates across multiple event handlers and async operations), but the functional updater behavior remains the correct pattern when each update depends on the previous state.

References:

- React Hooks: setState functional updates — use the updater when the new state depends on the previous state.
