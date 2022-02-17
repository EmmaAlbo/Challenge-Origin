import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import React, { useState, useRef, useCallback } from 'react';
import { DataTable } from './components/DataTable';
import { SearchInput } from './components/SearchInput';
import { ButtonAdd } from './components/ButtonAdd';
import { Provider } from 'react-redux';
import store from './store';
import { AlertNotification } from './components/AlertNotification';

function App() {
  const [search, SetSearch] = useState('');
  const searchInput = useRef(null);
  const { DEFAULT_SUMMIT_ID } = require('./config/constans');


  const handlerSearch = useCallback(() => {
    SetSearch(searchInput.current.value);
  }, []);

  return (
    <Provider store={store}>     
      <div className="container">
        <AlertNotification/>
        <div className="search-bar">
          <SearchInput
            search={search}
            handlerSearch={handlerSearch}
            searchInput={searchInput}
          />
          <div style={{ paddingBottom: 10, paddingTop: 10 }}>
            <div>
              <ButtonAdd summitId={DEFAULT_SUMMIT_ID} />
            </div>
          </div>
        </div>
        <DataTable search={search} summitId={DEFAULT_SUMMIT_ID} />
      </div>
    </Provider>
  );
}

export default App;
