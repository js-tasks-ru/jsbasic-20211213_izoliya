function showSalary(users, age) {
  // ваш код...
  let newMass = [];
  users.forEach (function(user) {
    if (user.age <= age) {
    newMass.push (user.name + ', ' + user.balance);
    }
  });
  return ( newMass.join('\n') );
}
