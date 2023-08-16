const cars = [
  {
    Id:1,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F10%2F24%2F23%2F19%2F29%2F3f79eac3-9293-4d40-a7a4-204c8b7fb61b%2F87620_ZBI0LBB6A0che9sDaRiVwA.jpg",
    Brand: "Jeep",
    Model: "Wrangler",
    Mileage: 132000,
    Year: 2012,
    Price: 30900,
    CreatedAt: new Date("2022-09-05"),
  },
  {
    Id:2,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F04%2F17%2F05%2F58%2F1bf7bd33-15a2-44bb-bba5-5cf693d7f73c%2F98234_RAQNpKaMW4px_nKsQvR2bw.jpg",
    Brand: "Ford",
    Model: "F-150",
    Mileage: 20600,
    Year: 2020,
    Price: 123000,
    CreatedAt: new Date("2022-10-15"),
  },
  {
    Id:3,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F10%2F31%2F13%2F31%2F16%2Fe8d27b44-a2f0-4191-8605-253d2adab9f4%2F16186_rqZL0gQHyzCezgMby-6zfQ.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 240000,
    Year: 2008,
    Price: 23200,
    CreatedAt: new Date("2022-11-23"),
  },
  {
    Id:4,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F06%2F16%2F59%2F40%2F52a6101b-c9f1-44d4-b61d-4189bfb8109c%2F53855_jqUyTQnltapHCSTUx00nSg.jpg",
    Brand: "Hyundai",
    Model: "Santa Fe",
    Mileage: 80000,
    Year: 2014,
    Price: 25800,   
    CreatedAt: new Date("2022-09-11"),
  },
  {
    Id:5,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F24%2F18%2F25%2F21%2Fffefc211-44c6-4bc9-bda4-38190aafb661%2F88509_iKpYOQns0-YRi14srakZzQ.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 40000,
    Year: 2020,
    Price: 63900,
    CreatedAt: new Date("2022-10-06"),
  },
  {
    Id:6,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F24%2F19%2F49%2F32%2Ff531605a-41b9-4ae9-bf52-c5aaad3f0471%2F88515_02LGv_BgvS9eH5m0IhnETA.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 136000,
    Year: 2016,
    Price: 46500,
    CreatedAt: new Date("2022-10-06"),
  },
  {
    Id:7,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F11%2F01%2F12%2F33%2F39%2Fdfd0089c-16d4-4b21-b667-eba3fed9b5b7%2F80095_ydsl3srU7-abyKp5BFr3Xg.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 110000,
    Year: 2018,
    Price: 50000,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id:8,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F11%2F26%2F15%2F30%2F32%2Ff091a2b6-93d2-43cb-9edf-947b93a2f8d8%2F67484_i_1wbP6oFVQf5azdW47Wsg.jpg",
    Brand: "Land Rover",
    Model: "Range Rover",
    Mileage: 136800,
    Year: 2015,
    Price: 69500,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id:9,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F31%2F15%2F16%2F49%2F599c1771-a70b-472e-92cd-e9acaa840f8e%2F127_WQYpXZYjTYHCQ4C9oXiRUQ.jpg",
    Brand: "Mercedes",
    Model: "GL 500",
    Mileage: 148000,
    Year: 2013,
    Price: 39500,
    CreatedAt: new Date("2022-09-26"),
  },
  {
    Id:10,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F02%2F17%2F39%2F10%2Ffb3ef93a-be5b-4651-bcea-e6aeda85b043%2F40729_QIFkqyX9sF-BMjJsTYmpHA.jpg",
    Brand: "Land Rover",
    Model: "RR Sport",
    Mileage: 91000,
    Year: 2019,
    Price: 78000,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id:11,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F25%2F16%2F11%2F47%2F5c898222-ec00-464d-98db-ead963cadc11%2F22643_0oOoow5BO8oEEBFA0ww1pg.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 145000,
    Year: 2017,
    Price: 49800,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id:12,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F24%2F17%2F41%2F40%2Fdf8fd785-f00b-4785-b22c-4fd89f316a28%2F88511_7myX_xgydmLd-ORzEotcTA.jpg",
    Brand: "Land Rover",
    Model: "Range Rover",
    Mileage: 134000,
    Year: 2018,
    Price: 99700,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id:13,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F12%2F17%2F00%2F03%2F27%2Fb9d7f472-99f5-4a07-84ec-ded914b7b842%2F42087_zxMQHS5_JAcC2gEw6B_E7g.jpg",
    Brand: "Mercedes",
    Model: "E220",
    Mileage: 156700,
    Year: 2012,
    Price: 21900,
    CreatedAt: new Date("2022-10-18"),
  },
  {
    Id:14,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F12%2F17%2F00%2F19%2F11%2F946b86c5-6e35-4a6e-b13b-8d5654fd87eb%2F49383_XridbcUpGePZs5MOLcm38Q.jpg",
    Brand: "Mercedes",
    Model: "S 350",
    Mileage: 58000,
    Year: 2020,
    Price: 115000,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id:15,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F10%2F25%2F14%2F56%2F24%2Fb61bbc4c-06f3-480c-ba5d-15e90b943e9d%2F73790_RqxHuUKTDpqkTKQMl76MLg.jpg",
    Brand: "Nissan",
    Model: "X-Trail",
    Mileage: 140000,
    Year: 2002,
    Price: 10000,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id:16,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F10%2F24%2F18%2F08%2F53%2Fa6d0b9cf-41f5-4009-b6da-c5bc16cacc30%2F87645_I7vwpe_xNEeEhdw6qBFjUg.jpg",
    Brand: "Mercedes",
    Model: "S 350",
    Mileage: 70000,
    Year: 2019,
    Price: 99900,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id:17,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F10%2F25%2F14%2F47%2F07%2Fe26281dd-99cc-4b1c-932f-2e0766da6a82%2F73792_Z5Qnni0zipx6Gwztz7Gq9g.jpg",
    Brand: "BMW",
    Model: "X5",
    Mileage: 146500,
    Year: 2015,
    Price: 36900,
    CreatedAt: new Date("2022-09-15"),
  },
  {
    Id:18,
    ImagePath:
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F24%2F22%2F37%2F50%2F1d928ff6-39bc-41df-bc05-fe0dd8b15397%2F88502_R0F4pgba8b0VlLcVlEdHyw.jpg",
    Brand: "Mitsubishi",
    Model: "Pajero",
    Mileage: 187000,
    Year: 2017,
    Price: 26500,
    CreatedAt: new Date("2022-09-08"),
  },
  {
    Id:19,
    ImagePath:
      "https://turbo.azstatic.com/uploads/f460x343/2022%2F11%2F21%2F20%2F01%2F23%2F295117c2-36df-4301-9f5e-88a61d4c7d62%2F2378_jHIxg2RE9QvuIuhnVikKqg.jpg",
    Brand: "BMW",
    Model: "X5",
    Mileage: 101000,
    Year: 2014,
    Price: 39900,
    CreatedAt: new Date("2022-09-08"),
  },
];

export default cars;
