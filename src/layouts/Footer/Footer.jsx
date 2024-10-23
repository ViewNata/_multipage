import './Footer.css';

function Footer() {
  return (<div className='footer-container'>
    <h2 >
      <span className='badge bg-dark' style={{ boxShadow: '0 0 0.25rem grey' }} >SPU</span>
      &nbsp;&minus;&nbsp;
      <span className='badge bg-secondary' style={{ boxShadow: '0 0 0.25rem grey' }}>SIT</span>
      &nbsp;&minus;&nbsp;
      <span className='badge bg-light text-dark' style={{ boxShadow: '0 0 0.25rem grey', border: 'none' }} >CSI</span>
    </h2>
  </div>  );
}

export default Footer; 