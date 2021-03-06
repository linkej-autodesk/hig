export default function stylesheet(themeData) {
  return {
    content: {
      minHeight: `32px`,
      padding: `8px 12px`,
      boxSizing: `border-box`
    },
    panel: {
      border: themeData
        ? `1px solid ${themeData["tooltip.backgroundColor"]}`
        : `none`,
      backgroundColor: themeData
        ? themeData["tooltip.backgroundColor"]
        : `none`,
      borderRadius: themeData ? themeData["tooltip.borderRadius"] : 0
    },
    panelInner: {
      position: `relative`
    },
    textContent: {
      whiteSpace: `nowrap`
    }
  };
}
