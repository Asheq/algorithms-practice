function one(n) {
  const out = [];
  let item = "1";
  while (out.length < n) {
    out.push(item);
    item = nextItem(item);
  }
  return out;
}

function two(n) {
  const out = ["1"];
  let item = "1";
  while (out.length < n) {
    item = nextItem(item);
    out.push(item);
  }
  return out;
}

function three(n) {
  const out = ["1"];
  let item = nextItem("1");
  while (out.length < n) {
    out.push(item);
    item = nextItem(item);
  }
  return out;
}

function four(n) {
  const out = ["1"];
  for (let i = 0; i < n - 1; i++) {
    out.push(nextItem(out[i]));
  }
  return out;
}

function five(n) {
  const out = ["1"];
  let i = 0;
  while (i + 1 < n) {
    out.push(nextItem(out[i]));
    i += 1;
  }
  return out;
}

/* My favorite for this problem */
function six(n) {
  const out = ["1"];
  let i = 1;
  while (i < n) {
    out[i] = nextItem(out[i - 1]);
    i += 1;
  }
  return out;
}

function seven(n) {
  const out = ["1"];
  let i = 0;
  while (i++ < n - 1) {
    out[i] = nextItem(out[i - 1]);
  }
  return out;
}

[one, two, three, four, five, six, seven].forEach(f => {
  console.log(f.apply(this, [4]));
});

// Return next item
function nextItem(item) {
  if (item === "" || item === undefined) {
    return "";
  }

  let groupChar = item[0];
  let groupCount = 1;
  let out = [];

  for (let i = 1; i <= item.length; i++) {
    if (item[i] !== groupChar) {
      out.push(groupCount, groupChar);
      groupChar = item[i];
      groupCount = 1;
    } else {
      groupCount += 1;
    }
  }

  return out.join("");
}
