const {
  createSlice,
  current,
  nanoid,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

let initialState = {
  users: [],
};

// Check if window and localStorage are available (client-side)
if (typeof window !== "undefined" && localStorage.getItem("users")) {
  initialState = {
    userApiData:[],
    users: JSON.parse(localStorage.getItem("users")),
  };
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    // console.log("action")
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);

      // Save the updated users array to localStorage if in the browser
      if (typeof window !== "undefined") {
        const userData = JSON.stringify(current(state.users));
        localStorage.setItem("users", userData);
      }
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;

      // Update localStorage when removing a user, only in the browser
      if (typeof window !== "undefined") {
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
        // console.log("reducer", action)
      state.isLoading = false, 
      state.userApiData = action.payload;
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
