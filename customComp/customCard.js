import React from 'react';
import { CardComp } from '../components/Card';

function CustomCard(data) {
  const { data: source } = data;
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
        {source.map((item) => (
          <CardComp
            key={item.id}
            image={`http://strapi.yathim.or.id${item.attributes.thumbnail.data.attributes.url}`}
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
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCard;
