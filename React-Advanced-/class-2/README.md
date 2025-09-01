# Props Drilling and State Lifting in React JS

## What is Props Drilling?

Props drilling is the process of passing data (props) from a parent component to deeply nested child components by forwarding the props through intermediate components that do not necessarily use the data themselves. This can make the code harder to maintain, especially as the component tree grows deeper.

## What is State Lifting?

State lifting (or lifting state up) is a common React pattern where shared state is moved up to the closest common ancestor of the components that need to access or modify that state. This ancestor component manages the state and passes it down via props, allowing multiple components to share and synchronize data efficiently.

## How They Work With an Example

Consider a counter app with a parent component and two child components: one to update the count and one to display it.

import React, { useState } from 'react';

function Grandparent() {
const [count, setCount] = useState(0);

return (
<Parent count={count} setCount={setCount} />
);
}

function Parent({ count, setCount }) {
// This component just passes props down (props drilling)
return (
<div>
<ChildUpdater count={count} setCount={setCount} />
<ChildDisplay count={count} />
</div>
);
}

function ChildUpdater({ count, setCount }) {
return (
<button onClick={() => setCount(count + 1)}>
Increment
</button>
);
}

function ChildDisplay({ count }) {
return <h1>Count: {count}</h1>;
}

export default Grandparent;



### Explanation:

- The `count` state is maintained in the top-level `Grandparent` component.
- The `count` and its updater function `setCount` are passed down through `Parent` to the children.
- Although `Parent` does not use `count` itself, it must forward the props down to child components. This is **props drilling**.
- The children use the shared state: one updates it, the other displays it.
- Because the state is lifted to the common ancestor (`Grandparent`), the components stay in sync.

---

For more complex state sharing and to avoid excessive props drilling, React's Context API or state management libraries like Redux might be used.

---

This concise explanation and example should help understand and implement props drilling and state lifting in React applications effectively.
