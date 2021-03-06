const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
connectDB();
app.get('/', (req, res) => res.send('API running'));
//Define Routes
app.use('/api/user', require('./routes/api/user.js'));
app.use('/api/profiles', require('./routes/api/profiles.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/posts', require('./routes/api/posts.js'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
