import * as React from 'react';

export const ShibaList = ({animals}) => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '2em', maxWidth: '100%', flexWrap: 'wrap'}}>
      {
        animals.map((animal) => {
          return (
            <img
              src={animal}
              style={{
                width: '15em',
                height: '15em',
                borderRadius: '100%',
                margin: '1em',
              }}
              alt="some animal"
            />
          );
        })
      }
    </div>
  )
};