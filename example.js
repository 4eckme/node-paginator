paginator = require('./paginator');
pgntr = new paginator();

pgntr.set_page(3); //default 1;
pgntr.set_limit(20); //default 100;

connection.query('SELECT count(id) as cnt FROM pages; select * from pages'+pgntr.sql_limit(), {}, function (e,r,f){

  pgntr.set_count(r[0][0].cnt) // before html_links()
  
  console.log(pgntr.html_links('/page/:page'));
  
  pgntr.set_length(5); // default 0 - no cut (set length of selected page neighborhoods)
  console.log(pgntr.html_links('/page/:page'));
  
  pgntr.selected_page_href = 0; // default 1 (sets clickable of selected page)
  console.log(pgntr.html_links('/page/:page'));
})
