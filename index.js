var colors = require('colors/safe');
 


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
  if(err) {
  	bad("Connection issue: " + err)
  } else {
  	ok("Success connect")
  }
});

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
	if (err) return bad("Saving issue: " + err);
  
    ok("Success save")

    Cat.findOne({name: 'Zildjian'}, function(err, kitty) {
		if (err) return bad("Search issue: " + err);
    	
    	ok("Success search");
    	
    	kitty.name = "Haruhi";
    	kitty.save(function(err, updatedKitty) {
			if (err) return bad("Update issue: " + err);
    		

    		if(updatedKitty.name == "Haruhi") {
	    		ok("Success update");
	    		ok(colors.green.underline("EVERYTHING WORKS"));

				mongoose.disconnect();
    		} else {
				if (err) return bad("Update issue: mismatch of values");
    		}
    	});
    });
  });

function ok(text) {
	console.log(colors.green('√') + " " + text ); 
}

function bad(text) {
	console.log(colors.green('×') + " " + text); 
}

