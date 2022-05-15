import React from "react";
import { Box, Button, SvgIcon } from "@mui/material";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactElement;
  subLabel?: string;
  mini?: boolean;
};

const WhiteFilledButton: React.FC<Props> = ({
  children,
  onClick,
  icon,
  subLabel,
  mini,
}: Props) => {
  return (
    <Button
      sx={{
        color: (theme) => theme.palette.textColor.blue,
        position: "relative",
        border: "1px solid #6666661f",
        background: "#FFFFFF",
        borderRadius: "20px",
        ...{
          fontSize: "14px",
          padding: "8px 20px",
          height: "40px",
        },
        ...(mini && {
          fontSize: "12px",
          padding: "2px 12px",
          height: "28px",
        }),
      }}
      onClick={() => onClick()}
    >
      {icon && (
        <SvgIcon
          sx={{
            marginRight: "8px",
            ...{
              fontSize: "18px",
            },
            ...(mini && {
              fontSize: "16px",
            }),
          }}
        >
          {icon}
        </SvgIcon>
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}
        {subLabel && (
          <Box
            sx={{ fontSize: "12px", marginLeft: "12px" }}
          >{`(${subLabel})`}</Box>
        )}
      </Box>
    </Button>
  );
};

export default WhiteFilledButton;
