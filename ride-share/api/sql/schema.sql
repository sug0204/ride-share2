create table schemaforride."User"
(
    id          serial
        constraint user_pk
            primary key,
    "firstName" varchar(40) not null,
    "lastName"  varchar(40) not null,
    email       varchar(80) not null,
    password    varchar(80) not null,
    phone       integer     not null,
    "isAdmin"   boolean     not null
);

create table schemaforride."Vehicle_Type"
(
    id   serial
        constraint vehicle_type_pk
            primary key,
    type varchar(40) not null
);

create table schemaforride."State"
(
    abbreviation varchar(40) not null
        constraint state_pk
            primary key,
    name         varchar(40) not null
);

create table schemaforride."Driver"
(
    id              serial
        constraint driver_pk
            primary key,
    "licenseNumber" varchar(40),
    "userId"        integer     not null
        constraint driver_user_id_fk
            references schemaforride."User",
    "licenseState"  varchar(40) not null
        constraint driver_state_abbreviation_fk
            references schemaforride."State"
);

create table schemaforride."Vehicle"
(
    id              serial
        constraint vehicle_pk
            primary key,
    make            varchar(40)      not null,
    model           varchar(40)      not null,
    color           varchar(20)      not null,
    "vehicleTypeId" integer          not null
        constraint vehicle_vehicle_type_id_fk
            references schemaforride."Vehicle_Type",
    capacity        integer          not null,
    mpg             double precision not null,
    "licenseState"  varchar(20)      not null
        constraint vehicle_state_abbreviation_fk
            references schemaforride."State",
    "licensePlate"  varchar(20)      not null
);

create table schemaforride."Authorization"
(
    "driverId"  integer not null
        constraint authorization_driver_id_fk
            references schemaforride."Driver",
    "vehicleId" integer not null
        constraint authorization_vehicle_id_fk
            references schemaforride."Vehicle",
    constraint authorization_pk
        primary key ("driverId", "vehicleId")
);

create table schemaforride."Location"
(
    id        serial
        constraint location_pk
            primary key,
    name      varchar(40) not null,
    address   varchar(80) not null,
    city      varchar(40) not null,
    state     varchar(40) not null
        constraint location_state_abbreviation_fk
            references schemaforride."State",
    "zipCode" varchar(40) not null
);

create table schemaforride."Ride"
(
    id               serial
        constraint ride_pk
            primary key,
    date             timestamp        not null,
    distance         double precision not null,
    "fuelPrice"      double precision not null,
    fee              double precision not null,
    "vehicleId"      integer          not null
        constraint ride_vehicle_id_fk
            references schemaforride."Vehicle",
    "fromLocationId" integer          not null
        constraint ride_location_id_fk
            references schemaforride."Location",
    "toLocationId"   integer          not null
        constraint ride_location_id_fk_2
            references schemaforride."Location"
);

create table schemaforride."Passenger"
(
    "userId" integer not null
        constraint passenger_user_id_fk
            references schemaforride."User",
    "rideId" integer not null
        constraint passenger_ride_id_fk
            references schemaforride."Ride",
    constraint passenger_pk
        primary key ("userId", "rideId")
);

create table schemaforride."Drivers"
(
    "driverId" integer not null
        constraint drivers_driver_id_fk
            references schemaforride."Driver",
    "rideId"   integer not null
        constraint drivers_ride_id_fk
            references schemaforride."Ride",
    constraint drivers_pk
        primary key ("driverId", "rideId")
);


