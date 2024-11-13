import React from 'react';
import Matrix from '../Matrix';
import Rows from '../Rows';

const rows = 20;
const columns = 10;

export default function Tetris() {
  let score = 0;
  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      <div style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>{score}</div>
      <div className='playground'>
        <ul style={{ border: '1px solid #333', padding: 0, margin: 0, width: '250px' }}>
          <Rows count={rows} style={{ width: '100%', height: '25px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
              <Matrix
                count={columns}
                style={{
                  width: '25px',
                  height: '25px',
                  outline: '1px solid #ccc',
                }}
              />
            </ul>
          </Rows>
        </ul>
      </div>
    </div>
  );
}
