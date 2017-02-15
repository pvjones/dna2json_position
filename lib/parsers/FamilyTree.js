module.exports = {
  matches: function(lines) {
    return lines[0].indexOf('RSID,') === 0;
  },
  parseLine: function(line) {
    if (line.indexOf('RSID,') === 0) {
      return;
    }
    var split = line.split(',');
    var snp = {
      id: stripQuotes(split[0]),
      chromosome: stripQuotes(split[1]),
      position: stripQuotes(split[2]),
      genotype: (split[3] === '"--"' ? null : stripQuotes(split[3]))
    };

    if (snp.chromosome !== 'X' &&
      snp.chromosome !== 'Y' &&
      snp.chromosome !== 'MT') {
      snp.chromosome = +snp.chromosome;
    }
    return snp;
  }
};

function stripQuotes(str){
  return str.replace(/"/g, '');
}