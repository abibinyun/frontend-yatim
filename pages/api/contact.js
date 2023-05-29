import { transporter, mailOptions } from '../../config/nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}} \n \n`),
    ''
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`),
    ''
  );

  return {
    text: stringData,
    html,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('data api :', data);
    if (!data.amount || !data.bank) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data,
        text: ' this is a testing email',
        html: '<h1>Title testing</h1><p>tester body</p>',
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
