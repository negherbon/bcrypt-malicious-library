require('./malicious-library');
const Bcrypt = require('bcrypt');
 
(async () => {
   const password = 'my password';

   const securePassword = await (Bcrypt.hash(password, await Bcrypt.genSalt(10)));

   console.log('Password Hash', securePassword);
})();
