function phoneNumberDirectory(arr) {
  const Directory = new Map();

  for (const element of arr) {
    const splittedArr = element.split(":");
    Directory.set(splittedArr[0], splittedArr[1]);
  }

  console.log(Directory);
}

phoneNumberDirectory(["farian:0232-312-122", "nahian:223-134-121"]);
