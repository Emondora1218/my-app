import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTextField from "../custom/CustomTextField";
import CustomButton from "../custom/CustomButton";
import store from "../store";
import { useDispatch } from "react-redux";

const TopPage = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(-1);

  useEffect(() => {
    //console.log(number)
  }, [number])

  function getNumber() {
    const state = store.getState();
    const numlist = [...state.numlist];
    const randomIndex = Math.floor(Math.random() * numlist.length);
    setNumber(numlist[randomIndex]);
    console.log(numlist.filter((num) => num !== numlist[randomIndex]))
    dispatch({
      type: "UPDATE_NUM_LIST",
      payload: numlist.filter((num) => num !== numlist[randomIndex]),
    })
  }

  return (
    <Stack
      spacing={8}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CustomButton
        onClick={getNumber}
      >
        数字を生成する
      </CustomButton>
      <Typography
        sx={{fontSize:100}}
      >
        {number}
      </Typography>
    </Stack>
  );
};

export default TopPage;