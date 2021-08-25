import { useState } from 'react';
import './App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [blur, setBlur] = useState(20);

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setBlur(20 - password.length * 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className="App">
      <div className="background" style={{ filter: `blur(${blur}px)` }} />
      <form
        className="bg-white rounded p-10 text-center shadow-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">
          Change the password to see the effect
        </p>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="border block w-full p-2 mt-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="password" className="text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            autoComplete="off"
            className="border block w-full p-2 mt-2 rounded"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
