const dotsRecursive = (str, tmp = [str[0]]) => {
    if (str.length === 1) {
      return tmp;
    }
  
    const char = str[1];
  
    str = str.slice(1);
  
    const nextWithDots = tmp.slice().map((x) => x + "." + char);
    const nextWithoutDots = tmp.map((x) => x + char);
  
    const withoutDots = dotsRecursive(str, nextWithoutDots);
    const withDots = dotsRecursive(str, nextWithDots);
  
    return [...withoutDots, ...withDots];
  };

  console.log(dotsRecursive("ilovenode"))