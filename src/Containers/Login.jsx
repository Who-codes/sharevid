import { Button, Grid } from "@chakra-ui/react";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../firebaseConfig";

const Login = () => {
  const navigate = useNavigate();

  const logIn = async () => {
    const response = await signInWithPopup(auth, provider);
    const { providerData, refreshToken } = response.user;
    console.log(providerData, refreshToken);

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    await addDoc(collection(db, providerData[0].uid), providerData[0]);

    navigate("/", { replace: true });
  };

  return (
    <Grid height={"100vh"} placeItems={"center"}>
      <Button
        textTransform={"capitalize"}
        leftIcon={<FcGoogle fontSize={25} />}
        bg={"gray.200"}
        onClick={logIn}
      >
        sign in with google
      </Button>
    </Grid>
  );
};

export default Login;
