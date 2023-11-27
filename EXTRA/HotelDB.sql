CREATE TABLE [Epmloyees] (
  [id] integer PRIMARY KEY,
  [name] varchar(23) NOT NULL,
  [password] varchar(30) NOT NULL,
  [role] enum NOT NULL,
  [gender] enum,
  [phone] varchar(20),
  [email] varchar(50),
  [address] varchar(255),
  [hotelId] integer NOT NULL
)
GO

CREATE TABLE [Hotels] (
  [id] integer PRIMARY KEY,
  [name] varchar(50) NOT NULL,
  [description] text,
  [address] varchar(255) NOT NULL,
  [phone] varchar(20),
  [typeId] integer NOT NULL
)
GO

CREATE TABLE [HotelTypes] (
  [id] integer PRIMARY KEY,
  [name] varchar(20) NOT NULL
)
GO

CREATE TABLE [Customers] (
  [id] integer PRIMARY KEY,
  [name] varchar(50) NOT NULL,
  [dateOfBirth] timestamp,
  [address] varchar(255) NOT NULL,
  [phone] varchar(20),
  [email] varchar(50),
  [countryId] integer,
  [city] varchar(30),
  [passportNo] varchar(20),
  [createdAt] timestamp NOT NULL
)
GO

CREATE TABLE [Countries] (
  [id] integer PRIMARY KEY,
  [name] varchar(40) NOT NULL
)
GO

CREATE TABLE [OccupancyTypes] (
  [id] integer PRIMARY KEY,
  [name] varchar(20) NOT NULL
)
GO

CREATE TABLE [SuiteStyleTypes] (
  [id] integer PRIMARY KEY,
  [name] varchar(20) NOT NULL
)
GO

CREATE TABLE [Rooms] (
  [id] integer PRIMARY KEY,
  [typeByOccupancyId] integer NOT NULL,
  [typeBySuiteStyleId] integer NOT NULL,
  [pricePerDay] decimal,
  [hotelId] integer NOT NULL,
  [isOccupied] boolean
)
GO

CREATE TABLE [Reservations] (
  [id] integer PRIMARY KEY,
  [hotelId] integer NOT NULL,
  [customerId] integer NOT NULL,
  [numberOfGuests] integer NOT NULL,
  [roomId] integer NOT NULL,
  [reservationDate] datetime NOT NULL,
  [specialRequests] text,
  [arrivalDate] timestamp NOT NULL,
  [departureDate] timestamp NOT NULL,
  [createdAt] timestamp NOT NULL,
  [updatedAt] timestamp NOT NULL,
  [status] enum NOT NULL
)
GO

CREATE TABLE [Reviews] (
  [id] integer PRIMARY KEY,
  [hotelId] integer NOT NULL,
  [reviewerName] varchar(40) NOT NULL,
  [reviewText] text,
  [createdAt] timestamp NOT NULL,
  [reviewRating] decimal(1,2)
)
GO

CREATE TABLE [Payments] (
  [id] integer PRIMARY KEY,
  [paymentAmount] integer NOT NULL,
  [paymentDate] timestamp NOT NULL,
  [reservationId] integer NOT NULL
)
GO

CREATE TABLE [HotelServices] (
  [id] integer PRIMARY KEY,
  [name] varchar(20) NOT NULL,
  [price] decimal NOT NULL
)
GO

CREATE TABLE [ReservationsAndServices] (
  [id] integer PRIMARY KEY,
  [reservationId] integer NOT NULL,
  [serviceId] integer NOT NULL
)
GO

CREATE TABLE [Dishes] (
  [id] integer PRIMARY KEY,
  [name] varchar(50) NOT NULL,
  [dishTypeId] integer NOT NULL,
  [portionSize] integer NOT NULL,
  [price] decimal NOT NULL,
  [isActive] boolean,
  [effectiveDate] timestamp NOT NULL,
  [expiryDate] timestamp NOT NULL
)
GO

CREATE TABLE [DishTypes] (
  [id] integer PRIMARY KEY,
  [name] varchar(50) NOT NULL
)
GO

CREATE TABLE [ReservationsAndDishes] (
  [id] integer PRIMARY KEY,
  [reservationId] integer NOT NULL,
  [dishId] integer NOT NULL
)
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = '3-star, 4-star, 5-star',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'HotelTypes',
@level2type = N'Column', @level2name = 'name';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'single, double, triple etc',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'OccupancyTypes',
@level2type = N'Column', @level2name = 'name';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'standart, junior, presidential etc',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'SuiteStyleTypes',
@level2type = N'Column', @level2name = 'name';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'paid services: Parking, Bottle of champagne, Flowers etc',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'HotelServices',
@level2type = N'Column', @level2name = 'name';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'vegeterian, gluten-free,...',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'DishTypes',
@level2type = N'Column', @level2name = 'name';
GO

ALTER TABLE [Epmloyees] ADD FOREIGN KEY ([hotelId]) REFERENCES [Hotels] ([id])
GO

ALTER TABLE [Hotels] ADD FOREIGN KEY ([typeId]) REFERENCES [HotelTypes] ([id])
GO

ALTER TABLE [Customers] ADD FOREIGN KEY ([countryId]) REFERENCES [Countries] ([id])
GO

ALTER TABLE [Rooms] ADD FOREIGN KEY ([typeByOccupancyId]) REFERENCES [OccupancyTypes] ([id])
GO

ALTER TABLE [Rooms] ADD FOREIGN KEY ([typeBySuiteStyleId]) REFERENCES [SuiteStyleTypes] ([id])
GO

ALTER TABLE [Rooms] ADD FOREIGN KEY ([hotelId]) REFERENCES [Hotels] ([id])
GO

ALTER TABLE [Reservations] ADD FOREIGN KEY ([hotelId]) REFERENCES [Hotels] ([id])
GO

ALTER TABLE [Reservations] ADD FOREIGN KEY ([customerId]) REFERENCES [Customers] ([id])
GO

ALTER TABLE [Reservations] ADD FOREIGN KEY ([roomId]) REFERENCES [Rooms] ([id])
GO

ALTER TABLE [Reviews] ADD FOREIGN KEY ([hotelId]) REFERENCES [Hotels] ([id])
GO

ALTER TABLE [Payments] ADD FOREIGN KEY ([reservationId]) REFERENCES [Reservations] ([id])
GO

ALTER TABLE [ReservationsAndServices] ADD FOREIGN KEY ([reservationId]) REFERENCES [Reservations] ([id])
GO

ALTER TABLE [ReservationsAndServices] ADD FOREIGN KEY ([serviceId]) REFERENCES [HotelServices] ([id])
GO

ALTER TABLE [Dishes] ADD FOREIGN KEY ([dishTypeId]) REFERENCES [DishTypes] ([id])
GO

ALTER TABLE [ReservationsAndDishes] ADD FOREIGN KEY ([reservationId]) REFERENCES [Reservations] ([id])
GO

ALTER TABLE [ReservationsAndDishes] ADD FOREIGN KEY ([dishId]) REFERENCES [Dishes] ([id])
GO
