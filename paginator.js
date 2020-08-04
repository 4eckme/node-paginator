var paginator = function() { return {
	page: 1,
	limit: 100,
	count: 0,
	pages: 0,
	length: 0,
	selected_page_href: 1,
	set_limit: function (l) {
		this.count = parseInt(l);
	},
	set_page: function (p) {
		this.page = parseInt(p) ? parseInt(p) : 1
	},
	set_count: function (c) {
		this.count = parseInt(c);
	},
	set_length: function(l) {
		this.length = parseInt(l)
	},
	sql_limit: function() {
		return ' LIMIT '+this.limit*(this.page-1)+', '+this.limit+' ';
	},
	html_links: function (href, length, sph) {

		if (typeof length != 'undefined')
			this.set_length(length);

		if (typeof sph != 'undefined')
			this.selected_page_href = parseInt(sph);
		
		chain = Array();
		this.pages = Math.ceil(this.count/this.limit);
		for(i=1; i<=this.pages; i++) {
			classes = Array();
			hrefstr = (((i != this.page) || this.selected_page_href) ? (' href="'+href.replace(':page', i)+'"') : '');			
			if (i == 1) classes.push("p-start");
			if (i == this.pages) classes.push("p-end");
			if (i == this.page) classes.push("p-selected");
			if (this.length && Math.abs(i-this.page) <= this.length/2) classes.push("p-center");
			clss = (classes.length ? (' class="'+classes.join(' ')+'"') : '');
			if(!this.length || classes.length) {
				chain.push('<a'+hrefstr+clss+'>'+i+'</a>');
			}
		}
		return chain.join('');
	}	
}}

module.exports = paginator;
