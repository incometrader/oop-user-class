function User(name, occupation, age, email){
	this.name = name || "Anonymous";
	this.occupation = occupation;
	this.age = age;
	this.email = email || "user@myblog.com";
	this.points = 0;
	this.commentLikes = 0;
}