import { RestaurantData, TeamMember } from './types';

export const restaurantData: RestaurantData = {
  "Peelamedu": [
    {
      name: "Hotel Jump In and Out", rating: "4.1 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Chicken Burger & Fried Rice",
      address: "Peelamedu Main road, Coimbatore, Tamilnadu 641004",
      menu: {
        Lunch: [["Chicken Fried Rice", 140], ["Veg Fried Rice", 120]],
        Dinner: [["Chicken Burger", 150], ["Chicken Noodles", 160]]
      }
    },
    {
      name: "Kovai Biriyani Hotel", rating: "4.0 / 5", hours: "11:00 AM – 10.30 PM",
      special: "Chicken Biriyani",
      address: "Peelamedu Bus Stop Area, Coimbatore, Tamilnadu 641004",
      menu: {
        Lunch: [["Chicken Biriyani", 150], ["Mutton Biriyani", 220]],
        Dinner: [["Parotta", 15], ["Chicken curry", 160]]
      }
    },
    {
      name: "Hotel Sri Krishna Vilas", rating: "3.8 / 5", address: "Near Peelamedu Signal, Coimbatore",
      hours: "7:00 AM – 10:00 PM", special: "South Indian Tiffin",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40], ["Pongal", 45]],
        Lunch: [["Meals", 90]],
        Dinner: [["Chapathi", 40], ["Parotta", 15]]
      }
    },
    {
      name: "Hotel Sree Annapoorna", rating: "4.5 / 5", address: "Avinashi Road, Peelamedu, Coimbatore",
      hours: "6:30 AM – 10:30 PM", special: "South Indian Full Meals",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50], ["Poori", 45]],
        Lunch: [["Full Meals", 120], ["Variety Rice", 80]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    },
    {
      name: "Hotel Arya Bhavan", rating: "4.0 / 5", address: "Peelamedu Inner Road, Coimbatore",
      hours: "7:00 AM – 10:30 PM", special: "Veg Meals",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Poori", 45]],
        Lunch: [["Veg Meals", 110], ["Curd Rice", 70]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    },
    {
      name: "Hotel Geetha Canteen", rating: "4.1 / 5", address: "Near Peelamedu Bus Stop, Coimbatore",
      hours: "7:00 AM – 4:00 PM", special: "Veg Meals",
      menu: {
        Breakfast: [["Idli", 25], ["Dosa", 35]],
        Lunch: [["Veg Meals", 80], ["Curd Rice", 50]]
      }
    },
    {
      name: "Hotel Junior Kuppanna", rating: "4.4 / 5", address: "Avinashi Road, Peelamedu, Coimbatore",
      hours: "11:30 AM – 11:00 PM", special: "Mutton Biriyani",
      menu: {
        Lunch: [["Chicken Biriyani", 240], ["Mutton Biriyani", 340]],
        Dinner: [["Parotta", 20], ["Pepper Chicken", 260], ["Chicken Chukka", 240]]
      }
    },
    {
      name: "Hotel Sri Saravana Bhavan", rating: "4.2 / 5", address: "Peelamedu Main Road, Coimbatore",
      hours: "6:30 AM – 10:30 PM", special: "South Indian Full Meals",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50], ["Poori", 45]],
        Lunch: [["Full Meals", 120], ["Variety Rice", 80]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    },
    {
      name: "Hotel Sri Lakshmi Mess", rating: "4.3 / 5", address: "Peelamedu Market Area, Coimbatore",
      hours: "7:00 AM – 3:00 PM", special: "Veg Meals",
      menu: { Lunch: [["Veg Meals", 80], ["Sambar Rice", 70]] }
    },
    {
      name: "Hotel Anandas", rating: "4.3 / 5", address: "Peelamedu Signal Area, Coimbatore",
      hours: "6:30 AM – 10:30 PM", special: "South Indian Meals",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50]],
        Lunch: [["Full Meals", 120], ["Variety Rice", 80]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    }
  ],
  "Singanallur": [
    {
      name: "Hotel Kandha", rating: "3.8 / 5", hours: "10:00 AM – 11:00 PM",
      special: "Chicken Biriyani", address: "Trichy Road, Singanallur, Coimbatore",
      menu: {
        Breakfast: [["Idli", 35], ["Dosa", 45], ["Pongal", 50]],
        Lunch: [["Chicken Biriyani", 160], ["Veg Meals", 90]],
        Dinner: [["Parotta", 18], ["Chicken 65", 130]]
      }
    },
    {
      name: "Hotel Arya Bhavan", rating: "4.0 / 5", hours: "6:30 AM – 10:00 PM",
      special: "Mini Tiffin", address: "Trichy Road, Singanallur, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40], ["Pongal", 45]],
        Lunch: [["Veg Meals", 90], ["Curd Rice", 60]],
        Dinner: [["Chapathi", 40], ["Parotta", 15]]
      }
    },
    {
      name: "Hotel Geetha Canteen", rating: "4.3 / 5", hours: "7:00 AM – 10:00 PM",
      special: "South Indian Tiffin", address: "Singanallur, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40], ["Vada", 30]],
        Lunch: [["Veg Meals", 80], ["Curd Rice", 60]],
        Dinner: [["Chapathi", 40], ["Parotta", 15]]
      }
    },
    {
      name: "Hotel Junior Kuppanna", rating: "4.4 / 5", hours: "11:00 AM – 10:30 PM",
      special: "Mutton Biriyani", address: "Trichy Road, Singanallur, Coimbatore",
      menu: {
        Lunch: [["Chicken Biriyani", 190], ["Mutton Biriyani", 240]],
        Dinner: [["Parotta", 20], ["Chicken Curry", 150]]
      }
    },
    {
      name: "Hotel Sri Shanmuga Vilas", rating: "3.9 / 5", hours: "7:00 AM – 9:30 PM",
      special: "Ghee Roast Dosa", address: "Singanallur Main Road, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 50]],
        Lunch: [["Veg Meals", 90], ["Tomato Rice", 70]],
        Dinner: [["Parotta", 15], ["Chapathi", 40]]
      }
    },
    {
      name: "Hotel Sri Lakshmi Mess", rating: "3.7 / 5", hours: "7:30 AM – 3:30 PM",
      special: "Plain Veg Meals", address: "Singanallur Inner Street, Coimbatore",
      menu: {
        Breakfast: [["Idli", 25], ["Dosa", 35]],
        Lunch: [["Veg Meals", 75], ["Curd Rice", 45]]
      }
    },
    {
      name: "Hotel Anandas", rating: "4.5 / 5", hours: "6:30 AM – 10:30 PM",
      special: "Masala Dosa", address: "Trichy Road, Singanallur, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Masala Dosa", 65]],
        Lunch: [["Veg Meals", 120], ["Variety Rice", 85]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    },
    {
      name: "Hotel Velmurugan Mess", rating: "3.8 / 5", hours: "8:00 AM – 4:00 PM",
      special: "Country Veg Meals", address: "Singanallur Inner Road, Coimbatore",
      menu: {
        Breakfast: [["Idli", 25], ["Dosa", 35]],
        Lunch: [["Veg Meals", 80], ["Rasam Rice", 60]]
      }
    }
  ],
  "Kovaipudur": [
    {
      name: "Hotel Annapoorna Mess", rating: "3.9 / 5", hours: "7:00 AM – 3:00 PM",
      special: "Veg Meals", address: "V-Block, Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 80], ["Curd Rice", 60]]
      }
    },
    {
      name: "Hotel Sri Lakshmi Mess", rating: "3.9 / 5", hours: "7:00 AM – 3:00 PM",
      special: "Country Style Veg Meals", address: "V-Block, Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 85], ["Rasam Rice", 60]]
      }
    },
    {
      name: "Hotel Aaryas", rating: "3.7 / 5", hours: "7:00 AM – 10:00 PM",
      special: "South Indian Tiffin", address: "Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50]],
        Lunch: [["Veg Meals", 95], ["Chapathi", 45]],
        Dinner: [["Parotta", 18], ["Fried Rice", 100]]
      }
    },
    {
      name: "Hotel Sri Krishna Vilas", rating: "4.0 / 5", hours: "7:00 AM – 10:00 PM",
      special: "Ghee Roast Dosa", address: "Near Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 35], ["Ghee Roast", 70]],
        Lunch: [["Veg Meals", 100], ["Tomato Rice", 75]],
        Dinner: [["Chapathi", 45], ["Parotta", 18]]
      }
    },
    {
      name: "Hotel Raja Mess", rating: "4.3 / 5", hours: "7:00 AM – 3:30 PM",
      special: "Home-style Veg Meals", address: "Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 90], ["Curd Rice", 60]]
      }
    },
    {
      name: "Hotel Ganapathy Vilas", rating: "3.8 / 5", hours: "7:00 AM – 10:00 PM",
      special: "Vegetarian Tiffin Meals", address: "Kovaipudur Main Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45]],
        Lunch: [["Veg Meals", 90], ["Sambar Rice", 70]],
        Dinner: [["Parotta", 18], ["Chapathi", 40]]
      }
    },
    {
      name: "Hotel Sree Velmurugan", rating: "3.9 / 5", hours: "7:00 AM – 10:00 PM",
      special: "South Indian Tiffin", address: "Kovaipudur Inner Road, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Pongal", 45]],
        Lunch: [["Veg Meals", 95], ["Tomato Rice", 70]],
        Dinner: [["Chapathi", 40], ["Parotta", 15]]
      }
    },
    {
      name: "Hotel Kongu Mess", rating: "3.6 / 5", hours: "7:00 AM – 11:00 PM",
      special: "Kongu Veg Meals", address: "Opp KVB Bank, Chinniyampalayam, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 90], ["Curd Rice", 60]],
        Dinner: [["Parotta", 18], ["Chapathi", 40]]
      }
    },
    {
      name: "Hotel Sri Murugan Mess", rating: "4.7 / 5", hours: "7:00 AM – 3:00 PM",
      special: "Traditional Veg Meals", address: "Ramaswamy Nagar Rd, Perur Chettipalayam",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 85], ["Rasam Rice", 60]]
      }
    },
    {
      name: "Hotel Udhayam Mess", rating: "4.0 / 5", hours: "7:00 AM – 10:00 PM",
      special: "Mixed Veg Meals", address: "Opposite Petrol Bunk, Kamarajar Rd, Coimbatore",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40]],
        Lunch: [["Veg Meals", 90], ["Tomato Rice", 70]],
        Dinner: [["Parotta", 18], ["Chapathi", 40]]
      }
    }
  ],
  "Race Course": [
    {
      name: "Heavenly Knights", rating: "4.7 / 5", hours: "6:00 PM – 5:45 AM",
      special: "Late Night Biryani & Chinese", address: "2B/1, Thomas Park, Race Course, Coimbatore",
      menu: {
        Dinner: [
          ["Veg Soup", 130], ["Non-Veg Soup", 140], ["Veg & Non-Veg Starters", "180 – 220"],
          ["Fried Rice Varieties", "160 – 210"], ["Noodles Varieties", "170 – 220"],
          ["Plain Biriyani", 150], ["Egg Biriyani", 170], ["Chicken Biriyani", 200], ["Veg & Non-Veg Gravy", "160 – 200"]
        ]
      }
    },
    {
      name: "Chill Pannu Mappi", rating: "4.5 / 5", hours: "05:00 PM – 10:00 PM",
      special: "Snacks & Fast Food", address: "Reheja Apartments, near Smart Bazaar, Race Course",
      menu: {
        Dinner: [
          ["French Fries", "50 – 80"], ["Nuggets", "50 – 70"], ["Burger", "50 – 110"],
          ["Hot Dogs", "50 – 90"], ["Crispy Fried Chicken", "60 – 90"], ["Momos", "80 – 100"]
        ]
      }
    },
    {
      name: "Welcome Cafe Kovai", rating: "4.5 / 5", hours: "07:00 AM – 11:00 PM",
      special: "South Indian & Snacks", address: "23, W Club Rd, Race Course, Coimbatore",
      menu: {
        Lunch: [
          ["Hunan Prawns", 895], ["Chunky Lamb Bolognaise", 795], ["Pallipalayam Chicken Biryani", 775],
          ["Murgh Sarson Tikka", 795], ["Mahi Tawa Fry", 675], ["Ritu Ki Subzee", 595]
        ],
        Dinner: [
          ["Elaneer Payasam", 385], ["Gulab Jamun", 385], ["Kashi Halwa", 385]
        ]
      }
    },
    {
      name: "Grand Cafe", rating: "4.4 / 5", hours: "11:15 AM – 3:15 PM",
      special: "Premium Multicuisine Dining", address: "No 52, State Bank Street, Race Course, Coimbatore",
      menu: {
        Lunch: [
          ["Special Meals", 200], ["Paruppu Vadai", 15], ["Sambar", 35], ["Rasam", 35], ["Poriyal", 40], ["Kootu", 40], ["Appalam", 10]
        ],
        Dinner: [
          ["Chilli Chicken Dry", 120], ["Chicken Manchurian", 140], ["Paneer Butter Masala", 100], ["Butter Chicken", 140], ["Chicken Fried Rice", 120], ["Wheat Parotta", 20], ["Mushroom Kothu Parotta", 70]
        ]
      }
    },
    {
      name: "Valarmathi Mess", rating: "4.3 / 5", hours: "12:00 PM – 10:30 PM",
      special: "Non-Veg Starters & Biryani", address: "CSI Compound, 207/A, Race Course, Coimbatore",
      menu: {
        Lunch: [
          ["Mutton Starters", "35 – 290"], ["Chicken Starters", "195 – 210"], ["Mutton Biriyani", 270], ["Chicken Biriyani", 220], ["Egg Biriyani", 190], ["Plain Biriyani", 170]
        ],
        Dinner: [["Omelette", 20]]
      }
    },
    {
      name: "Ranjith Canteen", rating: "4.3 / 5", hours: "07:00 AM – 10:00 PM",
      special: "Dosa & Budget Meals", address: "Gopalapuram, Coimbatore",
      menu: {
        Breakfast: [["Roast Dosa", 90], ["Ghee Podi Roast", 120], ["Kal Dosai", 65]],
        Lunch: [["Veg Biryani", 60], ["Parotta with Kurma", "50"], ["Egg Kothu Parotta", "90"], ["Veechu Parotta", "100"]]
      }
    },
    {
      name: "Geetha Cafe", rating: "4.2 / 5", hours: "08:00 AM – 10:30 PM",
      special: "Veg Meals & Snacks", address: "Geetha Hall Road, Race Course, Coimbatore",
      menu: {
        Lunch: [["Veg Biryani Meal", 147], ["Special Kolambu Meal", 132]],
        Dinner: [["Sevai (Plain / Lemon)", 74], ["Kichadi", 74], ["Gobi 65", 76], ["Chilli Paneer", 91], ["Mushroom 65", 93], ["Masala Roast Dosa", "73 – 78"], ["Idly", 30]]
      }
    },
    {
      name: "Boche Food Express", rating: "4.2 / 5", hours: "12:00 AM – 11:45 PM",
      special: "Biryani, Rice & Noodles", address: "SBI Road, Race Course, Coimbatore",
      menu: {
        Lunch: [["Chicken Noodles", 192], ["Egg Fried Rice", 168], ["Veg Fried Rice", 144]],
        Dinner: [["Plain Biriyani (Rice Only)", 192]]
      }
    },
    {
      name: "RHR", rating: "4.1 / 5", hours: "05:15 AM – 11:00 PM",
      special: "South Indian Breakfast & Meals", address: "State Bank Road, Race Course, Coimbatore",
      menu: {
        Breakfast: [
          ["Kesari", 55], ["Idly (2 pcs)", 40], ["Sambar Idly", 50], ["Vadai", 26], ["Sambar Vadai", 34], ["Pongal", 67], ["Poori Masala", 80], ["Rava Kitchadi", 65], ["Wheat Uppuma", 75], ["Roast / Uthappam", "90 – 125"]
        ]
      }
    },
    {
      name: "Sri Sai Cafe", rating: "4.1 / 5", hours: "07:00 AM – 09:00 PM",
      special: "Pure Veg Meals & Tiffin", address: "64A, North Huzur Road, Race Course, Coimbatore",
      menu: {
        Breakfast: [["Uthappam", "33 – 55"], ["Sevai", "33 – 44"]],
        Lunch: [
          ["Full Meals", 88], ["Variety Rice", 28], ["Full Banana Leaf Meal", 100], ["Sambar / Rasam Rice + Vadai", 55], ["Mushroom Biriyani", 65], ["Veg Fried Rice / Noodles", 80], ["Paneer / Mushroom Fried Rice", 90]
        ],
        Dinner: [
          ["Lemon Sevai", 50], ["Podi / Pepper Sevai", 60], ["Butter Onion Sevai", 70], ["Meals + Chilly Gobi", 194], ["Meals + Vadai", 125]
        ]
      }
    }
  ],
  "Gandhipuram": [
    {
      name: "Aasif & Brothers Biriyani", rating: "4.4 / 5", hours: "07:00 AM - 04:00 PM",
      special: "Bucket Biriyani & Starters", address: "Ashish Plaza, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [
          ["Chicken Biriyani", 230], ["Mutton Biriyani", 300], ["Bucket Chicken Biriyani (Medium)", 1100], ["Bucket Chicken Biriyani (Large)", 1900], ["Bucket Mutton Biriyani (Medium)", 1500], ["Bucket Mutton Biriyani (Large)", 2900], ["Chicken Starters", "120 -220"], ["Mutton Starters", "180 - 320"], ["Veg Starters", "80 - 150"], ["Veg Fried Rice", "90 - 140"], ["Egg Fried Rice", "110 - 160"]
        ],
        Lunch: [
          ["Chicken Fried Rice", "140 - 200"], ["Veg Noodles", "90 - 140"], ["Egg Noodles", "110 - 160"], ["Chicken Noodles", "140 - 200"], ["Veg Gravies", "90 - 150"], ["Chicken Gravies", "150 - 220"], ["Mutton Gravies", "220 - 320"]
        ]
      }
    },
    {
      name: "Cheap and Best", rating: "4.7 / 5", hours: "06:00 AM - 11:30 PM",
      special: "Breakfast, Lunch & Dinner Meals", address: "Cross Cut Road, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [["Idly", 20], ["Vadai", 20], ["Pongal", 60], ["Poori", 25], ["Dosa", 40]],
        Lunch: [["South Indian Meals", 150], ["Veg Meals", 120], ["Mushroom Biriyani", 175]],
        Dinner: [["Chapathi", 35], ["Veg Omelette", 75], ["Fried Rice / Noodles", "80 - 150"]]
      }
    },
    {
      name: "Velan Express Eats", rating: "4.2 / 5", hours: "05:00 AM - 10:30 PM",
      special: "Tiffin, Snacks & Desserts", address: "8th Cross Cut Road, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [["Idly", 30], ["Dosa", "70 - 100"], ["Roast Varieties", "70 - 100"]],
        Lunch: [["Variety Rice", "50 - 65"], ["Veg Starters", "80 - 120"], ["Snacks & Chaat", "40 - 90"]],
        Dinner: [["Special Falooda", 50], ["Ice Cream", "80 - 120"], ["Milkshakes", "80 - 120"]]
      }
    },
    {
      name: "Shree Annapoorna", rating: "4.5 / 5", hours: "06:30 AM - 10:30 PM",
      special: "Pure Veg South Indian Restaurant", address: "14, Crosscut Road, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [["Idly (2 pcs)", 40], ["Vadai", 30], ["Pongal", 80], ["Plain Dosa", 70], ["Masala Dosa", 90], ["Poori Masala", 95], ["Coffee", 35], ["Tea", 25]],
        Lunch: [["South Indian Full Meals", 160], ["Mini Meals", 120], ["Sambar Rice", 90], ["Rasam Rice", 90], ["Curd Rice", 80], ["Variety Rice", "90 -110"]],
        Dinner: [["Plain Dosa", 70], ["Masala Dosa", 90], ["Onion Uttappam", 95], ["Chapathi (2 pcs)", 80], ["Vegetable Kurma", 90], ["Coffee / Tea", "25 - 35"]]
      }
    },
    {
      name: "Geetha Canteen", rating: "4.3 / 5", hours: "07:00 AM - 10:30 PM",
      special: "Soft idlis with strong sambar", address: "Ram Nagar, Coimbatore",
      menu: {
        Breakfast: [["Idly", 30], ["Vadai", 20], ["Pongal", 60], ["Poori Masala", 60], ["Chapathi (2 pcs)", 50], ["Roast Varieties", "70 - 110"], ["Uthappam Varieties", "70 - 110"]],
        Lunch: [["Meals", 120], ["Variety Rice", "50 - 70"], ["Veg Fried Rice", 90], ["Veg Noodles", 90], ["Rose Milk", 40]],
        Dinner: [["Idly", 30], ["Roast / Uthappam", "70 -110"], ["Parotta", 30], ["Veg Fried Rice", 90], ["Veg Noodles", 90]]
      }
    },
    {
      name: "Biriyani in Bucket", rating: "4.7 / 5", hours: "11:30 AM - 11:00 PM",
      special: "Biriyani Specialist", address: "Arab Towers, Tatabad, Gandhipuram",
      menu: {
        Lunch: [
          ["Chicken Bucket (Serves 1)", 350], ["Chicken Bucket (Serves 2)", 620], ["Chicken Bucket (Serves 4)", 1300], ["Chicken Bucket (Serves 6)", 2300], ["Mutton Bucket (Serves 1)", 420], ["Mutton Bucket (Serves 2)", 820], ["Mutton Bucket (Serves 4)", 1600], ["Mutton Bucket (Serves 8)", 3000]
        ],
        Dinner: [
          ["Exclusive Chicken Combos", "200 -350"], ["Exclusive Mutton Combos", "250 - 400"], ["Signature Starters", "180 - 300"], ["Rice Kheer", 90], ["Elaneer Payasam", 120]
        ]
      }
    },
    {
      name: "C2 Chicken - Mega Food Court", rating: "4.8 / 5", hours: "2.30 PM - 10:00 PM",
      special: "Fast Food & Biriyani", address: "Ram Nagar, Gandhipuram, Coimbatore",
      menu: {
        Dinner: [
          ["Chicken Popcorn / Wings / Strips", "39 – 139"], ["Burgers", "80 - 120"], ["Sandwiches", "70 - 90"], ["Momos", "90 - 120"], ["Waffles", "90 - 150"], ["Milkshakes", "90 - 140"], ["Cool Beverages", "30 - 80"]
        ]
      }
    },
    {
      name: "KIN FOODS", rating: "4.4 / 5", hours: "07:00 PM – 11:00 PM",
      special: "Late Night Tiffin", address: "Ram Nagar, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [["Idly", 20], ["Dosa", 40], ["Podi Dosa", 50], ["Special Dosa", 70], ["Sevai", 40]],
        Lunch: [["Chapathi", 30], ["Parotta", 25]],
        Dinner: [["Omelette", 30], ["Kalaki", 25], ["Half Boil", 20], ["Valazhai Elai Meals", 120]]
      }
    },
    {
      name: "Madras Kappi & Eats", rating: "3.9 / 5", hours: "06:00 AM – 10:00 PM",
      special: "Coffee & Quick Bites", address: "Cross Cut Road, Gandhipuram, Coimbatore",
      menu: {
        Breakfast: [["Dosa Varieties", 59], ["Idly / Mini Idly", 30], ["Chola Poori", 60], ["Parotta / Chapathi", 40]],
        Lunch: [["Variety Rice", "50 -70"]],
        Dinner: [
          ["Chilli Paneer / Gobi / Mushroom", 90], ["French Fries", 70], ["Brownie Sizzler", 120], ["Brownie with Ice Cream", 100], ["Sandwich Varieties", 80], ["Sweet Corn", 40], ["Norukkal Varieties", "40 - 50"], ["Settu Varieties", "40 - 70"], ["Tawa Butter Bun", "40 -70"], ["Fresh Juice", "50 - 90"], ["Milkshakes", "80 - 120"]
        ]
      }
    }
  ],
  "Saibaba Colony": [
    {
      name: "Ramesh Mess", rating: "4.4 / 5", hours: "07:30 AM – 10:30 PM",
      special: "Quality Service & Grain Varieties", address: "Alagesan Road, Saibaba Colony, Coimbatore",
      menu: {
        Breakfast: [
          ["Idli (1 Set)", 15], ["Urad Dal Vada", 10], ["Poori (1 Set)", 25], ["Chapati (1 Set)", 30], ["Parotta (1 Set)", 40], ["Wheat Parotta (1 Set)", 30], ["Pongal", 25], ["Rava Kichadi", 25], ["Aval Kichadi", 25], ["Sama Pongal", 25], ["Thinai Pongal", 25], ["Varagu Pongal", 25], ["Kambu Dosa", 25], ["Ragi Dosa", 25], ["Cholam Dosa", 25], ["Wheat Dosa", 25], ["Navadhaniyam Dosa", 25], ["Kuthiraivali Dosa", 25], ["Podi Dosa", 20], ["Onion Roast", 30]
        ],
        Lunch: [["Variety Rice", 100]],
        Dinner: [["Chapathi", 45], ["Dosa", 50], ["Parotta", 15]]
      }
    },
    {
      name: "Deepan Kadai", rating: "4.4 / 5", hours: "11:00 AM – 02:00 AM",
      special: "Mushroom Fry & Biriyani", address: "Nesavaalar Colony, Saibaba Colony, Coimbatore",
      menu: {
        Lunch: [["Mutton Biriyani", 250], ["chicken Biriyani", 200], ["Gilma Biriyani", 220], ["egg Biriyani", 150], ["Kudal Curry", 195], ["Mutton Chukka", 195], ["Chicken Chukka", 150], ["Chicken manjurian", 150]],
        Dinner: [["Veg Kothu Paratha", 75], ["Egg Lappa", 75], ["Chilli Paratha", 120], ["Egg Veechu Paratha", 60], ["Chicken Fried Rice", 150], ["Chicken Noodles", 150], ["Egg Noodles", 120], ["Egg Fried Rice", 120], ["Veg Fried Rice", 90], ["Veg Noodles", 90], ["Dosa", 35], ["Chicken Dosa", 125], ["Plain Chapati", 35], ["Idli", 20], ["Podi Idli", 45]]
      }
    },
    {
      name: "Paarvai's Hub", rating: "4.7 / 5", hours: "02:00 PM – 10:00 PM",
      special: "Variety Sets, Norukkalz, Sandwiches", address: "Raja Annamalai Rd, Saibaba Colony, Coimbatore",
      menu: {
        Dinner: [
          ["Onion Set", 30], ["Tomato Set", 30], ["Cucumber Set", 30], ["Garlic Set", 40], ["Mango Set", 40], ["Curd Set", 40], ["Groundnut Set", 40], ["Cheese Set", 50], ["Combo Set", 50], ["Plain Norukkal", 40], ["Mango Norukkal", 50], ["Garlic Norukkal", 50], ["Curd Norukkal", 50], ["Cheese Norukkal", 50], ["Plain Sandwich", 45], ["Garlic Sandwich", 55], ["Mango Sandwich", 55], ["Chocolate Sandwich", 60], ["Choco Banana Sandwich", 60]
        ]
      }
    },
    {
      name: "The High Joint", rating: "4.4 / 5", hours: "12:30 PM – 10:00 PM",
      special: "Burgers, Tacos, Burritos, Bubble Tea", address: "VKK Menon Street, Saibaba Colony, Coimbatore",
      menu: {
        Lunch: [["Chicken Burger", "260 - 425"], ["Beef Burger", "285 - 360"], ["Tacos", "270 - 310"], ["Burritos", "270 -310"]],
        Dinner: [["Chicken Burger", "260 - 425"], ["Beef Burger", "285 - 360"], ["Chicken Wings", "255 - 295"], ["Tacos", "270 - 310"], ["Burritos", "270 - 310"], ["Mojitos", "99 - 120"], ["Thai Milk Bubble Tea", 180], ["Milo Lava Bubble Tea", 200]]
      }
    },
    {
      name: "Manna Mess", rating: "4.3 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Authentic Non-Veg Meals & Biryanis", address: "NSR Road, Saibaba Colony, Coimbatore",
      menu: {
        Lunch: [["Chicken Biryani", 310], ["Mutton Biryani", 400], ["Egg Biryani", 260], ["Non-Veg Meals", 250], ["Chicken Curry Dosa", 290], ["Mutton Curry Dosa", 320]],
        Dinner: [["Chicken Biryani", 310], ["Mutton Biryani", 400], ["Egg Biryani", 260], ["Prawn Thokku", 370], ["Vanjiram Fry", 390], ["Crab Fry", 360], ["Mutton Sukka", 390], ["Nattu Kozhi Varuval", 300], ["Chicken Curry Dosa", 290], ["Mutton Curry Dosa", 320], ["Non-Veg Meals", 250], ["Ilaneer Payasam", 100]]
      }
    },
    {
      name: "Nallaae Mess", rating: "4.2 / 5", hours: "12:00 PM – 10:30 PM",
      special: "Non-Veg Meals & Biryanis", address: "SRP Nagar, Saibaba Colony, Coimbatore",
      menu: {
        Lunch: [["Schezwan Veg Noodles", 200], ["Egg Noodles", 220], ["Chicken Noodles", 230], ["Chicken Biryani", "120"], ["Mutton Biryani", "130"], ["Egg Biryani", "100"], ["Spicy Chicken Gravy", "120"], ["Chicken Manchurian Gravy", "120"]],
        Dinner: [["Schezwan Veg Noodles", 200], ["Egg Noodles", 220], ["Chicken Noodles", 230], ["Chicken 65", "100"], ["Chilly Chicken", "100"], ["Gobi 65", "100"], ["Paneer 65", "100"], ["Mutton Chukka", "100"], ["Kudal Fry", "120"], ["Chicken Biryani", "100"], ["Mutton Biryani", "130"], ["Egg Biryani", "100"], ["Spicy Chicken Gravy", "100"], ["Chicken Manchurian Gravy", "100"]]
      }
    },
    {
      name: "Sri Venkateshwara Bhavan", rating: "4.1 / 5", hours: "07:00 AM – 10:00 PM",
      special: "Pure Veg South Indian Meals & Tiffin", address: "Bharathi Park, Saibaba Colony, Coimbatore",
      menu: {
        Breakfast: [["Idly (2 pcs)", 30], ["Vadai", 15], ["Pongal", 60], ["Roast / Dosa", "60 -90"], ["Uthappam", "60 -90"], ["Sevai Varieties", "70 -100"], ["Mini Tiffin", 120], ["Milk", 20], ["Tea", 25], ["Coffee", 30], ["Fresh Juices", "30 - 120"]],
        Lunch: [["Meals", 130], ["Veg Biryani", 80], ["Mushroom Biryani", 100], ["Paneer Biryani", 120], ["Variety Rice", "100 - 120"], ["Pulao", "100"], ["Veg Gravies", "100 - 180"], ["Starters", "50 - 100"]],
        Dinner: [["Idly (2 pcs)", 30], ["Vadai", 15], ["Pongal", 60], ["Roast / Dosa", "60 - 90"], ["Uthappam", "60 - 90"], ["Sevai Varieties", "70 - 100"], ["Mini Tiffin", 120], ["Veg Biryani", 80], ["Mushroom Biryani", 100], ["Paneer Biryani", 120], ["Pulao", "100"], ["Veg Gravies", "100"], ["Starters", "100"], ["Milk", 20], ["Tea", 25], ["Coffee", 30], ["Fresh Juices", "30 - 120"]]
      }
    },
    {
      name: "Lovely Mushroom Stall", rating: "4.1 / 5", hours: "04:30 PM – 10:00 PM",
      special: "Mushroom Mix Snacks & Noodles", address: "Raja Annamalai Rd, Saibaba Colony, Coimbatore",
      menu: {
        Dinner: [["Bhel Poori", 45], ["Pani Poori", 45], ["Masal Poori", 45], ["Egg Bhel Poori", 55], ["Bhel Mushroom Mix", 60], ["Egg Bhel Mushroom Mix", 70], ["Mushroom", 45], ["Egg Mushroom", 55], ["Veg Noodles", 55], ["Egg Noodles", 65], ["Noodles Mushroom Mix", 65], ["Egg Noodles Mushroom Mix", 75], ["Veg Fried Rice", 55], ["Egg Fried Rice", 65], ["Veg Rice Mushroom Mix", 65], ["Egg Rice Mushroom Mix", 75]]
      }
    },
    {
      name: "Mani Mess", rating: "3.8 / 5", hours: "07:00 AM – 10:00 PM",
      special: "Budget Tiffin, Biriyani & Chinese", address: "Chinna Subbanna Layout, Saibaba Colony, Coimbatore",
      menu: {
        Breakfast: [["Idly (2 pcs)", 20], ["Vadai", 10], ["Dosai", 20], ["Uthappam", 40], ["Kichadi", 20], ["Chappathi", 20]],
        Lunch: [["Plain Biriyani", 70], ["Chicken Biriyani", 120], ["65 Biriyani", 130], ["Fried Rice", "70 - 100"], ["Noodles", "70 - 100"], ["Egg Varieties", "100 - 500"], ["Parotta Varieties", "30 - 100"]],
        Dinner: [["Kothu Chappathi", 80], ["Plain Biriyani", 70], ["Chicken Biriyani", 120], ["65 Biriyani", 130], ["Fried Rice", "70 - 100"], ["Noodles", "70 - 100"], ["Egg Varieties", "100"], ["Chappathi & Parotta Varieties", "190"]]
      }
    },
    {
      name: "Azhagar Mess", rating: "3.6 / 5", hours: "07:00 AM – 10:30 PM",
      special: "Veg Meals & Rice Varieties", address: "NSR Road, Saibaba Colony, Coimbatore",
      menu: {
        Breakfast: [["Vadai", 20], ["Sambar Vadai", 35], ["Uttapam", 55], ["Tomato Uttapam", 70], ["Roast", 50]],
        Lunch: [["Veg Meal", "120 - 145"], ["Veg Biryani", "70 - 120"], ["Tomato Rice", "50 - 75"], ["Puli Sadham", 50], ["Mushroom Biryani", 137], ["Chilly Soya Biriyani", 137], ["Parotta", 30], ["Appalam", 8]],
        Dinner: [["Veg Meal", "120 - 145"], ["Veg Biryani", "70 -120"], ["Tomato Rice", "50 - 75"], ["Puli Sadham", 50], ["Mushroom Biryani", 137], ["Chilly Soya Biriyani", 137], ["Parotta", 30], ["Appalam", 8]]
      }
    }
  ],
  "R.S. Puram": [
    {
      name: "CHICKBURG", rating: "5.0 / 5", hours: "10:30 AM – 12:00 AM",
      special: "Chicken Wings", address: "Thadagam Main Rd, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Sandwiches", "99 – 222"], ["Wraps", "99 – 179"], ["Veg Starters", "39 – 200"]],
        Dinner: [["Fried Chicken", "79 – 260"], ["Bucket Chicken", "280 – 899"], ["Milkshakes", "99 – 180"]]
      }
    },
    {
      name: "Madurai Miras", rating: "4.9 / 5", hours: "10:30 AM – 10:30 PM",
      special: "Healthy Soups & Snacks", address: "Diwan Bahadur Road, R.S. Puram, Coimbatore",
      menu: {
        Breakfast: [["Tea", 15], ["Coffee", 25], ["Lemon Tea", 15]],
        Lunch: [["Valathandu Soup", 30], ["Vegetable Soup", 30]],
        Dinner: [["Ice Cream Softy", 80], ["French Fries", 99], ["Burgers", 99], ["Momos", 99], ["Chicken Popcorn", 99], ["Veg Bites", 99], ["Puffs & Pastries", "90"]]
      }
    },
    {
      name: "Chennai Empire Biriyani", rating: "4.7 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Chicken Biriyani & Combos", address: "Thadagam Road, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Chicken Biryani Combo", 229], ["Mutton Biryani Combo", 249], ["Chicken Biryani with Gravy", 199], ["Mutton Biryani with Chukka", 289]],
        Dinner: [["Chicken Chukka", 209], ["Chicken 65", 219], ["Gobi Manchurian", 100], ["Chilli Gobi", 80], ["Spring Roll", 80], ["Egg Biryani", 252], ["Prawn Thokku Biryani", 365], ["Mushroom Biryani", 301], ["Paneer Biryani", 308]]
      }
    },
    {
      name: "Chaat Singh", rating: "4.5 / 5", hours: "01:00 PM – 10:00 PM",
      special: "North Indian Chaat & Sandwiches", address: "Robertson Road, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Chat Items", "15 – 80"], ["Sandwiches", "50 – 150"], ["Burgers", "50 – 80"]],
        Dinner: [["Chowmein", 60], ["Fried Rice", "70 – 110"], ["Milkshakes", "30 – 100"]]
      }
    },
    {
      name: "Palm Cafe & Restaurant", rating: "4.4 / 5", hours: "09:00 AM – 11:30 PM",
      special: "Premium Paneer Dishes", address: "Thadagam Main Road, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Paneer Masala", 200], ["Paneer Butter Masala", 240], ["Palak Paneer", 180], ["Paneer Kadhai", 220], ["Shahi Paneer", 230], ["Mix Vegetables", 130], ["Gobhi Masala", 110], ["Veg Kofta", 160], ["Mushroom Kadhai", 190], ["Mushroom Masala", 170], ["Chana Masala", 130], ["Veg Kadhai", 170]],
        Dinner: [["Veg Fried Rice", "120 / 70"], ["Egg Fried Rice", "150 / 85"], ["Chicken Fried Rice", "210 / 115"], ["Paneer Fried Rice", "220 / 120"], ["Non-Veg Mix Fried Rice", 260], ["Pasta & Rolls", "100"]]
      }
    },
    {
      name: "Social Kitchen", rating: "4.3 / 5", hours: "07:30 AM – 10:30 PM",
      special: "Udupi Special Dosa", address: "W Sambandam Road, R.S. Puram, Coimbatore",
      menu: {
        Breakfast: [["Idly (1 pc)", 10], ["Vadai", 10], ["Udupi Masala Dosa", 40], ["Udupi Set Dosa", 40], ["Ragi Dosa", 77], ["Methi Vendhaya Dosa", 77], ["Poori Aloo Bhaji", 77], ["Butter Dosa", "100"]],
        Dinner: [["Fresh Juices", 49], ["Milkshakes", 49]]
      }
    },
    {
      name: "Meenatchi Tiffen Center", rating: "4.3 / 5", hours: "12:00 PM – 11:00 PM",
      special: "Biriyani & Dosa Varieties", address: "Lingappa Road, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Variety Rice", 50], ["Idly", 40], ["Vadai", 40], ["Masala Dosa", 90], ["Butter Masala Dosa", 100], ["Mushroom Biryani", 100]],
        Dinner: [["Chicken Biryani", 150], ["Parotta", 30], ["Kothu Parotta", 100], ["Sevai Varieties", "100"]]
      }
    },
    {
      name: "Sharief Bhai Biriyani", rating: "4.3 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Haleem & Brain Tawa Fry", address: "E TV Samy Road, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Chicken Haleem", 169], ["Chicken Soup", 109], ["Biriyani Varieties", "From 319"], ["Brain Tawa Fry", 269]],
        Dinner: [["Ghost Mutton", 249], ["Chicken Main Course", "199 – 359"], ["Kebabs", "199 – 449"], ["Naan", 49], ["Roti", 29], ["Sevaiya", 39]]
      }
    },
    {
      name: "Anu Mess", rating: "4.1 / 5", hours: "11:00 AM – 03:30 PM",
      special: "Budget Tomato Rice & Meals", address: "East Lokamany Street, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Limited Meals", 60], ["Full Meals", 70], ["Chicken Biryani", 70], ["Egg Biryani", 60], ["Tomato Rice", 40]]
      }
    },
    {
      name: "Restaurant Aha", rating: "3.9 / 5", hours: "12:00 PM – 11:00 PM",
      special: "Mutton Thokku & Fish Starters", address: "Sukrawar Pettai, R.S. Puram, Coimbatore",
      menu: {
        Lunch: [["Veg Meals", 129], ["Non-Veg Meals", "109 – 159"], ["Biryani Varieties", "159 – 229"], ["Half Meals", 79], ["Curd Rice", 69]],
        Dinner: [["Fish 777", 249], ["Chilli Prawn", 259], ["Mutton Chukka", 269], ["Mutton Kudal", 229], ["Parotta", 30], ["Chappathi", 25], ["Elaneer Payasam", 90]]
      }
    }
  ],
  "Neelambur": [
    {
      name: "Tea Boy", rating: "4.7 / 5", hours: "06:30 AM – 10:00 PM",
      special: "Ginger Tea & Milkshakes", address: "Kathir College Road, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Tea", 50], ["Nattusakkarai Tea", 50], ["Special Ginger Tea", 50]],
        Lunch: [["Fresh Lime Juice", 30], ["Milkshakes", 70]],
        Dinner: [["Mojito", 70], ["French Fries", 70], ["Veg Momos", 120], ["Bread Omelette", 60]]
      }
    },
    {
      name: "Mappillais Mansatti Varuval", rating: "4.6 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Clay-pot Chicken & Parotta", address: "Cexus Nagar, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Dosa", 30], ["Roast", 90], ["Parotta", 30], ["Omelette", 25]],
        Lunch: [["Non-Veg Meals", 100], ["Chicken Biriyani", 200], ["Naatukozhi Biriyani", 300], ["Mushroom Masala", 200]],
        Dinner: [["Egg Poriyal", 40], ["Ice Cream", 80]]
      }
    },
    {
      name: "TIK TOK", rating: "4.6 / 5", hours: "07:00 AM – 10:00 PM",
      special: "Unlimited Chicken Biriyani", address: "Kathir College Road, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Idly", "40"], ["Pongal", "100"], ["Vadai", "10"]],
        Lunch: [["Chicken Biriyani", "182 – 190"], ["Egg Biriyani", 130], ["Chicken 65", 150]],
        Dinner: [["Biriyani Combo", 250], ["Unlimited Biriyani", 190], ["Unlimited Shawarma", 150]]
      }
    },
    {
      name: "Deras Bakery", rating: "4.5 / 5", hours: "06:00 AM – 10:00 PM",
      special: "Cheese Pizza & Thick Shakes", address: "Avinashi Main Road, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Tea", 25], ["Coffee", 30], ["Ginger Tea", 30]],
        Lunch: [["Sandwich Varieties", "65 - 140"], ["Bread Omelette", "70 - 110"]],
        Dinner: [["Thick Shakes", 105], ["Brownies", "20"], ["Cakes", "100"]]
      }
    },
    {
      name: "Amaravathi Hotel", rating: "4.4 / 5", hours: "07:00 AM – 10:00 PM",
      special: "Budget Tiffin & Meals", address: "Anna Nagar, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Idli / Dosa", "50 – 100"]],
        Lunch: [["Meals / Thali", "100 – 200"], ["Biriyani", "150 – 250"]],
        Dinner: [["Tiffins", "50 – 100"]]
      }
    },
    {
      name: "Modern Restaurant", rating: "4.2 / 5", hours: "09:00 AM – 11:00 PM",
      special: "Rolls & Juices", address: "Avinashi Road, Neelambur, Coimbatore",
      menu: {
        Lunch: [["Fried Rice", "110 – 140"], ["Roll Varieties", "70 - 90"]],
        Dinner: [["Fresh Juices", "50 – 70"], ["Milkshakes", 80], ["Mojito", 60]]
      }
    },
    {
      name: "SKS Hotel", rating: "4.0 / 5", hours: "11:00 AM – 11:00 PM",
      special: "Beef Biriyani & Starters", address: "Kathir College Road, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Dosai", 20], ["Roast", 40]],
        Lunch: [["Kuska", 60], ["Chicken Biriyani", 120], ["Beef Biriyani", 90]],
        Dinner: [["Parotta", 15], ["Egg Parotta", 75], ["Beef Starters", 150]]
      }
    },
    {
      name: "Shree Ramdev Dhaba", rating: "3.9 / 5", hours: "11:30 AM – 11:00 PM",
      special: "North Indian Roti & Curries", address: "Neelambur Avinashi Road, Coimbatore",
      menu: {
        Lunch: [["Veg Pulao", 130], ["Jeera Rice", 100], ["Curd Rice", 80]],
        Dinner: [["Snacks", "40 – 150"], ["Curries", "130 – 320"], ["Roti Varieties", "10 – 100"]]
      }
    },
    {
      name: "Heaven Cafe & Restaurant", rating: "3.8 / 5", hours: "12:00 PM – 11:00 PM",
      special: "Mixed Meals & Grills", address: "Neelambur, Coimbatore",
      menu: {
        Lunch: [["Egg Biriyani", 100], ["Chicken Biriyani", 120], ["Fish Biriyani", 160]],
        Dinner: [["Chicken Meals", 100], ["Fried Rice", "80 – 250"], ["Grill & Tandoori", "100"]]
      }
    },
    {
      name: "Kaviyan", rating: "3.8 / 5", hours: "07:00 AM – 10:30 PM",
      special: "Quick Tiffin & Finger Food", address: "NPS Nagar, Neelambur, Coimbatore",
      menu: {
        Breakfast: [["Idli", 20], ["Dosa", 25], ["Paratha", 20]],
        Lunch: [["Meals", 50]],
        Dinner: [["Finger Food", "100"], ["Pizza", "500"], ["Coffee", "15"]]
      }
    }
  ],
  "Tatabad": [
    {
      name: "Hotel Anandhas", rating: "4.3 / 5", hours: "6:30 AM – 10:30 PM",
      special: "South Indian Full Meals",
      address: "Tatabad Main Road, Coimbatore, Tamil Nadu 641012",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50], ["Poori", 45]],
        Lunch: [["Full Meals", 120], ["Variety Rice", 80]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    },
    {
      name: "Hotel Geetha Canteen", rating: "4.1 / 5", hours: "7:00 AM – 4:00 PM",
      address: "Near Tatabad Bus Stop Coimbatore, Tamil Nadu 641012",
      special: "Veg Meals",
      menu: {
        Breakfast: [["Idli", 25], ["Dosa", 35]],
        Lunch: [["Veg Meals", 80], ["Curd Rice", 50]]
      }
    },
    {
      name: "Hotel Sri Annapoorna", rating: "4.5 / 5", hours: "6:30 AM – 10:30 PM",
      special: "South Indian Full Meals",
      address: "Tatabad Main Road, coimbatore, TamilNadu 641012",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Pongal", 50], ["Poori", 45]],
        Lunch: [["Full Meals", 120], ["Sambar Rice", 80]],
        Dinner: [["Chapathi", 45], ["Dosa", 50]]
      }
    },
    {
      name: "Hotel Sri Shanmuga Vilas", rating: "3.9 / 5", hours: "7:00 AM – 10:00 PM",
      special: "South Indian Tiffin",
      address: "Tatabad Inner Road, Coimbatore, Tamil Nadu 641012",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 40], ["Pongal", 45]],
        Lunch: [["Meals", 90]],
        Dinner: [["Chapathi", 40], ["Parotta", 15]]
      }
    },
    {
      name: "Hotel Aryas", rating: "4.0 / 5", hours: "6.30 AM - 10.30 PM",
      special: "Veg Meals",
      address: "Tatabad Signal Road, Coimbatore, Tamil Nadu 641012",
      menu: {
        Breakfast: [["Idli", 30], ["Dosa", 45], ["Poori", 45]],
        Lunch: [["Vegmeals", 110], ["CurdRice", 70]],
        Dinner: [["Chapathi", 45], ["Uthappam", 60]]
      }
    }
  ]
};

export const teamMembers: TeamMember[] = [
  { name: "Sarath", role: "Developer", icon: "fa-code" },
  { name: "Hariharan", role: "UI Designer", icon: "fa-laptop-code" },
  { name: "Hemalatha", role: "Product Manager", icon: "fa-lightbulb" },
  { name: "Kanikaa Shree", role: "AI Strategist", icon: "fa-brain" }
];
