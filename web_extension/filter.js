const BINODKoDhoondo = (binod) => {
  // Agar binod ke bacche hai toh
  if (binod.hasChildNodes()) {
    //   Binod ke baccho ke baccho ko bhi dhoondo
    binod.childNodes.forEach(BINODKoDhoondo);
  }
  // Agar bacche me binod ka DNA hai
  else if (binod.nodeType === Text.TEXT_NODE) {
    //   Binod ke baccho ka DNA badal daalo
    binod.textContent = binod.textContent.replace(/binod/gi, "🙅‍♂👀🤦‍♂");
  }
};

BINODKoDhoondo(document.body);