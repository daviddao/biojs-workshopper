var add = require('./add');

add(3,4);

var newick_obj = require('biojs-io-newick');

console.log(newick_obj.parse_nwk("(homo_sapiens:1,(mus_musculus:2,danio_rerio:17):4);"));