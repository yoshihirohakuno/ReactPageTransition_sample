import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne例えばログイン前のページはこんなやつ！
      <tr/>
      <Link to="/pagetwo">
        <button>show PageTwo when you click this!!</button>
      </Link>
      <Link to="/pagethree">
        <button>show PageThree when you click this!!</button>
      </Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page2たとえばここになにかいろんな要素を書くとする（ほらページが変わった！）
      <Link to="/">
        <button>show PageOne when you click this!!</button>
      </Link>
    </div>
  );
};
const PageThree = () => {
  return (
    <div>
      Page3たとえばここになにかいろんな要素を書くとする（ほらページが変わった！）
      <Link to="/">
        <button>show PageOne when you click this!!</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
          <Route path="/pagethree" component={PageThree} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
