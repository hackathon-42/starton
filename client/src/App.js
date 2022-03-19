import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from 'react-redux';

import { Company } from './pages/Company';
import { Freelance } from './pages/Freelance';
import { Home } from './pages/Home';
import counterReducer from './store/slice';
import { Layout } from './components/Layout';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

function App() {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout> <Home /> </Layout>} />
              <Route path="company" element={<Layout> <Company /> </Layout>} />
              <Route path="freelance" element={<Layout> <Freelance /> </Layout>} />
            </Routes>
          </div>
        </BrowserRouter>
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
