import { Button } from "@mui/material";

const CustomButton = (props) => {
  const buttonText = props.children;

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 5,
        minWidth: 85,
        lineHeight: 2,
      }}
      onClick={props.onClick}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      size={props.size}
      disabled={props.disabled}
      color={props.color}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
