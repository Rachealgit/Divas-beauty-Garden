document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.querySelector('#cart-items');
    const totalAmountElement = document.getElementById('total-price');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('.product-name').textContent;
            const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

            // Add item to the cart array
            cartItems.push({ name: productName, price: productPrice });

            // Update the cart display
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        // Clear the current cart items
        cartItemsList.innerHTML = '';

        // Calculate the total amount
        let totalAmount = 0;

        // Loop through cart items and add them to the cart display
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);

            totalAmount += item.price;
        });

        // Update the total amount display
        totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
    }
});


var Images;


Images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfEt2L2WGPa6mYy-5F5RKzFVmSyIiRYLBPg&s', 'https://uk.sanctuary.com/wp-content/uploads/2024/01/100112378_3.png', 'https://www.jiomart.com/images/product/original/491085608/nivea-waterlily-oil-shower-gel-250-ml-product-images-o491085608-p491085608-3-202304280846.jpg?im=Resize=(420,420)','https://uk.sanctuary.com/wp-content/uploads/2024/01/100112378_3.png'];

let element_photo = document.getElementById('photo');
element_photo.innerText = 'Divas Beauty Garden';
element_photo.setAttribute("src", 'https://blog.prestigeflowers.co.uk/wp-content/uploads/sites/2/2023/10/test.jpg ');


document.getElementById('previous').addEventListener('click', (event) => {
  let element_photo2 = document.getElementById('photo');
  Images.push(Images[0]);
  element_photo2.setAttribute("src", Images.shift());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_photo3 = document.getElementById('photo');
  Images.unshift(Images.slice(-1)[0]);
  element_photo3.setAttribute("src", Images.pop());

});


document.getElementById('comment-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting in the traditional way

  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const comment = document.getElementById('comment').value;

  // Create a new list item for the comment
  const new_comment = document.createElement('li');
  new_comment.innerHTML = `<strong>${name}</strong> (${email}, ${phone}): <br>${comment}`;

  // Append the new comment to the comment list
  document.getElementById('comment-list').appendChild(new_comment);

  // Clear the form fields after submission
  document.getElementById('comment-form').reset();
});
