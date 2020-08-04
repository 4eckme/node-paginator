paginator = require('./paginator');
pgntr = new paginator();

pgntr.set_page(3); //default 1;
pgntr.set_limit(20); //default 100;

connection.query('SELECT count(id) as cnt FROM pages; select * from pages '+pgntr.sql_limit(), {}, function (e,r,f){

  pgntr.set_count(r[0][0].cnt) // before html_links()
  
  console.log(pgntr.html_links('/page/:page'));
  console.log(pgntr.html_links('/page/:page', 0, 0));
  console.log(pgntr.html_links('/page/:page', 5, 1));
  console.log(pgntr.html_links('/page/:page', 5, 0));
  // arguments: link template (string), paginations central pages length (int), clickable of selected page (bool)
  
})
