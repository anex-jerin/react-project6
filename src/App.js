import './App.css';
import { useEffect, useState } from 'react';

import Company from './Company';
import Loading from './Loading';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const selectButton = (order) => {
    setValue(order);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setData(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    );
  }
  const { company, dates, duties, title } = data[value];
  return (
    <section className='main'>
      <h1 className='heading'>Experiance</h1>
      <div className='btns'>
        <Company data={data} selectButton={selectButton} />
      </div>

      <div className='details'>
        <h4 className='title'>{title}</h4>
        <h4 className='company'>{company}</h4>
        <p>{dates}</p>
        <div>
          {duties.map((item, index) => {
            return (
              <div className='duties'>
                <h1>*</h1>
                <p key={index}>{item}</p>;
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
