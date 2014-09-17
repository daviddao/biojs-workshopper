Create a new file and import your function `add` and add two numbers 3 and 4 together.
Also import the biojs component biojs-io-newick.
Use its `parse_nwk` function to parse this newick string `"(homo_sapiens:1,(mus_musculus:2,danio_rerio:17):4);"` 

## Hint

Importing a local function (like your `add` function) can be done with 

```
var add = require("./index");
```

Importing the newick component can be done by typing in your terminal

```sh
$ npm install --save biojs-io-newick
```

and inside your file:

```
var biojs_newick = require("biojs-io-newick");
var biojs_newick.parse_nwk(args);
```

