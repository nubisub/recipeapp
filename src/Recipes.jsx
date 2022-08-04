import {useEffect, useState} from "react";

const data = {
    "recipes": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 4,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 6,
            "healthScore": 22,
            "pricePerServing": 131.1,
            "extendedIngredients": [
                {
                    "id": 1012034,
                    "aisle": "Spices and Seasonings",
                    "image": "seasoning.png",
                    "consistency": "SOLID",
                    "name": "Spice Rub",
                    "nameClean": "dry seasoning rub",
                    "original": "2 Tbsp. Moroccan spice mixture (1/2 tsp. cayenne, 1/2 tsp. turmeric, 2 1/2 tsp cumin, 1 tsp. allspice, 1 tsp. cinnamon, 1/2 tsp. coriander)",
                    "originalName": "Moroccan spice mixture (1/2 tsp. cayenne, 1/2 tsp. turmeric, 2 1/2 tsp cumin, 1 tsp. allspice, 1 tsp. cinnamon, 1/2 tsp. coriander)",
                    "amount": 2.0,
                    "unit": "Tbsp",
                    "meta": [
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "almond",
                    "nameClean": "almonds",
                    "original": "1/8 c. almond slivers",
                    "originalName": "almond slivers",
                    "amount": 0.125,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 29.573,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9021,
                    "aisle": "Produce",
                    "image": "apricot.jpg",
                    "consistency": "SOLID",
                    "name": "apricot",
                    "nameClean": "apricot",
                    "original": "1/2 c. dried apricot halves, roughly chopped",
                    "originalName": "dried apricot halves, roughly chopped",
                    "amount": 0.5,
                    "unit": "c",
                    "meta": [
                        "dried",
                        "roughly chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 16058,
                    "aisle": "Canned and Jarred",
                    "image": "chickpeas.png",
                    "consistency": "SOLID",
                    "name": "canned chick peas",
                    "nameClean": "canned chickpeas",
                    "original": "1 14-oz. can chick peas, drained",
                    "originalName": "chick peas, drained",
                    "amount": 14.0,
                    "unit": "oz",
                    "meta": [
                        "drained",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 14.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 396.893,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "SOLID",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "1 28-oz. can whole peeled tomatoes",
                    "originalName": "whole peeled tomatoes",
                    "amount": 28.0,
                    "unit": "oz",
                    "meta": [
                        "whole",
                        "peeled",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 28.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 793.787,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "1/2 cup Finely Chopped Cilantro",
                    "originalName": "Finely Chopped Cilantro",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "1 Tbsp. extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 1.0,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 6984,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "fat free chicken broth",
                    "nameClean": "fat free chicken broth",
                    "original": "2 c. fat free chicken broth",
                    "originalName": "fat free chicken broth",
                    "amount": 2.0,
                    "unit": "c",
                    "meta": [
                        "fat free"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 Tbsp. flour",
                    "originalName": "flour",
                    "amount": 1.0,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11216,
                    "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "fresh ginger root",
                    "nameClean": "ginger",
                    "original": "1 tsp. fresh ginger root, minced",
                    "originalName": "fresh ginger root, minced",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [
                        "fresh",
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic clove",
                    "nameClean": "garlic",
                    "original": "1 garlic clove, minced",
                    "originalName": "garlic clove, minced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "ground pepper",
                    "nameClean": "black pepper",
                    "original": "Salt and ground black pepper",
                    "originalName": "Salt and ground black pepper",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 19296,
                    "aisle": "Nut butters, Jams, and Honey",
                    "image": "honey.png",
                    "consistency": "LIQUID",
                    "name": "honey",
                    "nameClean": "honey",
                    "original": "1 Tbsp. honey",
                    "originalName": "honey",
                    "amount": 1.0,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 onion, finely chopped",
                    "originalName": "onion, finely chopped",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1055062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "skinless boneless chicken breasts",
                    "nameClean": "boneless skinless chicken breast",
                    "original": "2 large boneless skinless chicken breasts, cut into 1-inch cubes",
                    "originalName": "boneless skinless chicken breasts, cut into 1-inch cubes",
                    "amount": 2.0,
                    "unit": "large",
                    "meta": [
                        "boneless",
                        "skinless",
                        "cut into 1-inch cubes"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                }
            ],
            "id": 652421,
            "title": "Moroccan Chicken Tagine",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/V36XNVKB/moroccan-chicken-tagine",
            "image": "https://spoonacular.com/recipeImages/652421-556x370.jpg",
            "imageType": "jpg",
            "summary": "Need a <b>dairy free main course</b>? Moroccan Chicken Tagine could be an excellent recipe to try. This recipe serves 6 and costs $1.27 per serving. One serving contains <b>228 calories</b>, <b>16g of protein</b>, and <b>7g of fat</b>. 6 people have made this recipe and would make it again. Head to the store and pick up salt and ground pepper, honey, flour, and a few other things to make it today. To use up the almond you could follow this main course with the <a href=\"https://spoonacular.com/recipes/almond-cake-599638\">Almond Cake</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 81%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-100347\">Moroccan Chicken Tagine</a>, <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-124767\">Moroccan Chicken Tagine</a>, and <a href=\"https://spoonacular.com/recipes/moroccan-chicken-tagine-264133\">Moroccan Chicken Tagine</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [],
            "instructions": "<ol><li>In a pie plate, combine the flour and Moroccan spice mixture. Add chicken pieces and toss to coat.</li><li>Heat oil in your pressure cooker over medium-high heat. Once hot, add the chicken pieces and allow to brown for one minute per side. Remove chicken from pressure cooker and set aside.</li><li>Reduce heat to medium and add ginger and onions. Saute for three minutes, until onions are semi-translucent. Add garlic and cook for another minute.</li><li>Add the apricots, whole tomatoes, chicken broth or stock, and browned chicken pieces to the pot.</li><li>Cover, and bring to low pressure over medium-high heat. Once you have reached pressure, cook for eight minutes then remove from heat and release the pressure using the quick release method (open the steam valve).</li><li>Stir in the chick peas, almonds, and honey and let them warm for a few minutes.</li><li>Check your chicken for done-ness and taste the tagine. Adjust salt and pepper as needed. Serve over couscous and garnish with cilantro leaves.</li><li>*If using a Dutch Oven instead, follow steps 1-4 as described, then bring the mixture to a boil, reduce to a simmer, and cook for 20-25 minutes or until apricots are tender. Continue with step 6.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a pie plate, combine the flour and Moroccan spice mixture.",
                            "ingredients": [
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Add chicken pieces and toss to coat.",
                            "ingredients": [
                                {
                                    "id": 1005006,
                                    "name": "chicken pieces",
                                    "localizedName": "chicken pieces",
                                    "image": "chicken-parts.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Heat oil in your pressure cooker over medium-high heat. Once hot, add the chicken pieces and allow to brown for one minute per side.",
                            "ingredients": [
                                {
                                    "id": 1005006,
                                    "name": "chicken pieces",
                                    "localizedName": "chicken pieces",
                                    "image": "chicken-parts.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404658,
                                    "name": "pressure cooker",
                                    "localizedName": "pressure cooker",
                                    "image": "pressure-cooker.jpg"
                                }
                            ],
                            "length": {
                                "number": 1,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Remove chicken from pressure cooker and set aside.Reduce heat to medium and add ginger and onions.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 11216,
                                    "name": "ginger",
                                    "localizedName": "ginger",
                                    "image": "ginger.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404658,
                                    "name": "pressure cooker",
                                    "localizedName": "pressure cooker",
                                    "image": "pressure-cooker.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Saute for three minutes, until onions are semi-translucent.",
                            "ingredients": [
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Add garlic and cook for another minute.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Add the apricots, whole tomatoes, chicken broth or stock, and browned chicken pieces to the pot.Cover, and bring to low pressure over medium-high heat. Once you have reached pressure, cook for eight minutes then remove from heat and release the pressure using the quick release method (open the steam valve).Stir in the chick peas, almonds, and honey and let them warm for a few minutes.Check your chicken for done-ness and taste the tagine. Adjust salt and pepper as needed.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 1005006,
                                    "name": "chicken pieces",
                                    "localizedName": "chicken pieces",
                                    "image": "chicken-parts.jpg"
                                },
                                {
                                    "id": 10711529,
                                    "name": "whole tomato",
                                    "localizedName": "whole tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 6194,
                                    "name": "chicken broth",
                                    "localizedName": "chicken broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 16057,
                                    "name": "chickpeas",
                                    "localizedName": "chickpeas",
                                    "image": "chickpeas.png"
                                },
                                {
                                    "id": 9021,
                                    "name": "apricot",
                                    "localizedName": "apricot",
                                    "image": "apricot.jpg"
                                },
                                {
                                    "id": 12061,
                                    "name": "almonds",
                                    "localizedName": "almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 19296,
                                    "name": "honey",
                                    "localizedName": "honey",
                                    "image": "honey.png"
                                },
                                {
                                    "id": 1006615,
                                    "name": "stock",
                                    "localizedName": "stock",
                                    "image": "chicken-broth.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404774,
                                    "name": "tajine pot",
                                    "localizedName": "tajine pot",
                                    "image": "tajine.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 8,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 8,
                            "step": "Serve over couscous and garnish with cilantro leaves.*If using a Dutch Oven instead, follow steps 1-4 as described, then bring the mixture to a boil, reduce to a simmer, and cook for 20-25 minutes or until apricots are tender. Continue with step 6.",
                            "ingredients": [
                                {
                                    "id": 11165,
                                    "name": "fresh cilantro",
                                    "localizedName": "fresh cilantro",
                                    "image": "cilantro.png"
                                },
                                {
                                    "id": 9021,
                                    "name": "apricot",
                                    "localizedName": "apricot",
                                    "image": "apricot.jpg"
                                },
                                {
                                    "id": 20028,
                                    "name": "couscous",
                                    "localizedName": "couscous",
                                    "image": "couscous-cooked.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404667,
                                    "name": "dutch oven",
                                    "localizedName": "dutch oven",
                                    "image": "dutch-oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 25,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "sourceName": null,
            "creditsText": null,
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/moroccan-chicken-tagine-652421"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 15,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 63,
            "healthScore": 15,
            "pricePerServing": 196.79,
            "extendedIngredients": [
                {
                    "id": 1006,
                    "aisle": "Cheese",
                    "image": "brie.jpg",
                    "consistency": "SOLID",
                    "name": "brie",
                    "nameClean": "brie",
                    "original": "1 Brie Log such as Alouette",
                    "originalName": "Brie Log such as Alouette",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11209,
                    "aisle": "Produce",
                    "image": "eggplant.png",
                    "consistency": "SOLID",
                    "name": "eggplant",
                    "nameClean": "eggplant",
                    "original": "1 small eggplant",
                    "originalName": "eggplant",
                    "amount": 1.0,
                    "unit": "small",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "4 oz. olive oil (for sautéing and garnishing)",
                    "originalName": "olive oil (for sautéing and garnishing)",
                    "amount": 4.0,
                    "unit": "oz",
                    "meta": [
                        "(for sautéing and garnishing)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11477,
                    "aisle": "Produce",
                    "image": "zucchini.jpg",
                    "consistency": "SOLID",
                    "name": "zucchini",
                    "nameClean": "zucchini",
                    "original": "1 zucchini",
                    "originalName": "zucchini",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11641,
                    "aisle": "Produce",
                    "image": "yellow-squash.jpg",
                    "consistency": "SOLID",
                    "name": "yellow squash",
                    "nameClean": "summer squash",
                    "original": "1 yellow squash",
                    "originalName": "yellow squash",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "yellow"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10411529,
                    "aisle": "Produce",
                    "image": "plum-tomatoes.png",
                    "consistency": "SOLID",
                    "name": "plum tomatoes",
                    "nameClean": "plum tomato",
                    "original": "2 ripe plum tomatoes",
                    "originalName": "ripe plum tomatoes",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "ripe"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2049,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "SOLID",
                    "name": "thyme",
                    "nameClean": "thyme",
                    "original": "1 tsp. thyme (chopped)",
                    "originalName": "thyme (chopped)",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [
                        "chopped",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "id": 657939,
            "title": "Ratatouille With Brie",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/YKQ5H3TL/ratatouille-with-brie",
            "image": "https://spoonacular.com/recipeImages/657939-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many Mediterranean recipes, so give Ratatouille With Brie a try. This main course has <b>490 calories</b>, <b>14g of protein</b>, and <b>45g of fat</b> per serving. This gluten free, lacto ovo vegetarian, and primal recipe serves 4 and costs <b>$1.97 per serving</b>. If you have brie log such as alouette, plum tomatoes, zucchini, and a few other ingredients on hand, you can make it. This recipe from Foodista has 63 fans. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. Overall, this recipe earns a <b>pretty good spoonacular score of 72%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/ratatouilles-ratatouille-thomas-kellers-confit-byaldi-498135\">Ratatouille’s Ratatouille (Thomas Keller’s Confit Byaldi)</a>, <a href=\"https://spoonacular.com/recipes/confit-byaldi-aka-ratatouilles-ratatouille-611946\">Confit Byaldi (aka Ratatouille’s Ratatouille)</a>, and <a href=\"https://spoonacular.com/recipes/brie-and-caramelized-shallots-puff-pastry-brie-tart-546740\">Brie and caramelized Shallots Puff Pastry Brie Tart</a>.",
            "cuisines": [
                "Mediterranean",
                "French",
                "European"
            ],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ],
            "occasions": [],
            "instructions": "Remove outer peel from eggplant and dice into  inch pieces\nHeat 1-2 oz. of olive oil in a heavy gauge skillet\nSaut the diced eggplant for 2-3 minutes then place on a towel to drain\nAfter draining place cooked eggplant into a small oval casserole dish\nPreheat oven to 375 F\nCarefully slice the zucchini , yellow squash , and tomatoes about  inch even slices\nSlice the Brie also into  inch slices (utilizing a cheese wire makes simplifies this)\nBegin placing sliced yellow squash , zucchini , sliced Brie and tomatoes in a shingled pattern working from the outside of the casserole towards the center\nWhen all vegetables and cheese are placed in the casserole, drizzle with the remaining olive oil and sprinkle with chopped thyme\nSeason with salt and pepper and bake in the oven for 10-15 minutes until bubbly",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Remove outer peel from eggplant and dice into  inch pieces",
                            "ingredients": [
                                {
                                    "id": 11209,
                                    "name": "eggplant",
                                    "localizedName": "eggplant",
                                    "image": "eggplant.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Heat 1-2 oz. of olive oil in a heavy gauge skillet",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Saut the diced eggplant for 2-3 minutes then place on a towel to drain",
                            "ingredients": [
                                {
                                    "id": 11209,
                                    "name": "eggplant",
                                    "localizedName": "eggplant",
                                    "image": "eggplant.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "After draining place cooked eggplant into a small oval casserole dish",
                            "ingredients": [
                                {
                                    "id": 11209,
                                    "name": "eggplant",
                                    "localizedName": "eggplant",
                                    "image": "eggplant.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404635,
                                    "name": "casserole dish",
                                    "localizedName": "casserole dish",
                                    "image": "casserole-dish.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Preheat oven to 375 F",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 375.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Carefully slice the zucchini , yellow squash , and tomatoes about  inch even slices",
                            "ingredients": [
                                {
                                    "id": 10211641,
                                    "name": "yellow squash",
                                    "localizedName": "yellow squash",
                                    "image": "yellow-squash.jpg"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11477,
                                    "name": "zucchini",
                                    "localizedName": "zucchini",
                                    "image": "zucchini.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Slice the Brie also into  inch slices (utilizing a cheese wire makes simplifies this)",
                            "ingredients": [
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 1006,
                                    "name": "brie",
                                    "localizedName": "brie",
                                    "image": "brie.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Begin placing sliced yellow squash , zucchini , sliced Brie and tomatoes in a shingled pattern working from the outside of the casserole towards the center",
                            "ingredients": [
                                {
                                    "id": 10211641,
                                    "name": "yellow squash",
                                    "localizedName": "yellow squash",
                                    "image": "yellow-squash.jpg"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11477,
                                    "name": "zucchini",
                                    "localizedName": "zucchini",
                                    "image": "zucchini.jpg"
                                },
                                {
                                    "id": 1006,
                                    "name": "brie",
                                    "localizedName": "brie",
                                    "image": "brie.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "When all vegetables and cheese are placed in the casserole, drizzle with the remaining olive oil and sprinkle with chopped thyme",
                            "ingredients": [
                                {
                                    "id": 11583,
                                    "name": "vegetable",
                                    "localizedName": "vegetable",
                                    "image": "mixed-vegetables.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 10,
                            "step": "Season with salt and pepper and bake in the oven for 10-15 minutes until bubbly",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "sourceName": null,
            "creditsText": null,
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/ratatouille-with-brie-657939"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 392,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 77,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 1158.05,
            "extendedIngredients": [
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "2 c.s sugar",
                    "originalName": "s sugar",
                    "amount": 2.0,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4513,
                    "aisle": null,
                    "image": null,
                    "consistency": "SOLID",
                    "name": "vegetable oil",
                    "nameClean": null,
                    "original": "1 c. vegetable oil",
                    "originalName": "vegetable oil",
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs",
                    "originalName": "eggs",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "3 c.s sifted flour",
                    "originalName": "s sifted flour",
                    "amount": 3.0,
                    "unit": "c",
                    "meta": [
                        "sifted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 709.764,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 14146,
                    "aisle": "Beverages",
                    "image": "soda-can.jpg",
                    "consistency": "SOLID",
                    "name": "diet soda",
                    "nameClean": "diet pop",
                    "original": "1 tsp. soda",
                    "originalName": "soda",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 tsp. salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "cinnamon",
                    "nameClean": "cinnamon",
                    "original": "1 tsp. cinnamon",
                    "originalName": "cinnamon",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla",
                    "nameClean": "vanilla extract",
                    "original": "2 tsp.s vanilla",
                    "originalName": "s vanilla",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9003,
                    "aisle": "Produce",
                    "image": "apple.jpg",
                    "consistency": "SOLID",
                    "name": "apples",
                    "nameClean": "apple",
                    "original": "3 c.s peeled, chopped apples",
                    "originalName": "s peeled, chopped apples",
                    "amount": 3.0,
                    "unit": "c",
                    "meta": [
                        "peeled",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 709.764,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 12104,
                    "aisle": "Produce",
                    "image": "coconut.jpg",
                    "consistency": "SOLID",
                    "name": "coconut",
                    "nameClean": "coconut",
                    "original": "2 c.s coconut",
                    "originalName": "s coconut",
                    "amount": 2.0,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9087,
                    "aisle": "Dried Fruits;Produce",
                    "image": "dates.jpg",
                    "consistency": "SOLID",
                    "name": "dates",
                    "nameClean": "dates",
                    "original": "1 c. chopped dates or coconut",
                    "originalName": "chopped dates or coconut",
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 12142,
                    "aisle": "Nuts;Baking",
                    "image": "pecans.jpg",
                    "consistency": "SOLID",
                    "name": "pecans",
                    "nameClean": "pecans",
                    "original": "1 c. chopped pecans",
                    "originalName": "chopped pecans",
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1 c. packed brown sugar",
                    "originalName": "packed brown sugar",
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [
                        "packed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1/2 c. butter",
                    "originalName": "butter",
                    "amount": 0.5,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1/2 c. milk",
                    "originalName": "milk",
                    "amount": 0.5,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 643426,
            "title": "Fresh Apple Cake With Caramel Sauce",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://www.foodista.com/recipe/DBJYD6L8/fresh-apple-cake-with-caramel-sauce",
            "image": "https://spoonacular.com/recipeImages/643426-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Fresh Apple Cake With Caramel Sauce might be a recipe you should try. For <b>$11.58 per serving</b>, this recipe <b>covers 77%</b> of your daily requirements of vitamins and minerals. One serving contains <b>8596 calories</b>, <b>79g of protein</b>, and <b>456g of fat</b>. This recipe serves 1. Only a few people made this recipe, and 9 would say it hit the spot. It works well as a pricey dessert. If you have coconut, cinnamon, brown sugar, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/fresh-apple-cake-with-caramel-sauce-418753\">Fresh Apple Cake with Caramel Sauce</a>, <a href=\"https://spoonacular.com/recipes/fresh-apple-cake-with-caramel-glaze-599212\">Fresh Apple Cake with Caramel Glaze</a>, and <a href=\"https://spoonacular.com/recipes/fresh-apple-cake-with-caramel-cream-cheese-frosting-1035056\">Fresh Apple Cake with Caramel Cream Cheese Frosting</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "Mix together sugar and oil; add eggs; beat well. blend in flour, soda and salt. Add cinnamon and vanilla. Stir in apples, coconut, dates and pecans. Batter will be thick. Spoon into a 9\" or 10\" tube pan which has been greased and floured. Bake at 325 degrees for 1 1/2 hours, or until toothpick inserted comes out clean. Remove from oven and immediately pour caramel sauce over and allow to soak in. Cool cake completely before removing from pan. For caramel sauce, heat ingredients together. Boil for 2 minutes.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Mix together sugar and oil; add eggs; beat well. blend in flour, soda and salt.",
                            "ingredients": [
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "pop",
                                    "localizedName": "soft drink",
                                    "image": ""
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Add cinnamon and vanilla. Stir in apples, coconut, dates and pecans. Batter will be thick. Spoon into a 9\" or 10\" tube pan which has been greased and floured.",
                            "ingredients": [
                                {
                                    "id": 2010,
                                    "name": "cinnamon",
                                    "localizedName": "cinnamon",
                                    "image": "cinnamon.jpg"
                                },
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 9003,
                                    "name": "apple",
                                    "localizedName": "apple",
                                    "image": "apple.jpg"
                                },
                                {
                                    "id": 12142,
                                    "name": "pecans",
                                    "localizedName": "pecans",
                                    "image": "pecans.jpg"
                                },
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Bake at 325 degrees for 1 1/2 hours, or until toothpick inserted comes out clean.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404644,
                                    "name": "toothpicks",
                                    "localizedName": "toothpicks",
                                    "image": "toothpicks.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 120,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Remove from oven and immediately pour caramel sauce over and allow to soak in. Cool cake completely before removing from pan. For caramel sauce, heat ingredients together. Boil for 2 minutes.",
                            "ingredients": [
                                {
                                    "id": 19364,
                                    "name": "caramel sauce",
                                    "localizedName": "caramel sauce",
                                    "image": "caramel-sauce.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 2,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/fresh-apple-cake-with-caramel-sauce-643426"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 7,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 53.34,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "2 tablespoons (30 g) melted butter",
                    "originalName": "tablespoons melted butter",
                    "amount": 30.0,
                    "unit": "g",
                    "meta": [
                        "melted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.058,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 30.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs, well beaten",
                    "originalName": "eggs, well beaten",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "well beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1/4 cup (30 g) flour",
                    "originalName": "1/4 cup flour",
                    "amount": 30.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.058,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 30.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2025,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-nutmeg.jpg",
                    "consistency": "SOLID",
                    "name": "nutmeg",
                    "nameClean": "nutmeg",
                    "original": "1 1/2 teaspoons (7 g) nutmeg",
                    "originalName": "1/2 teaspoons nutmeg",
                    "amount": 7.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.247,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 7.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 18334,
                    "aisle": "Refrigerated",
                    "image": "pie-crust.jpg",
                    "consistency": "SOLID",
                    "name": "pie crust",
                    "nameClean": "refrigerated pie crust",
                    "original": "1 prebaked pie crust",
                    "originalName": "prebaked pie crust",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9307,
                    "aisle": "Produce",
                    "image": "rhubarb.jpg",
                    "consistency": "SOLID",
                    "name": "rhubarb",
                    "nameClean": "rhubarb",
                    "original": "4 cups (around 600 g) raw rhubarb, chopped into bite-sized pieces (can be 1 1/2 1 1/2 cups (300 g) sugar",
                    "originalName": "cups (around 600 g) raw rhubarb, chopped into bite-sized pieces (can be 1 1/2 1 1/2 cups sugar",
                    "amount": 150.0,
                    "unit": "g",
                    "meta": [
                        "raw",
                        "chopped",
                        "(around 600 g)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "a dash of salt",
                    "originalName": "a of salt",
                    "amount": 1.0,
                    "unit": "dash",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        }
                    }
                }
            ],
            "id": 641410,
            "title": "Delicious Rhubarb Custard Pie",
            "readyInMinutes": 75,
            "servings": 8,
            "sourceUrl": "http://www.foodista.com/recipe/GFM7C4M4/delicious-rhubarb-custard-pie",
            "image": "https://spoonacular.com/recipeImages/641410-556x370.jpg",
            "imageType": "jpg",
            "summary": "This recipe makes 8 servings with <b>170 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b> each. For <b>53 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>1 hour and 15 minutes</b>. Only a few people made this recipe, and 7 would say it hit the spot. Head to the store and pick up butter, prebaked pie crust, rhubarb, and a few other things to make it today. <b>Mother's Day</b> will be even more special with this recipe. It is a good option if you're following a <b>vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 20%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/coconut-custard-pie-910123\">Coconut Custard Pie</a>, <a href=\"https://spoonacular.com/recipes/rhubarb-custard-pie-601128\">Rhubarb Custard Pie</a>, and <a href=\"https://spoonacular.com/recipes/rhubarb-custard-pie-698186\">Rhubarb Custard Pie</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [
                "spring",
                "mother's day"
            ],
            "instructions": "<ol><li>Combine all the ingredients except the eggs and butter in a large bowl.</li><li>Put the mixture into a pre-baked pie crust.</li><li>Pour the beaten eggs over the rhubarb mixture.</li><li>Drizzle the melted butter over the top of the pie. Make sure all the rhubarb is covered with the eggs/butter.</li><li>Bake at 400 F (220 C) for 50 minutes. Since the crust has already been baked, you might want to tent some aluminum foil around the edges of the pie so that the exposed part of the crust doesn't get too brown.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine all the ingredients except the eggs and butter in a large bowl.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Put the mixture into a pre-baked pie crust.",
                            "ingredients": [
                                {
                                    "id": 18334,
                                    "name": "pie crust",
                                    "localizedName": "pie crust",
                                    "image": "pie-crust.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Pour the beaten eggs over the rhubarb mixture.",
                            "ingredients": [
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Drizzle the melted butter over the top of the pie. Make sure all the rhubarb is covered with the eggs/butter.",
                            "ingredients": [
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Bake at 400 F (220 C) for 50 minutes. Since the crust has already been baked, you might want to tent some aluminum foil around the edges of the pie so that the exposed part of the crust doesn't get too brown.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 400.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ],
                            "length": {
                                "number": 50,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/delicious-rhubarb-custard-pie-641410"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 1,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 803,
            "healthScore": 13,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 22.99,
            "extendedIngredients": [
                {
                    "id": 11124,
                    "aisle": "Produce",
                    "image": "sliced-carrot.png",
                    "consistency": "SOLID",
                    "name": "carrots",
                    "nameClean": "carrot",
                    "original": "2-1/4 cup shredded carrots",
                    "originalName": "shredded carrots",
                    "amount": 2.0,
                    "unit": "cup",
                    "meta": [
                        "shredded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "cinnamon",
                    "nameClean": "cinnamon",
                    "original": "1 tsp cinnamon",
                    "originalName": "cinnamon",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 12104,
                    "aisle": "Produce",
                    "image": "coconut.jpg",
                    "consistency": "SOLID",
                    "name": "coconut",
                    "nameClean": "coconut",
                    "original": "2/3 cup coconut (shredded or flaked)",
                    "originalName": "coconut (shredded or flaked)",
                    "amount": 0.6666667,
                    "unit": "cup",
                    "meta": [
                        "shredded",
                        "flaked",
                        "( or )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.667,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 157.725,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2021,
                    "aisle": "Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ground ginger",
                    "nameClean": "ginger powder",
                    "original": "1/4 tsp ground ginger",
                    "originalName": "ground ginger",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9421,
                    "aisle": "Dried Fruits;Produce",
                    "image": "dates.jpg",
                    "consistency": "SOLID",
                    "name": "medjool dates",
                    "nameClean": "medjool dates",
                    "original": "3/4 cup medjool dates (about 10 large dates)",
                    "originalName": "medjool dates (about 10 large dates)",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [
                        "( 10 large dates)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 12036,
                    "aisle": "Savory Snacks",
                    "image": "sunflower-seeds.jpg",
                    "consistency": "SOLID",
                    "name": "sunflower seeds",
                    "nameClean": "sunflower seeds",
                    "original": "1/2 cup sunflower seeds",
                    "originalName": "sunflower seeds",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 12155,
                    "aisle": "Nuts;Baking",
                    "image": "walnuts.jpg",
                    "consistency": "SOLID",
                    "name": "walnuts",
                    "nameClean": "walnuts",
                    "original": "1/2 cup walnuts",
                    "originalName": "walnuts",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 637187,
            "title": "Carrot Cake Snack Bites",
            "readyInMinutes": 45,
            "servings": 20,
            "sourceUrl": "http://www.foodista.com/recipe/Z4DBX47V/carrot-cake-snack-bites",
            "image": "https://spoonacular.com/recipeImages/637187-556x370.jpg",
            "imageType": "jpg",
            "summary": "For <b>23 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. Watching your figure? This caveman, gluten free, primal, and whole 30 recipe has <b>69 calories</b>, <b>1g of protein</b>, and <b>5g of fat</b> per serving. Head to the store and pick up carrots, ground ginger, sunflower seeds, and a few other things to make it today. 803 people have made this recipe and would make it again. It can be enjoyed any time, but it is especially good for <b>Easter</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/carrot-snack-cake-119290\">Carrot Snack Cake</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-banana-snack-cake-531247\">Carrot and Banana Snack Cake</a>, and <a href=\"https://spoonacular.com/recipes/caramel-and-carrot-snack-cake-171720\">Caramel and Carrot Snack Cake</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ],
            "occasions": [
                "easter"
            ],
            "instructions": "<ol><li>In a food processor, blend all the snack bite ingredients together.</li><li>Scoop out tablespoons full of the batter and roll it into a ball.</li><li>Roll the balls in sesame seeds, coconut, or chopped almonds for additional crunch, if desired.</li><li>Store refrigerated.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a food processor, blend all the snack bite ingredients together.Scoop out tablespoons full of the batter and roll it into a ball.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Roll the balls in sesame seeds, coconut, or chopped almonds for additional crunch, if desired.Store refrigerated.",
                            "ingredients": [
                                {
                                    "id": 12023,
                                    "name": "sesame seeds",
                                    "localizedName": "sesame seeds",
                                    "image": "sesame-seeds.png"
                                },
                                {
                                    "id": 12061,
                                    "name": "almonds",
                                    "localizedName": "almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/carrot-cake-snack-bites-637187"
        }
    ]
}

const Recipes = () => {
    const [random, setRandom] = useState([])
    const [isBusy, setBusy] = useState(true)

    useEffect(() => {
        const getRandom = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=635c0fdcac2d4ad19cad2a7a33360ff2&number=5", {
                method: "GET",
                headers: headersList
            });

            const json1 = await response.json()
            setRandom(json1.recipes)
        }
        getRandom()
    },[])

    return (
        <div className="px-24 pt-8 ">
            <h1 className="my-2 font-bold text-2xl" >Today's Recipe</h1>
            <div className="flex flex-wrap justify-between" >
            {
                random.map((recipe)=>{
                    return(
                    <>
                        <a key={random.title} className="w-[250px] bg-[#03B473] text-white drop-shadow-md hover:drop-shadow-xl my-4 border-[.7px] border-solid flex-wrap border-[#e0e0e0] rounded-xl" href="#"
                        >
                            <div className="h-[250px] m-0 rounded-t-lg m-0.5"
                                style={{
                                    backgroundImage: `url("${recipe.image}")`,

                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}
                            ></div>
                            <h2 className="w-full text-center my-2 px-2" >{recipe.title}</h2>
                        </a>
                    </>
                    )
                })
            }
            </div>
        </div>
    )

};
export default Recipes;