export const sendContactForm = async (data) => {
  await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log('Response received');
    if (res.status === 200) {
      console.log('Response succeeded!');
    }
  });
};
