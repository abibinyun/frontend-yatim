import React from 'react';
import { CardComp } from '../components/Card';

function CustomCard({ data: source, height, width }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {source.map((item, idx) => (
          <CardComp
            key={idx}
            image={`${item.attributes.thumbnail.data.attributes.url}`}
            link={`donasi/${item.attributes.slugTitle}`}
            title={item.attributes.title}
            description={item.attributes.description}
            rating={''}
            author={{
              name: '',
              image: '',
            }}
            style={{ margin: '40px' }}
            slugTitle={`https://yathim.or.id/donasi/${item.attributes.slugTitle}`}
            height={height}
            width={width}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCard;
