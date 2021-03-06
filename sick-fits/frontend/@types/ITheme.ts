interface ITheme {
    red: "#FF0000";
    black: "#393939";
    grey: "#3A3A3A";
    lightGrey: "#E1E1E1";
    offWhite: "#EDEDED";
    maxWidth: "1200px";
    boxShadow: "0 12px 24px 0 rgba(0,0,0, 0.09)";
}

type Theme = {
    theme?: ITheme,
};

export default Theme;
