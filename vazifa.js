let users = [
  {
    id: 1,
    name: "Ali Valiyev",
    age: 22,
    role: "admin",
    isActive: true,
    salary: 1200,
  },
  {
    id: 2,
    name: "Sardor Rahimiv",
    age: 19,
    role: "user",
    isActive: false,
    salary: 600,
  },
];

// ==================== 1. addUser(newUser) ===============================
console.log(
  "// ==================== 1. addUser(newUser) ===============================",
);

function addUser(newUser) {
  if (newUser.name === null || newUser.role === null) {
    return "Xato: Name va role kiritilishi shart!";
  }

  let newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  let createdUser = {
    id: newId,
    name: newUser.name,
    age: newUser.age,
    role: newUser.role,
    isActive: newUser.isActive !== undefined ? newUser.isActive : true,
    salary: newUser.salary,
  };

  users = [...users, createdUser];

  return users;
}

console.log(
  addUser({ name: "Laylo Aliyeva", age: 25, role: "user", salary: 900 }),
);

// ==================== 2. readUsers(filterObj) ====================================
console.log(
  "// ==================== 2. readUsers(filterObj) ====================================",
);

function readUsers(filterObj) {
  if (filterObj === null) {
    return users;
  }

  return users.filter((user) => {
    if (
      filterObj.isActive !== undefined &&
      user.isActive !== filterObj.isActive
    ) {
      return false;
    }

    if (filterObj.role !== undefined && user.role !== filterObj.role) {
      return false;
    }

    return true;
  });
}

console.log(readUsers({ role: "user" }));

// ==================== 3. updateUser(id, updatedFields ============================
console.log(
  "// ==================== 3. updateUser(id, updatedFields) ============================",
);

function updateUser(id, updatedFields) {
  let index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return "User topilmadi";
  }

  users = users.map((user) =>
    user.id === id ? { ...user, ...updatedFields } : user,
  );

  return "User muvaffaqiyatli tahrirlandi";
}

console.log(updateUser(1, { salary: 1500, role: "lead" }));

// ==================== 4. deleteUser(id) ===========================================
console.log(
  "// ==================== 4. deleteUser(id) ===========================================",
);

function deleteUser(id) {
  let userExists = users.some((u) => u.id === id);

  if (!userExists) {
    return "Xato: O'chiriladigan user topilmadi";
  }

  let deletedUser = users.find((u) => u.id === id);

  users = users.filter((u) => u.id !== id);

  return { success: true, deletedUser, users };
}

console.log(deleteUser(2));
