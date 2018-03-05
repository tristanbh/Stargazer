USE stargazer;

INSERT INTO users (email, password, latitude, longitude)
    VALUES 
    ('email@gmail.com', '$2a$08$BCbQdT5YHjLFsYIG94ZuAufB0guA2sjBZzehnlzoRAONr6dhTRI.S', '37.2222000', '-77.1111000'),
    ('email2@gmail.com', '$2a$08$BCbQdT5YHjLFsYIG94ZuAufB1guA2sjBZzehnlzoRAONr6dhTRI.S', '37.3333000', '-77.2222000'),
    ('email3@gmail.com', '$2a$08$BCbQdT5YHjLFsYIG94ZuAufB2guA2sjBZzehnlzoRAONr6dhTRI.S', '37.4444000', '-77.3333000');

INSERT INTO events (title, description, date, latitude, longitude, address)
    VALUES 
    ('Event1', 'A great event', '2018-02-28 18:00:00', 37.222222, -77.111111, '2000 Mulberry Lane Richmond, VA 23584'), 
    ('Event2', 'A wonderful event', '2018-03-01 19:00:00', 36.222222, -76.222222, '2000 Mulberry Lane Richmond, VA 23584'), 
    ('Event3', 'A stunning event', '2018-03-03 18:00:00', 67.777777, -77.999999, '2000 Mulberry Lane Richmond, VA 23584');
    
INSERT INTO locations (title, description, latitude, longitude, address)
    VALUES 
    ('Place1', 'A great place', 37.222222, -77.111111, '2000 Mulberry Lane Richmond, VA 23584'), 
    ('Place2', 'A wonderful place', 36.222222, -76.222222, '2000 Mulberry Lane Richmond, VA 23584'), 
    ('Place3', 'A stunning place', 67.777777, -77.999999, '2000 Mulberry Lane Richmond, VA 23584');

