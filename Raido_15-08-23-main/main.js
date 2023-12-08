let dugmeOtvori = document.querySelector(".dugme");
let dugmeZatvori = document.querySelector(".dugmeZatvori");
let sadrzaj = document.querySelector(".top-container");

dugmeOtvori.onclick=()=>{
  sadrzaj.style.display="block";
}
dugmeZatvori.onclick=()=>{
  sadrzaj.style.display="none";
}
