//source - https://slim4you.ru/wp-content/uploads/tablica_kaloriinisti1.pdf

const productList = [
    {
        name: "Баклажаны",
        caloriePer100grams: 25,
        caloriePerPiece: null
    },
    {
        name: "Брюква",
        caloriePer100grams: 38,
        caloriePerPiece: null
    },
    {
        name: "Горошек зеленый ",
        caloriePer100grams: 75,
        caloriePerPiece: null
    },
    {
        name: "Грибы белые свежие ",
        caloriePer100grams: 25,
        caloriePerPiece: null
    },
    {
        name: "Зеленая фасоль (стручок)",
        caloriePer100grams: 33,
        caloriePerPiece: null
    },
    {
        name: "Кабачки",
        caloriePer100grams: 27,
        caloriePerPiece: null
    },
    {
        name: "Капуста белокочанная ",
        caloriePer100grams: 28 ,
        caloriePerPiece: null
    },
    {
        name: "Картофель",
        caloriePer100grams: 87,
        caloriePerPiece: null
    },
    {
        name: "Лук зеленый (перо)",
        caloriePer100grams: 22,
        caloriePerPiece: null
    },
    {
        name: "Лук репчатый ",
        caloriePer100grams: 44,
        caloriePerPiece: null
    },
    {
        name: "Морковь",
        caloriePer100grams: 34,
        caloriePerPiece: null
    },
    {
        name: "Огурцы",
        caloriePer100grams: 15,
        caloriePerPiece: null
    },
    {
        name: "Оливки",
        caloriePer100grams: 519,
        caloriePerPiece: null
    },
    {
        name: "Перец сладкий ",
        caloriePer100grams: 24,
        caloriePerPiece: null
    },
    {
        name: "Петрушка (зелень) ",
        caloriePer100grams: 47,
        caloriePerPiece: null
    },
    {
        name: "Помидоры (томаты)",
        caloriePer100grams: 20,
        caloriePerPiece: null
    },
    {
        name: "Редис",
        caloriePer100grams: 21,
        caloriePerPiece: null
    },
    {
        name: "Салат",
        caloriePer100grams: 14,
        caloriePerPiece: null
    },
    {
        name: "Свекла",
        caloriePer100grams: 50,
        caloriePerPiece: null
    },
    {
        name: "Хрен",
        caloriePer100grams: 75,
        caloriePerPiece: null
    },
    {
        name: "Чеснок",
        caloriePer100grams: 110,
        caloriePerPiece: null
    },
    {
        name: "Тыква",
        caloriePer100grams: 29,
        caloriePerPiece: null
    },
    {
        name: "Шпинат",
        caloriePer100grams: 20,
        caloriePerPiece: null
    },
    {
        name: "Капуста квашеная",
        caloriePer100grams: 14,
        caloriePerPiece: null
    },
    {
        name: "Огурцы соленые ",
        caloriePer100grams: 19,
        caloriePerPiece: null
    },
    {
        name: "Томаты соленые ",
        caloriePer100grams: 19,
        caloriePerPiece: null
    },
    {
        name: "Арбуз",
        caloriePer100grams: 38,
        caloriePerPiece: null
    },
    {
        name: "Дыня",
        caloriePer100grams: 39,
        caloriePerPiece: null
    },
    {
        name: "Абрикосы",
        caloriePer100grams: 45,
        caloriePerPiece: null
    },
    {
        name: "Ананас",
        caloriePer100grams: 48,
        caloriePerPiece: null
    },
    {
        name: "Апельсин",
        caloriePer100grams: 37,
        caloriePerPiece: null
    },
    {
        name: "Брусника",
        caloriePer100grams: 40,
        caloriePerPiece: null
    },
    {
        name: "Бананы",
        caloriePer100grams: 94,
        caloriePerPiece: null
    },
    {
        name: "Лимон",
        caloriePer100grams: 18,
        caloriePerPiece: null
    },
    {
        name: "Малина",
        caloriePer100grams: 39,
        caloriePerPiece: null
    },
    {
        name: "Мандарин",
        caloriePer100grams: 38,
        caloriePerPiece: null
    },
    {
        name: "Персики",
        caloriePer100grams: 66,
        caloriePerPiece: null
    },
    {
        name: "Гранат",
        caloriePer100grams: 52,
        caloriePerPiece: null
    },
    {
        name: "Хурма",
        caloriePer100grams: 65,
        caloriePerPiece: null
    },
    {
        name: "Черешня",
        caloriePer100grams: 53,
        caloriePerPiece: null
    },
    {
        name: "Киви",
        caloriePer100grams: 48,
        caloriePerPiece: null
    },
    {
        name: "Яблоки",
        caloriePer100grams: 46,
        caloriePerPiece: null
    },
    {
        name: "Икра кеты зернистая ",
        caloriePer100grams: 250,
        caloriePerPiece: null
    },
    {
        name: "Кальмар",
        caloriePer100grams: 74,
        caloriePerPiece: null
    },
    {
        name: "Горбуша",
        caloriePer100grams: 147,
        caloriePerPiece: null
    },
    {
        name: "Камбала",
        caloriePer100grams: 87,
        caloriePerPiece: null
    },
    {
        name: "Карась",
        caloriePer100grams: 87,
        caloriePerPiece: null
    },
    {
        name: "Краб",
        caloriePer100grams: 68,
        caloriePerPiece: null
    },
    {
        name: "Креветки97",
        caloriePer100grams: 39,
        caloriePerPiece: null
    },
    {
        name: "Лосось",
        caloriePer100grams: 176,
        caloriePerPiece: null
    },
    {
        name: "Мидии",
        caloriePer100grams: 72,
        caloriePerPiece: null
    },
    {
        name: "Минтай",
        caloriePer100grams: 69,
        caloriePerPiece: null
    },
    {
        name: "Мойва",
        caloriePer100grams: 157,
        caloriePerPiece: null
    },
    {
        name: "Морская капуста ",
        caloriePer100grams: 17,
        caloriePerPiece: null
    },
    {
        name: "Окунь морской ",
        caloriePer100grams: 117,
        caloriePerPiece: null
    },
    {
        name: "Палтус",
        caloriePer100grams: 102,
        caloriePerPiece: null
    },
    {
        name: "Печень трески",
        caloriePer100grams: 610,
        caloriePerPiece: null
    },
    {
        name: "Сельдь",
        caloriePer100grams: 246,
        caloriePerPiece: null
    },
    {
        name: "Семга",
        caloriePer100grams: 219,
        caloriePerPiece: null
    },
    {
        name: "Скумбрия",
        caloriePer100grams: 153,
        caloriePerPiece: null
    },
    {
        name: "Кефир 3,2%",
        caloriePer100grams: 59,
        caloriePerPiece: null
    },
    {
        name: "Кефир обезжиренный ",
        caloriePer100grams: 30,
        caloriePerPiece: null
    },
    {
        name: "Молоко 0,5%",
        caloriePer100grams: 36,
        caloriePerPiece: null
    },
    {
        name: "Молоко 3,2% ",
        caloriePer100grams: 58,
        caloriePerPiece: null
    },
    {
        name: "Молоко сгущенное с сахаром ",
        caloriePer100grams: 315,
        caloriePerPiece: null
    },
    {
        name: "Сметана 20% ",
        caloriePer100grams: 206,
        caloriePerPiece: null
    },
    {
        name: "Сыр голландский ",
        caloriePer100grams: 352,
        caloriePerPiece: null
    },
    {
        name: "Масло подсолнечное ",
        caloriePer100grams: 900,
        caloriePerPiece: null
    },
    {
        name: "Шпик свиной ",
        caloriePer100grams: 816,
        caloriePerPiece: null
    },
    {
        name: "Макаронные изделия ",
        caloriePer100grams: 348,
        caloriePerPiece: null
    },
    {
        name: "Торт бисквитный с фруктовой начинкой ",
        caloriePer100grams: 398,
        caloriePerPiece: null
    },
    {
        name: "Хлеб пшеничный из муки 1 сорта ",
        caloriePer100grams: 266,
        caloriePerPiece: null
    },
    {
        name: "Хлеб ржаной",
        caloriePer100grams: 224,
        caloriePerPiece: null
    },
    {
        name: "Зефир",
        caloriePer100grams: 316,
        caloriePerPiece: null
    },
    {
        name: "Мармелад",
        caloriePer100grams: 311,
        caloriePerPiece: null
    },
    {
        name: "Сахар",
        caloriePer100grams: 399,
        caloriePerPiece: null
    },
    {
        name: "Шоколад молочный ",
        caloriePer100grams: 558,
        caloriePerPiece: null
    },
    {
        name: "Шоколад темный ",
        caloriePer100grams: 549,
        caloriePerPiece: null
    },
    {
        name: "Пиво",
        caloriePer100grams: 120,
        caloriePerPiece: null
    },
    {
        name: "Вино виноградное сухое",
        caloriePer100grams: 72,
        caloriePerPiece: null
    },
    {
        name: "Сок фруктовый (усредненный)",
        caloriePer100grams: 55,
        caloriePerPiece: null
    },
    {
        name: "Баранина",
        caloriePer100grams: 202,
        caloriePerPiece: null
    },
    {
        name: "Говядина",
        caloriePer100grams: 165,
        caloriePerPiece: null
    },
    {
        name: "Свинина жирная ",
        caloriePer100grams: 489,
        caloriePerPiece: null
    },
    {
        name: "Телятина жирная ",
        caloriePer100grams: 148,
        caloriePerPiece: null
    },
    {
        name: "Говядина тушеная ",
        caloriePer100grams: 231,
        caloriePerPiece: null
    },
    {
        name: "Свинина тушеная ",
        caloriePer100grams: 348,
        caloriePerPiece: null
    },
    {
        name: "Колбаса вареная Докторская ",
        caloriePer100grams: 260,
        caloriePerPiece: null
    },
    {
        name: "Колбаса сырокопченая Московская ",
        caloriePer100grams: 472,
        caloriePerPiece: null
    },
    {
        name: "Ветчина",
        caloriePer100grams: 278,
        caloriePerPiece: null
    },{
        name: "Индейка",
        caloriePer100grams: 197,
        caloriePerPiece: null
    },
    {
        name: "Курица",
        caloriePer100grams: 164,
        caloriePerPiece: null
    },
    {
        name: "Яйцо куриное 1 шт",
        caloriePer100grams: null,
        caloriePerPiece: 60
    },

]


export {productList};