export const LIST_STYLES = {
  maxWidth: 1990,
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  paddingLeft: 30,
  paddingRight: 30,
  "@media (max-width: 1024px)": {
    paddingLeft: "20px",
    paddingRight: 0,
  },
} as const;

export const LIST_NAV_STYLES = {
  marginTop: "2.125rem",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-end",
} as const;
