const parseDenominationValue = (denomination) => {
  if (denomination.startsWith("RSD")) {
    return parseInt(denomination.replace("RSD", ""), 10);
  } else if (denomination.startsWith("€")) {
    return parseFloat(denomination.replace("€", ""));
  } else if (denomination.startsWith("$")) {
    return parseInt(denomination.replace("$", ""), 10);
  } else if (denomination.endsWith("¢")) {
    return parseInt(denomination.replace("¢", ""), 10) / 100;
  } else if (denomination.endsWith("c")) {
    return parseFloat(denomination.replace("c", "")) / 100;
  }
  return 0;
};
export default parseDenominationValue;
