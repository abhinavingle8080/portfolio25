const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static(__dirname));

// Redirect all routes to index.html for the SPA
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
}); 