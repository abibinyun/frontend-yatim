import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Center,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

const mockdata = [
  {
    title: 'VISI',
    description:
      'Terciptanya masyarakat yang berperikemanusiaan, berkeadilan dan berpendidikan menuju masyarakat yang beradab.',
    icon: IconGauge,
  },
  {
    title: 'MISI',
    description:
      'Menjadi sarana yang dituju para penggiat kemanusiaan, untuk mendorong terciptanya masyarakat berpendidikan, serta melakukan rutinitas kemanusiaan untuk terciptanya masyarakat yang kokoh dan berkemandirian.',
    icon: IconUser,
  },
  {
    title: 'MOTO',
    description:
      'Menjadikan taman bagi kehidupan, bagi siapa saja yang membutuhkan',
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      // content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      // content: '""',
      color : 'green',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesComp() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Center>
      <feature.icon size={rem(50)} stroke={2} color='green' />
      </Center>
      <Center>

      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      </Center>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      {/* <Group position="center">
        <Badge variant="filled" color='green' size="lg">
          Best company ever
        </Badge>
      </Group> */}

      <Title order={2} className={classes.title} ta="center" mt="sm" color='green'>
        Kebahagiaan untuk semua
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="lg" size={'lg'}>
        Bersama Yathim, kita bisa untuk bantu sesama, berbagi kebahagiaan, bagi mereka yang membutuhkan
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}