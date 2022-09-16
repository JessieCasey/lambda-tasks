const functionRecursive = (str, temp = [str[0]]) => {
    if (str.length === 1) {
      return temp;
    }
  
    const char = str[1];
  
    str = str.slice(1);
  
    const nextWithDots = temp.slice().map((x) => x + "." + char);
    const nextWithoutDots = temp.map((x) => x + char);
  
    const withoutDots = functionRecursive(str, nextWithoutDots);
    const withDots = functionRecursive(str, nextWithDots);
  
    return [...withoutDots, ...withDots];
  };

  console.log(functionRecursive("ilovenode"))