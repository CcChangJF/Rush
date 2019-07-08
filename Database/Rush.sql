IF DB_ID('InsuranceClaim') is null
    CREATE DATABASE InsuranceClaim;
GO

USE InsuranceClaim;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'Member'))
BEGIN
    CREATE TABLE Member
    ([Id] int identity(1,1) not null,
    primary key(Id),
    [Name] nvarchar(256) not null,
    [Type] int,
    );
END

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'Staff'))
BEGIN
    CREATE TABLE Staff
    ([Id] int identity(1,1) not null,
    primary key(Id),
    [Name] nvarchar(256) not null,
    );
END

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'Vehicle'))
BEGIN
    CREATE TABLE Vehicle
    ([Id] nvarchar(256) not null,
    primary key(Id),
    [MemberId] int not null,
    foreign key (MemberId) references Member(Id),
    [Type] nvarchar(256) not null,
    [Make] nvarchar(256) not null,
    [Model] nvarchar(256),
    [Year] int,
    );
END

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'Damage'))
BEGIN
    CREATE TABLE Damage
    ([Id] int identity(1,1) not null,
    primary key(Id),
    [VehicleId] nvarchar(256) not null,
    foreign key (VehicleId) references Vehicle(Id),
    [DamagePart] nvarchar(256) not null,
    [Severity] nvarchar(256) not null,
    [Photo] nvarchar(512) not null,
    [Cost] decimal(18, 6),
    );
END

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'Claim'))
BEGIN
    CREATE TABLE Claim
    ([Id] int identity(1,1) not null,
    primary key(Id),
    [StaffId] int not null,
    foreign key (StaffId) references Staff(Id),
    [DateDealt] datetime,
    [TotalCost] decimal(18, 6),
    [HasPaid] int,
    [Description] nvarchar(512),
    );
END

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'dbo'
            AND TABLE_NAME = 'ClaimDamage'))
BEGIN
    CREATE TABLE ClaimDamage
    ([Id] int identity(1,1) not null,
    primary key(Id),
    [ClaimId] int,
    foreign key (ClaimId) references Claim(Id),
    [DamageId] int,
    foreign key (DamageId) references Damage(Id),
    );
END

