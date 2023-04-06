import React from 'react';
import { CardComp } from '../components/Card';

function CustomCard({ data }) {
  console.log(data);
  return (
    <div>
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , alignItems:'stretch' }}>
        {data.map((item) => (
          <CardComp
            key={item.id}
            image={`http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`}
            link={`donasi/${item.attributes.slugTitle}`}
            title={item.attributes.title}
            description={item.attributes.description}
            rating={''}
            author={{
              name: '',
              image: '',
            }}
            style={{ margin: '40px' }}
          />
        ))}
     </div>
    </div>
  );
}

export default CustomCard;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/api/donasis?populate=*');
  const data = await res.json();

  if(!data){
    return {
      notFound: true
    }
  }
  return {
    props: {
      data: data.data,
    },
  };
}
