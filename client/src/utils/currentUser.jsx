let user = null;

try {
  const storedUser = localStorage.getItem("currentUser");

  if (storedUser && storedUser !== "undefined") {
    user = JSON.parse(storedUser);
  }
} catch (e) {
  user = null;
}

export const currentUser = user;
