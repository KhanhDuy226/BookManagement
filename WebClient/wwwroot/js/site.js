// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var BookRenderer = (book, idx) => `
    <div class="col-md-6 col-lg-4 ">
		<div class="card shadow p-3 mb-5 bg-white rounded" style="max-width: 18rem;">
				<img src="https://product.hstatic.net/200000343833/product/skg_1_99a46c28476540159c121144504e2a17_master.jpg"
					class="card-img-top" height="100%" alt="${book.title}">
				<div class="card-body">
					<h4 class="card-title">${book.title}</h4>
					<div class="d-flex justify-content-between">
						<span >Type: ${book.type.name}</span>
						<strong>${book.price}$</strong>
					</div>
<hr>
					<p class="card-text">${book.note}</p>
				</div>
		</div>
	</div>
    `;