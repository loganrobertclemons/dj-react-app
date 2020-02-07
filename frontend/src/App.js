import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.css';

import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({ data }) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;