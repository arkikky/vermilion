// @define-user-interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  active?: boolean;
}

// @create-user-function
function createUser(
  id: number,
  name: string,
  email: string,
  age?: number
): User {
  return { id, name, email, age, active: true };
}

// @greet-user-function
function greetUser(user: User): string {
  return `Hello, ${user.name}! Your email is ${user.email}`;
}

// @deactivate-user-function
function deactivateUser(user: User): User {
  return { ...user, active: false };
}

// @update-email-function
function updateEmail(user: User, newEmail: string): User {
  return { ...user, email: newEmail };
}

// @check-active-users
function filterActiveUsers(users: User[]): User[] {
  return users.filter((u) => u.active);
}

// @find-user-by-id
function findUserById(users: User[], id: number): User | undefined {
  return users.find((u) => u.id === id);
}

// @print-user-list
function printUsers(users: User[]): void {
  users.forEach((user) => {
    console.log(
      `- ${user.name} (${user.email}) [${user.active ? "active" : "inactive"}]`
    );
  });
}

// @send-email-mock
function sendEmail(to: string, subject: string, message: string): void {
  console.log(`📧 Sending email to ${to}: [${subject}] ${message}`);
}

// @notify-active-users
function notifyActiveUsers(users: User[]): void {
  const activeUsers = filterActiveUsers(users);
  activeUsers.forEach((user) => {
    sendEmail(
      user.email,
      "Welcome back!",
      `Hey ${user.name}, glad to see you again!`
    );
  });
}

// @initialize-sample-users
const users: User[] = [
  createUser(1, "vermilion", "vermilion@gmail.com", 23),
  createUser(2, "crimson", "crimson@example.com", 27),
  createUser(3, "scarlet", "scarlet@example.com", 30),
];

// @display-greeting
console.log(greetUser(users[0]));

// @update-user-email
const updatedUser = updateEmail(users[1], "new.crimson@example.com");
console.log(`Updated email for ${updatedUser.name}: ${updatedUser.email}`);

// @deactivate-one-user
users[2] = deactivateUser(users[2]);

// @print-all-users
console.log("\n📋 User List:");
printUsers(users);

// @notify-all-active-users
console.log("\n📨 Sending notifications to active users...");
notifyActiveUsers(users);

// @search-user
const searchId = 2;
const found = findUserById(users, searchId);
if (found) {
  console.log(`\n🔍 Found user: ${found.name} (${found.email})`);
} else {
  console.log(`\n❌ No user found with ID: ${searchId}`);
}

// @summary
console.log("\n✅ Summary:");
console.log(`Total users: ${users.length}`);
console.log(`Active users: ${filterActiveUsers(users).length}`);
console.log(`Inactive users: ${users.filter((u) => !u.active).length}`);
