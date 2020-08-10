// For a more desi approach uncomment this section by Ishan and delete the one below
// const BINODKoDhoondo = (binod) => {
//   // Agar binod ke bacche hai toh
//   if (binod.hasChildNodes()) {
//     //   Binod ke baccho ke baccho ko bhi dhoondo
//     binod.childNodes.forEach(BINODKoDhoondo);
//   }
//   // Agar bacche me binod ka DNA hai
//   else if (binod.nodeType === Text.TEXT_NODE) {
//     //   Binod ke baccho ka DNA badal daalo
//     binod.textContent = binod.textContent.replace(/binod/gi, "🙅‍♂👀🤦‍♂");
//   }
// };

// BINODKoDhoondo(document.body);



const Finding_Binod = (binod) => {
  // If there are more Binods hidden in the region where we were spammed with Binod
  if (binod.hasChildNodes()) {
    //   Find the other places where we are spammed with Binod
    binod.childNodes.forEach(Finding_Binod);
  }
  // If we are spammed with Binod
  else if (binod.nodeType === Text.TEXT_NODE) {
    //Replace the portion of the text having Binod with 🙅‍♂👀🤦‍♂
    binod.textContent = binod.textContent.replace(/binod/gi, "🙅‍♂👀🤦‍♂");
  }
};

Finding_Binod(document.body); // Passing our entire body of the web page
