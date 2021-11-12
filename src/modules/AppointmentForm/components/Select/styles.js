import { colors } from "styles"

export const selectStyles = {
    option: (provided, state) => ({
        ...provided,
        height: "40px",
        background: state.isSelected ? "#F9FAFF" : "white",
        borderRadius: "6px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "130%",
        color: colors.TEXT_TITLE_COLOR,
    }),
    menuList: (provided) => ({
        ...provided,
        height: "128px",
        overflowY: "visible",
        overflowY: "scroll",
    }),
    container: (provided) => ({
        ...provided,
        background: "#FFFFFF",
        border: "1px solid #DCE0EC",
        boxSizing: "border-box",

        boxShadow: "0px 4px 32px rgba(218, 228, 255, 0.16)",
        borderRadius: "8px",
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none",
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "130%",
    }),
    singleValue: (provided) => ({
        ...provided,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "130%",
    })
}