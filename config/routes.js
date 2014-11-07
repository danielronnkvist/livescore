var pages = require('../app/controllers/pages.js');

// Start page
app.get('/', pages.index);
app.get('/Match/:id', pages.index)

app.get('/info', pages.info);
