const navbar = `<nav class="navbar navbar-expand-sm bg-dark navbar-purple justify-content-center">
			<a class="navbar-brand" href="/index.html">Timothy Wells</a>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/html/coding.html">Coding Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/html/games.html">Video Games</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/html/films.html">Films</a>
				</li>
				<!--<li class='nav-item'>
					<a class='nav-link' href="/files/Wells_CV.pdf" download>Download Résumé</a>
				</li>-->
				<li class="nav-item">
					<a class="nav-link" href="/html/contact.html">Contact</a>
				</li>
			</ul>
		</nav>`;
document.getElementById("navbar").innerHTML = navbar;
document.getElementById("navbar").classList.add("sticky-top");
//scrollTo(0, 0);