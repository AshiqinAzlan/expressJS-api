import express from "express";

// GET request
const app = express();
const PORT = process.env.PORT || 5000;

// (/hello) = route
app.get("/", (req, res) => {
  res.status(200).send("Hello World"); //status of the respond (404, 200, 500)
});

app.get("/api/user", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "niqi",
      email: "niqi@niqi.com",
    },
    {
      id: 2,
      name: "mel",
      email: "mel@mel.com",
    },
    {
      id: 3,
      name: "syera",
      email: "syera@syera.com",
    },
    {
      id: 4,
      name: "aini",
      email: "aini@aini.com",
    },
  ]);
});

app.get("/api/products", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "Smart Watch",
      category: "Electronics",
      price: 1099,
    },
    {
      id: 2,
      name: "Laptop",
      category: "Electronics",
      price: 4999,
    },
    {
      id: 3,
      name: "Tablet",
      category: "Electronics",
      price: 2099,
    },
    {
      id: 4,
      name: "Smartphone",
      category: "Electronics",
      price: 2599,
    },
  ]);
});

// Route Parameters
const mockUsers = [
  {
    id: 1,
    name: "niqi",
    age: 23,
  },
  {
    id: 2,
    name: "mel",
    age: 24,
  },
  {
    id: 3,
    name: "syera",
    age: 25,
  },
  {
    id: 4,
    name: "aini",
    age: 26,
  },
];

//Route Parameters
// app.get("/api/userInfo", (req, res) => {
//   res.send(mockUsers);
// });

// app.get("/api/users/:id", (req, res) => {
//   // Log the route parameter 'id'
//   console.log(req.params);

//   // Parse the 'id' parameter to an integer
//   const parseId = parseInt(req.params.id);

//   // Log the parsed 'id'
//   console.log(parseId);

//   // Check if the parsed 'id' is not a number (NaN)
//   if (isNaN(parseId)) {
//     // If 'id' is NaN, send a 400 Bad Request response with a message
//     return res.status(400).send({ msg: "Bad request. Invalid ID" });
//   }

//   // Find the user with the matching 'id' in the mockUsers array
//   const findUser = mockUsers.find((user) => user.id === parseId);

//   // If no user is found with the matching 'id'
//   if (!findUser) {
//     // Send a 404 Not Found response with a message
//     return res.status(404).send({ msg: "User not found" });
//   }

//   // If user is found, send a 200 OK response with the user data
//   res.status(200).send(findUser);
// });

// Query parameter
// Define a route handler for GET requests to the "/api/users" endpoint
app.get("/api/users", (req, res) => {
  // Log the query parameters to the console
  console.log(req.query);

  // Destructure the query object to extract 'filter' and 'value' parameters
  const {
    query: { filter, value },
  } = req;

  // Check if both 'filter' and 'value' are undefined
  // If so, return the full list of mock users
  if (!filter && !value) return res.send(mockUsers);

  // If both 'filter' and 'value' are defined,
  // filter the mockUsers array based on the provided filter and value
  if (filter && value)
    return res.send(mockUsers.filter((user) => user[filter].includes(value)));

  return res.send(mockUsers);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
