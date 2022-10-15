export const FILTER_CONTAINER_STYLES = {
  flexDirection: "row",
  paddingLeft: 30,
  paddingRight: 30,
  marginBottom: 50,
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1230,
  width: "100%",
  marginRight: "auto",
  marginLeft: "auto",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  "@media (max-width: 440px)": {
    paddingLeft: 7,
    paddingRight: 7,
  },
} as const;

export const CHECKBOX_LIST_STYLES = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  "@media (max-width: 600px)": {
    justifyContent: "center",
    marginBottom: 30,
  },
} as const;
