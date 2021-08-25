import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="background" />
      <div className="bg-white rounded p-10 text-center shadow-md">
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
            className="border block w-full p-2 mt-2 rounded"
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
            className="border block w-full p-2 mt-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
