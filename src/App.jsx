import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import ResultGrid from './components/ResultGrid';

function App() {

  return (
    <div>
      <SearchBar />
      <ResultGrid/>
    </div>
  )
}

export default App