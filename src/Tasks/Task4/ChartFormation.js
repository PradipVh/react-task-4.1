import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function ChartFormation() {
  const [box1value, setValue1] = useState('');
  const [box2value, setValue2] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [showChart, setShowChart] = useState(false);

  const handleValueChange = (e, target) => {
    const newValue = Number(e.target.value);

    if (newValue > 100) {
      setError1('Incorrect value');
      setError2('Incorrect value');
    } else {
      setError1('');
      setError2('');

      if (target === 'value1') {
        setValue1(newValue);
        setValue2(100 - newValue);
      } else {
        setValue2(newValue);
        setValue1(100 - newValue);
      }
    }
  };

  const handleCreateChart = () => {
    setShowChart(true);
  };

  const data = [
    { title: 'Value 1', value: box1value, color: 'pink' },
    { title: 'Value 2', value: box2value, color: 'orange' },
  ];

  return (
    <div className='container'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='form-group col-md-3'>
            <label htmlFor='box1'>Box1</label>
            <input
              type='number'
              className='form-control'
              value={box1value}
              onChange={(e) => handleValueChange(e, 'value1')}
              onBlur={() => setValue2(100 - box1value)}
            />
            <p className='text-danger'>{error1}</p>
          </div>
          <div className='form-group col-md-3'>
            <label htmlFor='box2'>Box2</label>
            <input
              type='number'
              className='form-control'
              value={box2value}
              onChange={(e) => handleValueChange(e, 'value2')}
              onBlur={() => setValue1(100 - box2value)}
            />
            <p className='text-danger'>{error2}</p>
          </div>
          <div style={{ marginTop: '31px' }} className='form-group col-md-3 mb-4 mb-md-0'>
            <button
              className='btn btn-success rounded form-control'
              onClick={handleCreateChart}
            >
              Create Chart
            </button>
          </div>
        </div>
      </div>
      {showChart && (

        < div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: '300px',
            margin:'0 auto'
          }} >
          <PieChart
            data={data}
            lineWidth={100}
            animate
          />
        </div>
      )}
    </div>
  );
}

export default ChartFormation;
