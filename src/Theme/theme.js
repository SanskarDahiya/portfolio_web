const theme = {
  theme1: {
    primaryColor: "#3457D5",
    secondaryColor: "#f3f3f3",
    primaryTextColor: "white"
  }
};
export default theme;

export const LeftSideBarTheme = {
  MainContainer: {
    zIndex: 10,
    position: "fixed",
    bottom: 0,
    color: "black",
    width: "40px"
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
    padding: 0,
    listStyle: "none"
    // justifyContent: "center"
  },
  SideIcon: { padding: "10px", "transitionDuration": "0.2s", "transitionTimingFunction": "ease" },
  SideIconHover: {
    // backgroundColor: "blue",
    color: "blue",
    transform: "translateY(-5px)"
  },
  BottomSection: {
    marginTop: "20px",
    width: "0em",
    height: "90px",
    margin: "0 auto",
    backgroundColor: "black"
  }
};
