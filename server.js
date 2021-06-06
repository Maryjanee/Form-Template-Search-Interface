/* eslint-disable no-console */
const path = require('path');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/public/task_templates', async (req, res) => {
  try {
    const { data: templates } = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1');
    res.send(templates);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle react routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
