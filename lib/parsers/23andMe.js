module.exports = {
  matches: function(lines) {
    return lines[0].indexOf('23andMe') !== -1;
  },
  parseLine: function(line) {
    var split = line.split('\t');
    var snp = {
      id: split[0],
      chromosome: split[1],
      position: split[2],
      genotype: split[3]
    };

    if (snp.genotype === '--' ||
      snp.genotype === 'DD') {
      snp.genotype = null;
    }
    if (snp.chromosome !== 'X' &&
      snp.chromosome !== 'Y' &&
      snp.chromosome !== 'MT') {
      snp.chromosome = +snp.chromosome;
    }
    return snp;
  }
};
