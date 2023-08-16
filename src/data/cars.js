const cars = [
  {
    Id: 1,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/jeep_wrangler_2012.jpg",
    Brand: "Jeep",
    Model: "Wrangler",
    Mileage: 132000,
    Year: 2012,
    Price: 30900,
    CreatedAt: new Date("2022-09-05"),
  },
  {
    Id: 2,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/ford_f-150_2020.jpg",
    Brand: "Ford",
    Model: "F-150",
    Mileage: 20600,
    Year: 2020,
    Price: 123000,
    CreatedAt: new Date("2022-10-15"),
  },
  {
    Id: 3,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2008.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 240000,
    Year: 2008,
    Price: 23200,
    CreatedAt: new Date("2022-11-23"),
  },
  {
    Id: 4,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/hyundai_santa_fe_2014.jpg",
    Brand: "Hyundai",
    Model: "Santa Fe",
    Mileage: 80000,
    Year: 2014,
    Price: 25800,
    CreatedAt: new Date("2022-09-11"),
  },
  {
    Id: 5,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2020.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 40000,
    Year: 2020,
    Price: 63900,
    CreatedAt: new Date("2022-10-06"),
  },
  {
    Id: 6,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2016.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 136000,
    Year: 2016,
    Price: 46500,
    CreatedAt: new Date("2022-10-06"),
  },
  {
    Id: 7,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2018.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 110000,
    Year: 2018,
    Price: 50000,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id: 8,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/land_rover_range_rover_2015.jpg",
    Brand: "Land Rover",
    Model: "Range Rover",
    Mileage: 136800,
    Year: 2015,
    Price: 69500,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id: 9,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_gl_500_2013.jpg",
    Brand: "Mercedes",
    Model: "GL 500",
    Mileage: 148000,
    Year: 2013,
    Price: 39500,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id: 10,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/land_rover_rr_sport_2019.jpg",
    Brand: "Land Rover",
    Model: "RR Sport",
    Mileage: 91000,
    Year: 2019,
    Price: 78000,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id: 11,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2017.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 145000,
    Year: 2017,
    Price: 49800,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id: 12,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/land_rover_range_rover_2018.jpg",
    Brand: "Land Rover",
    Model: "Range Rover",
    Mileage: 134000,
    Year: 2018,
    Price: 99700,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id: 13,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_e220_2012.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 156700,
    Year: 2012,
    Price: 21900,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id: 14,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_s_350_2020.jpg",
    Brand: "Mercedes",
    Model: "S 350",
    Mileage: 58000,
    Year: 2020,
    Price: 115000,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id: 15,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/nissan_x-trail_2002.jpg",
    Brand: "Nissan",
    Model: "X-Trail",
    Mileage: 140000,
    Year: 2002,
    Price: 10000,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id: 16,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mercedes_s_350_2019.jpg",
    Brand: "Mercedes",
    Model: "S 350",
    Mileage: 70000,
    Year: 2019,
    Price: 99900,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id: 17,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/bmw_x5_2015.jpg",
    Brand: "BMW",
    Model: "X5",
    Mileage: 146500,
    Year: 2015,
    Price: 36900,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id: 18,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/mitsubishi_pajero_2017.jpg",
    Brand: "Mitsubishi",
    Model: "Pajero",
    Mileage: 187000,
    Year: 2017,
    Price: 26500,
    CreatedAt: new Date("2022-09-08"),
  },
  {
    Id: 19,
    ImagePath:
      "https://media.aykhan.net/assets/images/step-it-academy/react/task6/cars/bmw_x5_2014.jpg",
    Brand: "BMW",
    Model: "X5",
    Mileage: 101000,
    Year: 2014,
    Price: 39900,
    CreatedAt: new Date("2022-09-08"),
  },
];

export default cars;
