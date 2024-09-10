const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Assuming your User model is correctly set up

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    try {
      // Find user by email in MongoDB
      const user = await User.findOne({ email: email });
      
      if (!user) {
        console.log(`No user found with email: ${email}`);
        return done(null, false, { message: 'No Mine with that ID' });
      }

      // Compare hashed passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password incorrect');
        return done(null, false, { message: 'Password incorrect' });
      }

      // Successful authentication
      return done(null, user);
      
    } catch (err) {
      // Detailed error logging
      console.error('Error during authentication:', err);
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      console.error('Error during deserialization:', err);
      done(err);
    }
  });
}

module.exports = initialize;
