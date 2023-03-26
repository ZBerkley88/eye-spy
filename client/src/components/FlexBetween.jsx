// Allows us to reuse styles as we would with components
const { styled } = require("@mui/system");
const { Box } = require("@mui/material");

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
