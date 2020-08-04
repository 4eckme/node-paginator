// Create modules object
paginator = require('./paginator.js');
pgntr = new paginator();
// Settings
pgntr.set_page(3); // default 1;
pgntr.set_limit(20); // default 100;
// SQL with limits
connection.query('select * from pages '+pgntr.sql_limit());
// Set items count (before use html_links())
pgntr.set_count(100);
// Output pages list
res.send(pgntr.html_links('/page/:page'));
res.send(pgntr.html_links('/page/:page', 0, 0));
res.send(pgntr.html_links('/page/:page', 5, 0));
res.send(pgntr.html_links('/page/:page', 5, 1));
res.send(pgntr.html_links('/page/:page'));
/* Att last call html_links, module will use last params set */
res.send(pgntr.index())//Auto increment of item index, started from index of first element on this page
/* last method can be used if yo want show item index to client, it can be used in cycle, displayed items *
