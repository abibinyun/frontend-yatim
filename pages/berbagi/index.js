import React, { useRef } from 'react';
import CarArComp from '../../components/CarArticle';
import { Paper, Space, Text } from '@mantine/core';
import CardDonasi from '../../customComp/cardDonasi';
import Autoplay from 'embla-carousel-autoplay';

export default function berbagi() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  const plugins = [autoplay.current];
  const onMouseEnter = autoplay.current.stop;
  const onMouseLeave = autoplay.current.reset;
  return (
    <div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <CarArComp plugin={plugins} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      </div>
      <Space h={30} />
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Paper shadow="md" radius="xl" p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background
            with shadow Use it to create cards, dropdowns, modals and other components that require
            background with shadowUse it to create cards, dropdowns, modals and other components
            that require background with shadowUse it to create cards, dropdowns, modals and other
            components that require background with shadowUse it to create cards, dropdowns, modals
            and other components that require background with shadowUse it to create cards,
            dropdowns, modals and other components that require background with shadowUse it to
            create cards, dropdowns, modals and other components that require background with shadow
          </Text>
        </Paper>
      </div>
      {/* </Center> */}
      <Space h={50} />
      <div id="card-donasi" style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
        <CardDonasi />
      </div>
    </div>
  );
}
