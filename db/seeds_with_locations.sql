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
    ('Dark Sky Park', 'Staunton River State Park', 36.697222, -78.673611, 'Scottsburg, Virginia'), 
    ('Dark Sky Park', 'Blue Ridge Observatory and Star Park', 35.931111, -82.184167, 'North Carolina, USA'), 
    ('Dark Sky Park', 'Cherry Springs State Park', 41.661765, -77.821989, 'Pennsylvania, USA'),
    ('Dark Sky Park', 'Geauga Observatory Park', 41.584722, -81.080556, '10610 Clay Street Montville Township, OH 44064 USA'),
    ('Dark Sky Park', 'Stephen C. Foster State Park', 30.826620, -82.361916, '17515 Hwy. 177 Fargo, GA 31631 USA'),
    ('Dark Sky Park', 'Kissimmee Prairie Preserve State Park', 27.561260, -81.022852, '33104 NW 192nd Ave Okeechobee, FL 34972 USA'),
    ('Dark Sky Park', 'Big Cypress National Preserve', 25.972987, -81.074273, '33100 Tamiami Trail East Ochopee, FL 34141 USA'),
    ('Dark Sky Park', 'Headlands', 45.777778, -84.782778, 'Emmet County, Michigan USA'),
    ('Dark Sky Park', 'Newport State Park', 45.236635, -86.993613, '475 County Highway NP Ellison Bay WI 54210 USA'),
    ('Dark Sky Park', 'Salinas Pueblo Missions National Monument', 34.259772, -106.093176, 'Mountainair, New Mexico, U.S.'),
    ('Dark Sky Park', 'Chaco Culture National Historical Park', 36.060556, -107.961667, 'New Mexico, USA'),
    ('Dark Sky Park', 'Hovenweep National Monument', 37.383611, -109.072500, 'Utah and Colorado, USA'),
    ('Dark Sky Park', 'Natural Bridges National Monument', 37.601389, -110.013611, 'Utah, USA'),
    ('Dark Sky Park', 'Kartchner Caverns State Park', 31.837500, -110.347222, '2980 Hwy 90 Benson, AZ 85602 USA'),
    ('Dark Sky Park', 'Oracle State Park', 32.607778, -110.733056, 'Oracle, Arizona USA'),
    ('Dark Sky Park', 'Steinaker State Park', 40.515653, -109.538582, '4335 N. Highway 191 Vernal, UT 84078 USA'),
    ('Dark Sky Park', 'Walnut Canyon National Monument', 35.171666, -111.509722, '3 Walnut Canyon Rd, Flagstaff, AZ 86004'),
    ('Dark Sky Park', 'Great Basin National Park', 38.946874, -114.255347, '100 Great Basin National Park Baker, NV 89311 USA'),
    ('Dark Sky Park', 'Death Valley National Park', 36.241944, -116.825833, 'California, U.S.');
