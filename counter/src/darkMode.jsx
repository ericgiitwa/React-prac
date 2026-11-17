function DarkMode() {
  return (
    <div id="darkMode-div">
      <button
        onClick={() => {
          if (
            document.getElementById("root").style.backgroundColor != "grey"
          ) {
            document.getElementById("root").style.backgroundColor = "grey"
          }else{document.getElementById("root").style.backgroundColor = "white"}
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;
