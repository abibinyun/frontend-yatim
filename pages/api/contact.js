import { transporter, mailOptions } from '../../config/nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  nama: 'Atas nama',
  amount: 'Nominal',
  bank: 'Bank',
  message: 'Pesan',
  noReq: 'No Rekening',
  time: 'Waktu Berakhir',
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}} \n \n`),
    ''
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `<h2>${CONTACT_MESSAGE_FIELDS[key]}</h2><p>${val}</p>`),
    ''
  );

  return {
    text: stringData,
    html: htmlData,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { nama, bank, noReq, amount, message, time } = data;
    const data2 = { nama, bank, noReq, amount, message, time };
    if (!data2) {
      return res.status(400).json({ message: 'Bad request' });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data2),
        subject: `Donasi dari ${data.nama} - ${data.subject} - ${data.id}`,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(200).json({ message: 'okkay' });
};

export default handler;
