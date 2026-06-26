const basicAuth = (req, res, next) => {
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  if (login === process.env.INTERNAL_AUTH_USER && password === process.env.INTERNAL_AUTH_PASS) {
    return next(); // Credenciais corretas
  }

  res.set('WWW-Authenticate', 'Basic realm="401"');
  res.status(401).json({ erro: 'Acesso não autorizado.' });
};

module.exports = basicAuth;