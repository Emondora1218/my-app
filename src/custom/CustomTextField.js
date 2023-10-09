import { TextField } from "@mui/material";

const CustomTextField = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <TextField
      value={props.value}
      onChange={handleChange}
      color="Assort1"
      type={props.type}
      size={props.size}
      disabled={props.disabled}
      sx={{
        input: {
          color: "#f0f0f0",
          backgroundColor: "#1E2535",
          borderRadius: "4px",
          border: 1,
          borderColor: "#8DA0C9",
        },
      }}
    ></TextField>
  );
};

export default CustomTextField;