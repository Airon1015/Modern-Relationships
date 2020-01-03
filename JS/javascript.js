var input = function() 
		{ 
			let tribet = document.getElementById("it").value;
			let clant = document.getElementById("ic").value;
			let superfamilyt = document.getElementById("isf").value;
			let closefriendst = document.getElementById("ics").value;
			tribe = parseInt((tribet/150)*1000)/10;
			clan = parseInt((clant/50)*1000)/10;
			superfamily = parseInt((superfamilyt/15)*1000)/10;
			closefriends = parseInt((closefriendst/5)*1000)/10;
			document.getElementById("tribe").innerHTML = tribe;
			document.getElementById("clan").innerHTML = clan;
			document.getElementById("superfamily").innerHTML = superfamily;
			document.getElementById("closefriends").innerHTML = closefriends;
		}