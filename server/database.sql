CREATE TABLE pictures (
	id serial primary key, 
	picture varchar(30),
	title varchar(30),
	description varchar(600),
	hearts integer

);

INSERT INTO pictures (picture, title, description, hearts)
VALUES ('/images/nationalization.jpg', 'Citizenship', 'While my brothers and I were born in the United States, my parents did not become citizens until after I was born. This is the day of their ceremony, and one of the most important days for us as a family.', 0),
('/images/napping.jpg', 'Like Father like Daughter', 'I''m often told I resemble my father in many ways, among them an affection for potato chips, opera, and hyperactive tendencies.', 0),
('/images/Pemberly.jpg','Pemberley','My mother introduced me to Jane Austen at a very young age. Along with a fascination with Colin Firth, it also embedded a desire to visit the estate that was using in the filming of the 1996 Pride and Prejudice. This past summer I was finally able to visit the house I had watched on screen for over two decades. Sharing that experience with my mom was incredibly special.', 0), 
('/images/dingus.png', 'Brothers', 'The older I get, the more I appreciate all the strange, unique, goofy tendencies and qualities of my two older brothers. They are loving, crazy, and protective. I would be a very different person without them. Namely, I wouldn''t have seen MEGADETH 20 times, love Star Trek, or be able to quote Aliens at the drop of a hat.', 0),
('/images/hipsters.jpg', 'Under the Sea (of Hipsters)','My best girl Kate. We met under the judgiest of circumstances, but a friendship emerged that is unshakable. Forged with movie nights, wine, cheese, and tiramisu, she is the best person to couch with.', 0),
('/images/ring.JPG','Found Ring', 'Many, many years ago, before Adam and I seriously decided on each other, we went out in a large group of friends to a local bar called London Underground. On the sidewalk was this simple little ring, and I spent the night fidgeting with it. On my way out, I threw it in his direction as a little token. A couple years later, after we started dating, he sent me this picture. I hadn''t realized he kept it, and it has a permanant place in his winter coat pocket.', 0);

