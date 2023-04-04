var myimage = document.getElementById("imgc");
myimage.addEventListener('click', () =>{
	let imgp = Math.round(Math.random () * 10) + 1;
	myimage.setAttribute("src", "img/"+imgp+".jpg");
});