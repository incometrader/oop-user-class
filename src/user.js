"use strict";

function User(name, occupation, age, email){
	this.name = name || "Anonymous";
	this.occupation = occupation;
	this.age = age;
	this.email = email || "user@myblog.com";
	this.points = 0;
	this.commentLikes = 0;
}
// USER PROTOTYPE METHODS
User.prototype = {
	// NO CUSTOM PROFILES FOR USERS
	customProfile : false,
	// FILE STORAGE IS 50MB BY DEFAULT
	fileStorage : 50,
	// DEVELOPERS CAN DOUBLE THEIR FILE STORAGE
	doubleFileStorage : function(){
		if (this.occupation === "Developer"){
			this.fileStorage *= 2;
		}
	},
	// CHILDREN CAN ONLY INTEGRATE TWO APPS
	appsIntegrations : function(){
		if (this.age < 16) return 2;
		return 5;
	},
	// EVERYONE GETS 5 POINTS FOR EACH PAGE OF BLOG THEY READ
	read : function(numOfPages){
		var rewardPoints = numOfPages * 5;
		this.points += rewardPoints;
	},
	// EVERYONE GETS 5 COMMENTLIKES PER LINE OF COMMENT MADE. DEVELOPERS GET 10
	comment : function(numOfLines){
		if (this.occupation === "Developer"){
			this.commentLikes = numOfLines * 10;
		} else {
			this.commentLikes = numOfLines * 5;
		}
	}
};


module.exports = User;