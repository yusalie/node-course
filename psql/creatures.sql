CREATE TABLE wizards(
    name character varying(50),
    power character varying(50)
);

CREATE TABLE elves(
    name character varying(50),
    speed real
);

CREATE TABLE hobits(
    name character varying(50),
    personality character varying(50)
);

insert into wizards(name, power)
values
('Gandalf', 'Resurrection'),
('Sauron', 'Rings'),
('Saruman', 'Death');

insert into elves(name, speed)
values
('Legolas', 10),
('Arwen', 9),
('Elrond', 5);

insert into hobits(name, personality)
values
('Frodo', 'Careful'),
('Sam', 'Brave'),
('Bilbo', 'Greedy');