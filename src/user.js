function User(name, occupation, age, email){
	this.name = name || "Anonymous";
	this.occupation = occupation;
	this.age = age;
	this.email = email || "user@myblog.com";
	this.points = 0;
	this.commentLikes = 0;
}

User.prototype = {
	customProfile : false,
	fileStorage : function(){
		if (this.occupation === "Developer") return 100;
		return 50;	
	},
	appsIntegrations : function(){
		if (this.age < 16) return 2;
		return 5;
	},
	read : function(numOfPages){
		var rewardPoints = numOfPages * 5;
		this.points += rewardPoints;
	},
	comment : function(numOfLines){
		if (this.occupation === "Developer"){
			this.commentLikes = numOfLines * 10;
		} else {
			this.commentLikes = numOfLines * 5;
		}
	}
};

function PremiumUser(name, occupation, age, email, interests){
	User.call(this, name, occupation, age, email);
	this.interests = interests;
}
PremiumUser.prototype.customProfile = true;
PremiumUser.prototype.twoFactorAuth = true;
PremiumUser.prototype.fileStorage = 500;

PremiumUser.prototype = Object.create(User.prototype);
PremiumUser.prototype.constructor = PremiumUser;


module.exports = User, PremiumUser;