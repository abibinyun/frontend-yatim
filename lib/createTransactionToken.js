import { CoreApi, SnapApi } from 'midtrans-client';
// import dotenv from 'dotenv';

// dotenv.config();

const serverKey = process.env.MIDTRANS_SERVER_KEY;
const clientKey = process.env.MIDTRANS_CLIENT_KEY;
const baseUrl = process.env.MIDTRANS_BASE_URL;

const core = new CoreApi(serverKey, baseUrl);
const snap = new SnapApi(clientKey, baseUrl);

export async function createTransactionToken(details) {
  try {
    const { body: response } = await core.chargeTransaction(details);
    const { token_id: token } = response;
    return { token };
  } catch (err) {
    console.error(err);
    throw err;
  }
}