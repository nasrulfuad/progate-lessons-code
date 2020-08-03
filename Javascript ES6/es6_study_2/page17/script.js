const cafe = {
  name: "Progate Cafe",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // Add a menus property and assign an array to it
  menus: ['Coffee', 'Tea', 'Chocolate Cake']
  
};

console.log(`Name: ${cafe.name}`);
console.log(`Hours: From ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Recommendations");

// Use a for loop to print the contents of the menu array
for (let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}
