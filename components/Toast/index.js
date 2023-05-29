import { useEffect } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHandshake } from '@fortawesome/free-solid-svg-icons';
const data = [
  {
    nama: 'Orang baik',
    pesan: 'Verified - baru baru ini',
    donasi: 'baru saja donasi di - Donasi anak yatim',
  },
  {
    nama: 'Manusia biasa',
    pesan: 'Verified - baru baru ini',
    donasi: 'baru saja donasi di - Membangun istana yatim',
  },
  {
    nama: 'Hamba tuhan',
    pesan: 'Verified - 1 jam yang lalu',
    donasi: 'baru saja donasi di - Donasi anak yatim',
  },
  {
    nama: 'Anonim',
    pesan: 'Verified - 1 jam yang lalu',
    donasi: 'baru saja donasi di - Amplop keberkahan',
  },
  {
    nama: 'Alfarisy',
    pesan: 'Verified - 3 jam yang lalu',
    donasi: 'baru saja donasi di - Donasi anak yathim',
  },
  {
    nama: 'Kiki akbar',
    pesan: 'Verified - 3 jam yang lalu',
    donasi: 'baru saja donasi di - Santunan yatim dan dhuafa',
  },
  {
    nama: 'Iwan',
    pesan: 'Verified - 1 hari yang lalu',
    donasi: 'baru saja donasi di - Donasi anak yathim',
  },
  {
    nama: 'Orang biasa',
    pesan: 'Verified - 1 hari yang lalu',
    donasi: 'baru saja donasi di - Bantuan kaum difabel dan ABK',
  },
  {
    nama: 'Mahluk tuhan',
    pesan: 'Verified - 2 hari yang lalu',
    donasi: 'baru saja donasi di - Bantuan kaum difabel dan ABK',
  },
  {
    nama: 'tak mau disebutkan',
    pesan: 'Verified - 2 hari yang lalu',
    donasi: 'baru saja donasi di - Santunan yatim dan dhuafa',
  },
];

export default function ToastComp() {
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        toast.success(
          <>
            <h4 style={{ marginBottom: '-15px' }}>{data[i].nama}</h4>
            <h5 style={{ marginBottom: '-15px' }}>{data[i].donasi}</h5>

            <h6>
              {' '}
              <span>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#13d834' }} />
              </span>{' '}
              {data[i].pesan}
            </h6>
          </>,
          {
            icon: <FontAwesomeIcon icon={faHandshake} />,
            transition: Zoom,
          }
        );
      }, 8000 * i);
    }
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </div>
  );
}
