import { Route, Routes } from 'react-router-dom';
import { SearchBox, SearchResult, ProductDetail } from './components';

function App() {
  return (
    <>
      <SearchBox />
      <main>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/items' element={<SearchResult />} />
          <Route path='/items/:id' element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
