const cafe = {
  name: "Progate Cafe",
  businessHours: {
    // Assign the provided object to businessHours
    opening: '10:00(AM)',
    closing: '8:00(PM)'
  },
};

// Print "Name: ____"
console.log(`Name: ${cafe.name}`);

// Print "Hours: From ____ to ____
console.log(`Hours: From ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);