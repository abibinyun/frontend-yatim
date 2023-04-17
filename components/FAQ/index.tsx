import { createStyles, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import Image from 'next/legacy/image';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

export function FaqComp({ data }: any) {
  const { classes } = useStyles();
  const myLoader = ({ src, width, height }: any) => {
    return `${src}?w=${width}&h=${height}`;
  };
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image
              loader={myLoader}
              src={`https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg`}
              width={500}
              height={400}
              quality="100"
              alt="Frequently Asked Questions"
            />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>{data[0].question}</Accordion.Control>
                <Accordion.Panel>{data[0].answer}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>{data[1].question}</Accordion.Control>
                <Accordion.Panel>{data[1].answer}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>{data[2].question}</Accordion.Control>
                <Accordion.Panel>{data[2].answer}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="tes">
                <Accordion.Control>{data[3].question}</Accordion.Control>
                <Accordion.Panel>{data[3].answer}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>{data[4].question}</Accordion.Control>
                <Accordion.Panel>{data[4].answer}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
