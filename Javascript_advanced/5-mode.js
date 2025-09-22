function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const mainContainer = document.createElement("main");
  mainContainer.style.height = "100vh";
  mainContainer.style.display = "flex";
  mainContainer.style.flexDirection = "column";
  mainContainer.style.justifyContent = "center";
  mainContainer.style.alignItems = "center";
  document.body.appendChild(mainContainer);

  const title = document.createElement("h1");
  title.textContent = "You're Browsing As A Guest";
  mainContainer.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Pages You View In This Window Won't Appear In The " +
    "Browser History And They Won't Leave Other Traces, " +
    "Like Cookies, On The Computer After You Close All " +
    "Open Guest Windows. Any Files You Download Will Be " +
    "Preserved, However.";
  paragraph.style.paddingRight = "5rem";
  paragraph.style.paddingLeft = "5rem";
  mainContainer.appendChild(paragraph);

  const link = document.createElement("a");
  link.textContent = "Learn More";
  link.href = "#";
  link.style.marginBottom = "5rem";
  mainContainer.appendChild(link);

  const bottomPartContainer = document.createElement("div");
  bottomPartContainer.style.position = "absolute";
  bottomPartContainer.style.left = ".5rem";
  bottomPartContainer.style.bottom = ".5rem";
  bottomPartContainer.style.display = "flex";
  bottomPartContainer.style.flexDirection = "column";
  bottomPartContainer.style.justifyContent = "flex-start";
  mainContainer.appendChild(bottomPartContainer);

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Welcome Holberton!";
  subtitle.style.width = "100%";
  subtitle.style.textAlign = "left";
  bottomPartContainer.appendChild(subtitle);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.width = "100%";
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "row";
  buttonContainer.style.justifyContent = "flex-start";
  bottomPartContainer.appendChild(buttonContainer);

  let spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  spookyButton.onclick = spooky;
  buttonContainer.appendChild(spookyButton);

  let darkModeButton = document.createElement("button");
  darkModeButton.innerText = "Dark mode";
  darkModeButton.onclick = darkMode;
  buttonContainer.appendChild(darkModeButton);

  let screamModeButton = document.createElement("button");
  screamModeButton.innerText = "Scream mode";
  screamModeButton.onclick = screamMode;
  buttonContainer.appendChild(screamModeButton);
}

main();
