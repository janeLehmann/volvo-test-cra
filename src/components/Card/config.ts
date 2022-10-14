export const TOP_TEXT_CONTAINER_STYLES = {
  flexDirection: "row",
  alignItems: "center",
  "@media (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
} as const;

export const IMAGE_CONTAINER_STYLES = {
  marginBottom: "0.938rem",
  background: "#F4F4F4",
  paddingTop: "75%",
  height: "auto",
  position: "relative",
  overflow: "hidden",
} as const;

export const IMAGE_STYLES = {
  maxWidth: "100%",
  objectFit: "cover",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
} as const;

export const LINKS_CONTAINER_STYLES = { flexDirection: "row", alignItems: "center", justifyContent: "center" } as const;
