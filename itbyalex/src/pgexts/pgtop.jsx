import React, { useState, useEffect } from 'react';
import './pgtop.css'

function PageTop() {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  return (
    <div className='topd' >
      <h1 className="top"> {pageTitle} </h1>
    </div>
  );
}

export default PageTop