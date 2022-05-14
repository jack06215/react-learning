import React from "react";
import { Box, Button, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactElement;
  subLabel?: string;
  num?: number;
  mini?: boolean;
};

const SmallButton = styled(Button)({
  fontSize: "12px",
  position: "relative",
  padding: "2px 12px",
  height: "28px",
});

const MediumButton = styled(Button)({
  fontSize: "14px",
  padding: "8px 20px",
  height: "40px",
});

const WhiteFilledButton: React.FC<Props> = ({
  children,
  onClick,
  subLabel,
  mini,
  num,
}: Props) => {
  return (
    <Button
      sx={{
        color: (theme) => theme.palette.text.primary,
        position: "relative",
        border: "1px solid rgba(102, 102, 102, 0.12)",
        background: "#FFFFFF",
        borderRadius: "20px",
        ...(mini && {
          fontSize: "12px",
          position: "relative",
          padding: "2px 12px",
          height: "28px",
        }),
        ...{
          fontSize: "14px",
          padding: "8px 20px",
          height: "40px",
        },
      }}
    >
      {children}
      {subLabel && <Box fontSize={12} ml={1}>{`(${subLabel})`}</Box>}
      {num && (
        <Box
          sx={{
            color: "#ffffff",
            background: '#623455',
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            marginLeft: 1,
            fontSize: 11,
          }}
        >
          {num}
        </Box>
      )}
    </Button>
  );
};

export default WhiteFilledButton;
