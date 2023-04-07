import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Center,
  Flex,
} from '@mantine/core';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid({ data }) {
  const { classes } = useStyles();
  const cards = mockdata.map((article) => (
    // <Flex
    //   mih={50}
    //   bg="rgba(0, 0, 0, .3)"
    //   gap="xl"
    //   justify="center"
    //   align="center"
    //   direction="row"
    //   wrap="wrap"
    // >
    //   <div style={{ height: 100, width: 500 }}>
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={`http://localhost:1337${data}`} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
    //   </div>
    // </Flex>
  ));

  return (
    // <Center>

    <div>
      {/* <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}> */}
      {cards}
      {/* </SimpleGrid> */}
    </div>

    // </Center>
  );
}
