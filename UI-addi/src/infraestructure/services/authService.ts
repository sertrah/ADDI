
let currentUser: boolean | null;

function logout() {
  currentUser = null;
}

function getToken() {
  return "notImplementedYet";
}

//TODO: should remove the caching since we are using useUser hook
async function getCurrentUser() {
  if (!currentUser) {
    currentUser = true;
  }
  return currentUser;
}

export const authService = {
  getCurrentUser,
  getToken,
  logout,
};
