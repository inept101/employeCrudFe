// import React, { useState, useContext } from "react";
// import axios from "axios";

// import { UserContext } from "../../context/users/contex";
// import { useRouter } from "next/router";
// // import Link from "next/link";

// function Login() {
//   const [appState, dispatch] = useContext(UserContext);
//   const router = useRouter();
//   const [newUser, setNewUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   if (appState.isLoggedIn) {
//     router.push("/");
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`${process.env.NEXT_PUBLIC_SERVER}/api/user/signin`, newUser)
//       .then((res) => {
//         if (res.status === 200) {
//           dispatch({ type: "USER_LOGIN", value: res.data });
//           router.push("/");
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             onChange={handleChange}
//             variant="outlined"
//             id="email"
//             value={newUser.email}
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             onChange={handleChange}
//             variant="outlined"
//             value={newUser.password}
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/signup" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Login;
