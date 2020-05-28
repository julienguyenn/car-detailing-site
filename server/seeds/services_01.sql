DELETE FROM services;

INSERT INTO services (service_name, price, time, description, add_on)
 VALUES ('Basic Clean Up', 50, 2, '-Exterior Wash (wheels, wheel wells, rims, tire shine)-Interior Vacuum-Windows-Wipe Door Jams-Wipe Interior (all trim, console, Dash, etc)', false),
 ('Interior Shampoo and Vacuum', 70, 2, '-Exterior Wash (wheels, wheel wells rims, tire shine)-Interior Vacuuming, Shampoo Seats and Carpets, Floor Mats, Doors, Trunk-Detail Interior (all trim, console, dash, etc)-Windows-Clean Door Jams-Leather Conditioning-Salt Stain removals', false),
 ('Exterior Shampoo and Protection', 90, 2, '-Exterior Wash (wheels, wheel wells, rims, tire shine)-Windows-Clean Door Jams-Exterior Wax Protection', false),
 ('Exterior and Interior Full Detailing', 120, 2, '-Exterior Wash (wheels, wheel hub wells, rims, tire shine)-Interior Vacuuming, Shampoo Seats and Carpets, Floor Mats, Doors, Trunk-Detail Interior (all trim, console, dash, etc)-Windows-Clean Door Jams-Salt Stain removals-Exterior Wax Protection', false),
 ('Headlight Restoration', 25, 2, '-Removing any yellowing, haze or scratches', true),
 ('Engine Bay Detail', 40, 2, NULL, true),
 ('Headlight Restoration', 25, 2, NULL, true),
 ('Leather Conditioning', 25, 2, NULL, true);