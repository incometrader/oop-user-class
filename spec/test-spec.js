var jasmine = require("jasmine");
var User = require("../src/user");
var PremiumUser = require("../src/user");

(function(){
  "use strict";

  describe("User Class: Create a user, user can read posts and write comments", function(){

    it("user name and occupation should be a property of the user", function() {
      var fisayo = new User('Fisayo', 'Entrepreneur');
      expect(fisayo.name).toBe('Fisayo');
      expect(fisayo.occupation).toBe('Entrepreneur');
      expect(fisayo.customProfile).toBe(false);
    });

    it("Premium user name and occupation should be a property of the Premium user", function() {
      var linda = new PremiumUser('Linda', 'Blogger', 36, "lindaikeji@gmail.com", ['blogging', 'fashion', 'entertainment']);
      expect(linda.name).toBe('Linda');
      expect(linda.occupation).toBe('Blogger');
      expect(linda.customProfile).toBeTruthy();
      expect(linda.interests).toBe(['blogging', 'fashion', 'entertainment']);
    });

    it("user should be a type of `object`, and an instance of the `User` class", function(){
      var johnson = new User('Johnson');
      expect(typeof johnson).toEqual(typeof {});
      expect(johnson instanceof User).toBeTruthy();
    });

    it("Premium user should be a type of `object`, and an instance of the `User` and `PremiumUser` classes", function(){
      var jonah = new PremiumUser('Jonah');
      expect(typeof jonah).toEqual(typeof {});
      expect(jonah instanceof User).toBeTruthy();
      expect(jonah instanceof PremiumUser).toBeTruthy();
    });

    it("every user has a file storage of 50MB. Developers only can double their file storage", function() {
      var dexter = new User('Dexter', 'Scientist');
      expect(dexter.fileStorage).toBe(50);
      dexter.doubleFileStorage();
      expect(dexter.fileStorage).toBe(50);

      var uyiosa = new User('Uyiosa', 'Developer');
      expect(uyiosa.fileStorage).toBe(50);
      uyiosa.doubleFileStorage();
      expect(uyiosa.fileStorage).toBe(100);
    
      expect((function(){return new User('Audax', 'Developer');}()).fileStorage).toBe(100);
    });

    it("Premium user has a file storage of 500MB. Developers can double their fileStorage", function() {
      var olamide = new PremiumUser('Olamide', 'Rapper');
      expect(olamide.fileStorage).toBe(500);

      var iyin = new PremiumUser('Iyinoluwa', 'Developer');
      expect(iyin.fileStorage).toBe(500);
      iyin.doubleFileStorage();
      expect(iyin.fileStorage).toBe(1000);
    });

    it("user gets no commentLikes until they makes a comment", function() {
      var victor = new User('Victor', 'Developer');
      expect(victor.commentLikes).toBe(0);
      victor.comment(5);
      expect(victor.commentLikes).toBe(50);

      var tiwa = new User('Tiwatope', 'Nurse');
      expect(tiwa.commentLikes).toBe(0);
      tiwa.comment(4);
      expect(tiwa.commentLikes).toBe(20);
    });

    it("user gets no point until user reads a post", function() {
      var daniel = new User('Daniel', 'Banker');
      expect(daniel.points).toBe(0);
      daniel.read(3);
      expect(daniel.points).toBe(15);
    });

    it("user can integrate 5 apps on our blog except user is less than 16", function() {
      var junior  = new User('Junior', 'Student', 15);
      expect(junior.appsIntegrations()).toBe(2);

      var john = new User('John', 'Architect', 24);
      expect(john.appsIntegrations()).toBe(5);
    });

    it("user should be called 'Anonymous' if no name is passed as a parameter", function() {
      var temi = new User();
      expect(temi.name).toEqual('Anonymous');
      expect(temi.email).toBe('user@myblog.com');
    });

  });
})();