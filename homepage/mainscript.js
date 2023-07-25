// Get all elements with class "hex"
const hexagons = document.querySelectorAll(".hex");

// Loop through each hexagon element
hexagons.forEach((hexagon) => {
  // Find the child elements with class "box" and "info" inside the current hexagon
  const box = hexagon.querySelector(".box");
  const info = hexagon.querySelector(".info");

  // Store the initial content of the box and info elements
  const boxContent = box.textContent;
  const infoContent = info.textContent;

  // Add event listeners to the hexagon element
  hexagon.addEventListener("mouseover", () => mouseOver(box, info, infoContent));
  hexagon.addEventListener("mouseout", () => mouseOut(box, info, boxContent));

  // Hide the "info" content on page load
  info.textContent = "";
});

function mouseOver(box, info, infoContent) {
  box.textContent = "";
  info.textContent = infoContent;
}

function mouseOut(box, info, boxContent) {
  box.textContent = boxContent;
  info.textContent = "";
}

function toggleMenu(event) {
  let submenu = document.getElementById("submenu");
  if (submenu.classList.contains("openmenu")) {
    submenu.classList.remove("openmenu");
  } else {
    // Hide all other open submenus before showing the current one
    const openSubmenus = document.querySelectorAll(".openmenu");
    openSubmenus.forEach((openSubmenu) => {
      if (openSubmenu !== submenu) {
        openSubmenu.classList.remove("openmenu");
      }
    });

    submenu.classList.add("openmenu");

    // Get the position of the profile picture
    const profileImage = event.target;
    const profileImageRect = profileImage.getBoundingClientRect();

    // Adjust the submenu position to be right below the profile picture
    submenu.style.top = profileImageRect.bottom + "px";
    submenu.style.left = profileImageRect.left + "px";
  }
}