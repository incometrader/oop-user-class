var jasmine = require("jasmine");
var User = require("./user");
// DECLARE PREMIUM USER
function PremiumUser(name, occupation, age, email, interest){
	User.call(this, name, occupation, age, email);

	this.interest = interest;
}

// INHERIT FROM USER PROTOTYPE
PremiumUser.prototype = Object.create(User.prototype);
PremiumUser.prototype.constructor = PremiumUser;

// MAKE UNIQUE PREMIUM USER PROPERTIES
PremiumUser.prototype.customProfile = true;
PremiumUser.prototype.twoFactorAuth = true;
PremiumUser.prototype.fileStorage = 500;

module.exports = PremiumUser;
