function fruit(){
  var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(buah);

  var buahunshift = buah.unshift("Duren", "Anggur");
  console.log(buahunshift);

  var buahpop = buah.push("Duren", "Anggur");
  console.log(buahpop);

  return buah;
}
console.log(fruit());
