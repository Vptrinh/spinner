let timer = 0;
let times = 10;
let spinner = ['\r|   ','\r/   ','\r-   ','\r\\   '];
for (let j = 0; j < times; j ++) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      process.stdout.write(spinner[i]);
    }, timer += 200);
  }
}

