/* Get 'home' page */
module.exports.homeList = function(req, res) {
	res.render('locations-list', {
		title: 'Lock8r - find a place to work with wifi',
		pageHeader:{
			title: 'Lock8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you fond the place you are looking for!',
		locations: [{
			name: 'Starbucks',
			address: '1380 Veteran Ave, Los Angeles, CA 90024',
			rating: 3,
			facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Coffee Bean & Tea Leaf',
			address: '1540 Westwood Blvd, Los Angeles, CA 90024',
			rating: 3,
			facilities: ['Hot Drinks', 'Tea', 'Premium wifi'],
			distance: '170m'
		},{
			name: 'CafeHero',
			address: '1380 Veteran Ave, Los Angeles, CA 90024',
			rating: 4,
			facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'BurgerKing',
			address: '1380 Veteran Ave, Los Angeles, CA 90024',
			rating: 2,
			facilities: ['Pizza', 'Food', 'Premium wifi'],
			distance: '550m'
		}]
	});
};

/* Get 'Location info' page*/
module.exports.locationInfo = function(req, res) {
	res.render('location-info', {title: 'Location info'});
};

/*Get 'Add review' page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', {title: 'Add review'});
};