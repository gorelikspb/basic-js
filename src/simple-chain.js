const CustomError = require("../extensions/custom-error");

const chainMaker = {
  // chain: '',
  chain: [],
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // if (this.chain){
    //   this.chain+='~~'
    // }
    // this.chain = this.chain +  '(' +value+')';
    this.chain.push(value);
    console.log(this.chain);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position]){
      throw new CustomError('wrong position');
    }
    
    this.chain.splice(position-1,1);
    console.log(this.chain);
    return this;

  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here

    return '( ' + this.chain.join(' )~~( ') + ' )';
  }
};


module.exports = chainMaker;
